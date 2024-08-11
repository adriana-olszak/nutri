import { RecipeData, ServingData } from './types';
import * as fs from 'node:fs/promises';

export async function readJsonFile<T>(filePath: string): Promise<T> {
  try {
    console.log(`Reading JSON file: ${filePath}`);
    const rawData = await fs.readFile(filePath, 'utf8');
    return JSON.parse(rawData);
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error reading JSON file ${filePath}: ${error.message}`);
    }
    throw error;
  }
}


export function parseServings(servingString: string): ServingData {
  try {
    const servingData: ServingData = {
      servingsText: servingString,
      servingsMin: null,
      servingsMax: null
    };

    const numbers = servingString.match(/\d+/g);

    if (numbers) {
      if (numbers.length === 1) {
        servingData.servingsMin = servingData.servingsMax = parseInt(numbers[0]);
      } else if (numbers.length >= 2) {
        servingData.servingsMin = parseInt(numbers[0]);
        servingData.servingsMax = parseInt(numbers[1]);
      }
    }

    return servingData;
  } catch (error) {
    throw new Error(`Error parsing servings "${servingString}": ${error instanceof Error ? error.message : String(error)}`);
  }
}

export function getFieldValue(recipeData: RecipeData, key: string): string | undefined {
  const field = recipeData.fields.find(f => f.key === key);
  if (!field) {
    console.warn(`Field "${key}" not found for recipe "${recipeData.title.value}"`);
  }
  return field?.value;
}
