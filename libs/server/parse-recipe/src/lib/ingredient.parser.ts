import { AlternativeQuantity, IngredientParseResult, ParseIngredientOptions, Units, ValidLanguages } from './types';
import { tokenize } from './tokenizer';
import { convert, getUnitsOrThrow, round } from './units';
import { isFraction, isNumber, isSpace, isTextNumber } from './helpers/helpers';
import { isUnicodeFraction, unicodeFractions } from './unicodeFractions';
// There is a problem with the import of the Fraction module. It is not being imported correctly.
// eslint-disable-next-line @typescript-eslint/no-var-requires
const Fraction = require('fraction.js');

const DEFAULT_PARSE_INGREDIENT_OPTIONS: Readonly<ParseIngredientOptions> = {
  includeAlternativeUnits: false,
  includeExtra: true
};


export function parseIngredient(
  text: string,
  language: ValidLanguages,
  options: ParseIngredientOptions = DEFAULT_PARSE_INGREDIENT_OPTIONS
): IngredientParseResult | null {
  const units = getUnitsOrThrow(language);
  const tokens = tokenize(text, false);

  if (tokens.length === 0 || tokens.every(isSpace)) {
    return null;
  }

  return parseIngredientTokens(tokens, units, options);
}

export function parseIngredientTokens(
  tokens: readonly string[],
  units: Readonly<Units>,
  options: Readonly<ParseIngredientOptions>
): IngredientParseResult {
  const { quantity, quantityText, minQuantity, maxQuantity, endIndex: quantityEndIndex } = parseQuantity(tokens, units);
  const { unit, unitText, endIndex: unitEndIndex } = parseUnit(tokens, quantityEndIndex, units);
  const {
    ingredient,
    endIndex: ingredientEndIndex,
    extraInParentheses
  } = parseIngredientName(tokens, unitEndIndex, units);
  const extra = options.includeExtra ? parseExtra(tokens, ingredientEndIndex, extraInParentheses) : '';

  const alternativeQuantities = options.includeAlternativeUnits
    ? getIngredientConversions({ quantity, minQuantity, maxQuantity, unit, unitText }, units)
    : [];

  return {
    quantity,
    quantityText,
    minQuantity,
    maxQuantity,
    unit,
    unitText,
    ingredient,
    extra,
    alternativeQuantities
  };
}

interface QuantityParseResult {
  quantity: number;
  quantityText: string;
  minQuantity: number;
  maxQuantity: number;
  endIndex: number;
}

export function parseQuantity(tokens: readonly string[], units: Readonly<Units>): QuantityParseResult {
  let state: QuantityState = {
    quantityText: '',
    quantityConvertible: '',
    firstQuantityConvertible: '',
    index: 0,
    space: '',
    previousWasNumber: false
  };

  for (let i = 0; i < tokens.length; i++) {
    const item = tokens[i];
    const nextToken = tokens[i + 1];

    if (isQuantityToken(item, nextToken, state.previousWasNumber, units)) {
      state = appendQuantity(state, item, units);
    } else {
      const specialCaseResult = handleSpecialCases(state, item, units);
      if (specialCaseResult.breakLoop) {
        break;
      }
      state = specialCaseResult.state;
    }

    state = updateState(state, item, i);
  }

  if (state.quantityText.length === 0) {
    state = { ...state, index: 0 };
  }

  const firstQuantity = getQuantityValue(state.firstQuantityConvertible);
  const quantity = getQuantityValue(state.quantityConvertible);

  return {
    quantity: quantity || firstQuantity,
    quantityText: normalizeSpaces(state.quantityText),
    minQuantity: firstQuantity || quantity,
    maxQuantity: quantity || firstQuantity,
    endIndex: state.index
  };
}

interface UnitParseResult {
  unit: string;
  unitText: string;
  endIndex: number;
}

export function parseUnit(tokens: readonly string[], startIndex: number, units: Readonly<Units>): UnitParseResult {
  if (startIndex >= tokens.length) {
    return { unit: '', unitText: '', endIndex: startIndex };
  }

  const unitIndex = tokens.findIndex((token, index) =>
    index >= startIndex && !units.ingredientSizes.includes(token) && !isSpace(token)
  );

  if (unitIndex === -1 || unitIndex >= tokens.length) {
    return { unit: '', unitText: '', endIndex: tokens.length };
  }

  const possibleUOM = tokens[unitIndex];
  const possibleUOMLower = possibleUOM.toLowerCase();
  const unit = units.ingredientUnits.get(possibleUOMLower);

  if (!unit) {
    return { unit: '', unitText: '', endIndex: unitIndex };
  }

  if (unit.customFunction) {
    const { uom, uomText, newIndex } = unit.customFunction(tokens, unitIndex + 1);
    return { unit: uom, unitText: uomText, endIndex: newIndex };
  }

  return { unit: unit.text, unitText: possibleUOM, endIndex: unitIndex + 1 };
}

interface IngredientNameParseResult {
  ingredient: string;
  endIndex: number;
  extraInParentheses: string;
}

export function findEndIndex(tokens: readonly string[], startIndex: number) {
  const parenthesisStartIndex = tokens.findIndex((item, index) => index >= startIndex && item === '(');
  const parenthesisEndIndex = tokens.findIndex((item, index) => index >= startIndex && item === ')');
  const commaIndex = tokens.findIndex((item, index) => index >= startIndex && item === ',');
  const hasParenthesis = parenthesisStartIndex > 0 && parenthesisEndIndex > 0;
  const hasComma = commaIndex > 0;
  const hasCommaBeforeParenthesis = hasComma && hasParenthesis && commaIndex < parenthesisStartIndex;
  const hasCommaAfterParenthesis = hasComma && hasParenthesis && commaIndex > parenthesisEndIndex;

  if (!hasComma && !hasParenthesis) return tokens.length;
  if (!hasParenthesis) {
    return hasComma ? commaIndex : tokens.length;
  }

  if (!hasComma) {
    return tokens.length;
  }

  if (hasCommaBeforeParenthesis) {
    return commaIndex;
  }

  if (hasCommaAfterParenthesis) {
    return commaIndex;
  }

  return tokens.length;
}

export function parseIngredientName(tokens: readonly string[], startIndex: number, units: Readonly<Units>): IngredientNameParseResult {
  if (startIndex >= tokens.length) {
    return { ingredient: '', endIndex: startIndex, extraInParentheses: '' };
  }

  const endIndex = findEndIndex(tokens, startIndex);
  const cleanTokens: string[] = [];
  const extraInParentheses: string[] = [];
  let insideParentheses = false;
  let parenthesesContent = '';

  startIndex = skipInitialTokens(tokens, startIndex, units);
  const slicedTokens = tokens.slice(startIndex, endIndex);

  for (const item of slicedTokens) {
    if (item === '(') {
      insideParentheses = true;
      continue;
    }
    if (item === ')') {
      insideParentheses = false;
      extraInParentheses.push(parenthesesContent.trim());
      parenthesesContent = '';
      continue;
    }
    if (insideParentheses) {
      parenthesesContent += item;
    } else {
      cleanTokens.push(item);
    }
  }

  return {
    ingredient: cleanTokens.join('').trim(),
    endIndex: endIndex,
    extraInParentheses: extraInParentheses.join(', ')
  };
}

function normalizeSpaces(str: string): string {
  return str.replace(/\s+/g, ' ').trim();
}

export function parseExtra(tokens: readonly string[], startIndex: number, extraInParentheses: string): string {
  if (startIndex >= tokens.length && !extraInParentheses) {
    return '';
  }

  let extra = '';

  // Skip the comma separator if it's the first token
  if (tokens[startIndex] === ',') {
    startIndex++;
  }

  extra = normalizeSpaces(tokens.slice(startIndex).join(' ')).trim();

  if (extraInParentheses) {
    extra = extra ? `(${extraInParentheses}) ${extra}` : `(${extraInParentheses})`;
  }

  return extra;
}

export function getIngredientConversions(
  defaultQuantity: Readonly<{
    quantity: number;
    minQuantity: number;
    maxQuantity: number;
    unit: string;
    unitText: string;
  }>,
  units: Readonly<Units>
): AlternativeQuantity[] {
  const unit = units.ingredientUnits.get(defaultQuantity.unit);
  const conversionGroup = unit?.conversionGroup;

  if (!conversionGroup) return [];

  const defaultConversions = units.unitConversions.defaultConversions.get(conversionGroup);

  if (!defaultConversions) return [];

  return defaultConversions
    .filter((item) => item !== unit.symbol)
    .map((possibility) => createAlternativeQuantity(defaultQuantity, unit.symbol, possibility, units));
}

export function createAlternativeQuantity(
  defaultQuantity: Readonly<{ quantity: number; minQuantity: number; maxQuantity: number }>,
  fromUnit: string,
  toUnit: string,
  units: Readonly<Units>
): AlternativeQuantity {
  const quantity = convert(defaultQuantity.quantity, fromUnit, toUnit, units);
  const minQuantity = convert(defaultQuantity.minQuantity, fromUnit, toUnit, units);
  const maxQuantity = convert(defaultQuantity.maxQuantity, fromUnit, toUnit, units);

  const possibilityUOM = units.ingredientUnits.get(toUnit);

  return {
    quantity: round(quantity, 0, 4),
    unit: toUnit,
    unitText: possibilityUOM?.text ?? toUnit,
    minQuantity: round(minQuantity, 0, 4),
    maxQuantity: round(maxQuantity, 0, 4)
  };
}

// Helper functions
export function isQuantityToken(item: string, nextToken: string, previousWasNumber: boolean, units: Readonly<Units>): boolean {
  return isNumber(item) || isFraction(item, nextToken, previousWasNumber) || isUnicodeFraction(item) || isTextNumber(item, units);
}

interface QuantityState {
  quantityText: string;
  quantityConvertible: string;
  firstQuantityConvertible: string;
  index: number;
  space: string;
  previousWasNumber: boolean;
}

export function appendQuantity(state: Readonly<QuantityState>, item: string, units: Readonly<Units>): QuantityState {
  let value = item;
  let useSpecialSpace = false;

  if (isUnicodeFraction(item)) {
    value = unicodeFractions[item];
    useSpecialSpace = true;
  } else if (isTextNumber(item, units)) {
    value = units.ingredientQuantities.get(item.toLowerCase())?.toString() ?? item;
  }

  const spaceToUse = useSpecialSpace && state.quantityConvertible.length > 0 ? ' ' : state.space;
  return {
    ...state,
    quantityText: state.quantityText + `${state.space}${item}`,
    quantityConvertible: state.quantityConvertible + `${spaceToUse}${value}`
  };
}


export function handleSpecialCases(state: Readonly<QuantityState>, item: string, units: Readonly<Units>): {
  state: QuantityState;
  breakLoop: boolean
} {
  if (units.ingredientQuantityAddMarker.includes(item)) {
    return {
      state: {
        ...state,
        quantityText: state.quantityText + `${state.space}${item}`
      },
      breakLoop: false
    };
  } else if (state.quantityText.length > 0 && units.ingredientRangeMarker.includes(item)) {
    return {
      state: {
        ...state,
        firstQuantityConvertible: state.quantityConvertible,
        quantityText: state.quantityText + `${state.space}${item}${state.space}`,
        quantityConvertible: ''
      },
      breakLoop: false
    };
  } else if (!isSpace(item) && state.quantityText.length > 0) {
    return { state, breakLoop: true }; // Signal to break the loop
  }
  return { state, breakLoop: false };
}

export function updateState(state: Readonly<QuantityState>, item: string, index: number): QuantityState {
  return {
    ...state,
    space: isSpace(item) ? ' ' : '',
    previousWasNumber: isNumber(item),
    index: index + 1
  };
}

export function skipInitialTokens(tokens: readonly string[], startIndex: number, units: Readonly<Units>): number {
  if (isSpace(tokens[startIndex])) {
    startIndex++;
  }

  const firstToken = tokens[startIndex];
  const skipFirstToken =
    units.ingredientPrepositions.includes(firstToken) ||
    units.ingredientSizes.includes(firstToken) ||
    firstToken === '.';

  return skipFirstToken ? startIndex + 2 : startIndex;
}

export function getQuantityValue(quantityConvertible: string): number {
  if (quantityConvertible.includes('/')) {
    return new Fraction(quantityConvertible.trim()).round(2).valueOf();
  } else if (quantityConvertible.length > 0) {
    return parseFloat(quantityConvertible.trim());
  }
  return 0;
}

function isPrecisionHigher(
  current: QuantityParseResult & UnitParseResult,
  best: QuantityParseResult & UnitParseResult,
  units: Readonly<Units>
): boolean {
  const currentUnit = units.ingredientUnits.get(current.unit);
  const bestUnit = units.ingredientUnits.get(best.unit);

  if (!currentUnit || !bestUnit) return false;

  const currentPrecision = units.precisionOrder.indexOf(currentUnit.symbol);
  const bestPrecision = units.precisionOrder.indexOf(bestUnit.symbol);

  if (currentPrecision === -1 || bestPrecision === -1) return false;

  return currentPrecision < bestPrecision || (currentPrecision === bestPrecision && current.quantity > best.quantity);
}

export function parseQuantityAndUnit(tokens: readonly string[], units: Readonly<Units>): QuantityParseResult & UnitParseResult {
  let bestResult: QuantityParseResult & UnitParseResult = {
    quantity: 0,
    quantityText: '',
    minQuantity: 0,
    maxQuantity: 0,
    endIndex: 0,
    unit: '',
    unitText: ''
  };

  for (let i = 0; i < tokens.length; i++) {
    const quantityResult = parseQuantity(tokens.slice(i), units);
    if (quantityResult.quantity > 0) {
      const unitResult = parseUnit(tokens, i + quantityResult.endIndex, units);
      if (unitResult.unit) {
        const currentResult = {
          ...quantityResult,
          ...unitResult,
          endIndex: i + quantityResult.endIndex + unitResult.endIndex
        };
        if (isPrecisionHigher(currentResult, bestResult, units)) {
          bestResult = currentResult;
        }
      }
    }
  }

  return bestResult;
}
