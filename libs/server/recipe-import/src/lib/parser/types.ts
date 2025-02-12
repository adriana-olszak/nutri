export interface UnitDetail {
  symbol: string;
  text: string;
  customFunction?: (tokens: readonly string[], startIndex: number) => { uom: string; uomText: string; newIndex: number };
  conversionGroup?: string;
}

export interface AlternativeQuantity {
  quantity: number;
  unit: string;
  unitText: string;
  minQuantity: number;
  maxQuantity: number;
}

export interface UnitConversion {
  defaultConversions: Map<string, string[]>;
  converters: Map<string, (input: number) => number>;
}

export interface Units {
  ingredientUnits: Map<string, UnitDetail>;
  timeUnits: Map<string, string>;
  timeUnitMultipliers: Map<string, number>;
  temperatureUnits: Map<string, UnitDetail>;
  ingredientPrepositions: string[];
  ingredientSizes: string[];
  temperatureMarkers: string[];
  ingredientQuantities: Map<string, number>;
  ingredientRangeMarker: string[];
  ingredientQuantityAddMarker: string[];
  unitConversions: UnitConversion;
  defaultTemperatureUnit: string | null;
  ingredientExtraMarkers: string[];
  ingredientParenthesisMarkers: string[];
  precisionOrder: string[];
}

export type ValidLanguages = "en" | "en-US" | string;

export interface InstructionTime {
  timeInSeconds: number;
  timeUnitText: string;
  timeText: string;
}

export interface IngredientParseResult {
  quantity: number;
  quantityText: string;
  minQuantity: number;
  maxQuantity: number;
  unit: string;
  unitText: string;
  ingredientText: string;
  extraInfo: string;
  alternativeQuantities: AlternativeQuantity[];
}

export interface ParseIngredientOptions {
  includeExtra: boolean;
  includeAlternativeUnits: boolean;
}

export interface ParseInstructionOptions{
  includeAlternativeTemperatureUnit: boolean;
}

export interface ParseInstructionResult {
  totalTimeInSeconds: number;
  timeItems: InstructionTime[];
  temperature: number;
  temperatureText: string;
  temperatureUnit: string;
  temperatureUnitText: string;
  alternativeTemperatures: AlternativeQuantity[];
}
