import {
  ValidLanguages,
  Units,
  AlternativeQuantity,
  InstructionTime,
  ParseInstructionOptions,
  ParseInstructionResult
} from './types';
import { tokenize } from './tokenizer';
import { convert, round, getUnitsOrThrow } from './units';
import { isNumber, isSpace } from './helpers/helpers';

const DEFAULT_PARSE_INSTRUCTION_OPTIONS: Readonly<ParseInstructionOptions> = {
  includeAlternativeTemperatureUnit: false
};

export function parseInstruction(
  text: string,
  language: ValidLanguages,
  options: ParseInstructionOptions = DEFAULT_PARSE_INSTRUCTION_OPTIONS
): ParseInstructionResult | null {
  const units = getUnitsOrThrow(language);
  const tokens = tokenize(text, false);

  if (tokens.length === 0 || tokens.every(isSpace)) {
    return null;
  }

  return parseInstructionTokens(tokens, units, options);
}

export function parseInstructionTokens(
  tokens: readonly string[],
  units: Readonly<Units>,
  options: Readonly<ParseInstructionOptions>
): ParseInstructionResult {
  const { timeItems, totalTimeInSeconds } = parseTime(tokens, units);
  const { temperature, temperatureText, temperatureUnit, temperatureUnitText } = parseTemperature(tokens, units);

  const alternativeTemperatures = options.includeAlternativeTemperatureUnit && temperature > 0
    ? getTemperatureConversions(temperature, temperatureUnit, units)
    : [];

  return {
    totalTimeInSeconds,
    timeItems,
    temperature,
    temperatureText,
    temperatureUnit,
    temperatureUnitText,
    alternativeTemperatures
  };
}

interface TimeParseResult {
  timeItems: InstructionTime[];
  totalTimeInSeconds: number;
}

export function parseTime(tokens: readonly string[], units: Readonly<Units>): TimeParseResult {
  let state: TimeState = {
    timeItems: [],
    totalTimeInSeconds: 0,
    currentNumber: 0,
    currentNumberText: '',
  };

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i].toLowerCase();

    if (isNumber(token)) {
      state = updateNumberState(state, token);
    } else if (state.currentNumber > 0) {
      const timeUnit = units.timeUnits.get(token) || units.timeUnits.get(token.replace(/s$/, ''));
      if (timeUnit) {
        state = processTimeUnit(state, timeUnit, token, units);
      }
    } else if (token === 'about' && isNumber(tokens[i + 1])) {
      // Handle cases like "about 2 hours"
      state = updateNumberState(state, tokens[i + 1]);
      i++; // Skip the next token as we've already processed it
    }
  }

  return {
    timeItems: state.timeItems,
    totalTimeInSeconds: state.totalTimeInSeconds
  };
}

interface TemperatureParseResult {
  temperature: number;
  temperatureText: string;
  temperatureUnit: string;
  temperatureUnitText: string;
}

export function parseTemperature(tokens: readonly string[], units: Readonly<Units>): TemperatureParseResult {
  let state: TemperatureState = {
    temperature: 0,
    temperatureText: '',
    temperatureUnit: '',
    temperatureUnitText: '',
    currentNumber: 0,
    currentNumberText: '',
  };

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i].toLowerCase();
    const nextToken = tokens[i + 1]?.toLowerCase();

    if (isNumber(token)) {
      state = updateNumberState(state, token);
    } else if (state.currentNumber > 0) {
      if (units.temperatureMarkers.includes(token) || units.temperatureUnits.has(token)) {
        state = processTemperatureUnit(state, token, nextToken, units);
        break; // Stop after finding the first valid temperature
      } else if (token === '°' && nextToken) {
        // Handle cases like "450°F"
        state = processTemperatureUnit(state, nextToken, '', units);
        break;
      }
    }
  }

  return {
    temperature: state.temperature,
    temperatureText: state.temperatureText,
    temperatureUnit: state.temperatureUnit,
    temperatureUnitText: state.temperatureUnitText
  };
}

export function getTemperatureConversions(
  temperature: number,
  uom: string,
  units: Readonly<Units>
): AlternativeQuantity[] {
  const unit = units.temperatureUnits.get(uom.toLowerCase());
  const conversionGroup = unit?.conversionGroup;

  if (!conversionGroup) return [];

  const defaultConversions = units.unitConversions.defaultConversions.get(conversionGroup);

  if (!defaultConversions) return [];

  return defaultConversions
    .filter((item) => item !== unit.symbol)
    .map((possibility) => createAlternativeTemperature(temperature, unit.symbol, possibility, units));
}

export function createAlternativeTemperature(
  temperature: number,
  fromUnit: string,
  toUnit: string,
  units: Readonly<Units>
): AlternativeQuantity {
  const quantity = convert(temperature, fromUnit, toUnit, units);
  const possibilityUOM = units.temperatureUnits.get(toUnit);

  return {
    quantity: round(quantity, 0, 4),
    unit: toUnit,
    unitText: possibilityUOM?.text ?? toUnit,
    minQuantity: round(quantity, 0, 4),
    maxQuantity: round(quantity, 0, 4)
  };
}

// Helper functions and interfaces

interface TimeState {
  timeItems: InstructionTime[];
  totalTimeInSeconds: number;
  currentNumber: number;
  currentNumberText: string;
}

interface TemperatureState {
  temperature: number;
  temperatureText: string;
  temperatureUnit: string;
  temperatureUnitText: string;
  currentNumber: number;
  currentNumberText: string;
}

function updateNumberState<T extends { currentNumber: number; currentNumberText: string }>(
  state: T,
  token: string
): T {
  return {
    ...state,
    currentNumber: Number(token),
    currentNumberText: token
  };
}

function processTimeUnit(state: TimeState, timeUnit: string, token: string, units: Readonly<Units>): TimeState {
  const timeMultiplier = units.timeUnitMultipliers.get(timeUnit);
  if (timeMultiplier !== undefined) {
    const timeInSeconds = state.currentNumber * timeMultiplier;
    return {
      ...state,
      totalTimeInSeconds: state.totalTimeInSeconds + timeInSeconds,
      timeItems: [
        ...state.timeItems,
        {
          timeInSeconds,
          timeUnitText: token,
          timeText: state.currentNumberText
        }
      ],
      currentNumber: 0,
      currentNumberText: ''
    };
  }
  return { ...state, currentNumber: 0, currentNumberText: '' };
}

function processTemperatureUnit(
  state: TemperatureState,
  token: string,
  nextToken: string,
  units: Readonly<Units>
): TemperatureState {
  if (units.temperatureMarkers.includes(token)) {
    const defaultUnit = units.defaultTemperatureUnit;
    if (defaultUnit) {
      const tempUnit = units.temperatureUnits.get(defaultUnit);
      if (tempUnit) {
        return {
          ...state,
          temperature: state.currentNumber,
          temperatureText: state.currentNumberText,
          temperatureUnit: tempUnit.text,
          temperatureUnitText: token,
          currentNumber: 0,
          currentNumberText: ''
        };
      }
    }
  }

  if (units.temperatureUnits.has(token)) {
    const tempUnit = units.temperatureUnits.get(token);
    if (tempUnit) {
      return {
        ...state,
        temperature: state.currentNumber,
        temperatureText: state.currentNumberText,
        temperatureUnit: tempUnit.text,
        temperatureUnitText: token,
        currentNumber: 0,
        currentNumberText: ''
      };
    }
  }

  return { ...state, currentNumber: 0, currentNumberText: '' };
}
