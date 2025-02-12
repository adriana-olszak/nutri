import { Units, ValidLanguages } from './types';
import EnglishUnits from './units.en';
import AmericanEnglishUnits from './units.enUS';

const units: Map<string, Units> = new Map();
units.set('en', EnglishUnits);
units.set('en-us', AmericanEnglishUnits);

export function getUnitsOrThrow(language: ValidLanguages): Units {
  if (!language) {
    throw new Error(`Language ${language} is not supported`);
  }

  const result = units.get(language.toLowerCase());
  if (!result) {
    throw new Error(`Language ${language} is not supported`);
  }
  return result;
}

export function convert(input: number, from: string, to: string, units: Units): number {
  const converter = units.unitConversions.converters.get(`${from.toLowerCase()}->${to.toLowerCase()}`);
  if (!converter) {
    throw new Error(`No conversion found from ${from} to ${to}`);
  }

  return converter(input);
}

export function round(value: number, minimumFractionDigits: number, maximumFractionDigits: number): number {
  const formattedValue = value.toLocaleString('en', {
    useGrouping: false,
    minimumFractionDigits,
    maximumFractionDigits
  });
  return Number(formattedValue);
}
