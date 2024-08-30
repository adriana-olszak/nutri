import * as fs from 'fs';
import * as path from 'path';
import * as fastcsv from 'fast-csv';

export interface FoodData {
  id: number;
  description: string;
  scientificName: string;
  category: {
    name: string;
    id: number;
    code: number;
  };
  conversionFactors: Array<{ value: number; measureId: number, measureDescription: string }>;
  yields: Array<{ id: number, amount: number; description: string }>;
  nutrients: Array<{ id: number, name: string; unit: string; value: number; decimals: number }>;
}

async function readCsvFile<File>(filePath: string): Promise<File[]> {
  return new Promise((resolve, reject) => {
    const results: File[] = [];
    fs.createReadStream(filePath)
      .pipe(fastcsv.parse({ headers: true }))
      .on('data', (data) => results.push(data))
      .on('end', () => resolve(results))
      .on('error', (error) => reject(error));
  });
}

interface ConversionFactor {
  FoodID: number,
  MeasureID: number,
  ConversionFactorValue: number,
  ConvFactorDateOfEntry: string
}

interface FoodGroup {
  FoodGroupID: number,
  FoodGroupCode: number,
  FoodGroupName: string,
  FoodGroupNameF: string
}

interface FoodName {
  FoodID: number,
  FoodCode: number,
  FoodGroupID: number,
  FoodSourceID: number,
  FoodDescription: string,
  FoodDescriptionF: string,
  FoodDateOfEntry: string,
  FoodDateOfPublication: string,
  CountryCode?: string,
  ScientificName?: string
}

interface MeasureName {
  MeasureID: number,
  MeasureDescription: string,
  MeasureDescriptionF: string
}

interface NutrientAmount {
  FoodID: number,
  NutrientID: number,
  NutrientValue: number,
  StandardError?: number,
  NumberofObservations?: number,
  NutrientSourceID: number,
  NutrientDateOfEntry: string
}

interface NutrientName {
  NutrientID: number,
  NutrientCode: number,
  NutrientSymbol: string,
  NutrientUnit: string,
  NutrientName: string,
  NutrientNameF: string,
  Tagname: string
  NutrientDecimals: number
}

interface YieldAmount {
  FoodID: number,
  YieldID: number,
  YieldAmount: number,
  YieldDateofEntry: string
}

interface YieldName {
  YieldID: number,
  YieldDescription: string,
  YieldDescriptionF: string
}

export async function processCanadianData() {
  const dataDir = path.join(__dirname, '__data__', 'canada');

  const conversionFactor = await readCsvFile<ConversionFactor>(path.join(dataDir, 'CONVERSION_FACTOR.csv'));
  const foodGroup = await readCsvFile<FoodGroup>(path.join(dataDir, 'FOOD_GROUP.csv'));
  const foodName = await readCsvFile<FoodName>(path.join(dataDir, 'FOOD_NAME.csv'));
  const measureName = await readCsvFile<MeasureName>(path.join(dataDir, 'MEASURE_NAME.csv'));
  const nutrientAmount = await readCsvFile<NutrientAmount>(path.join(dataDir, 'NUTRIENT_AMOUNT.csv'));
  const nutrientName = await readCsvFile<NutrientName>(path.join(dataDir, 'NUTRIENT_NAME.csv'));
  const yieldAmount = await readCsvFile<YieldAmount>(path.join(dataDir, 'YIELD_AMOUNT.csv'));
  const yieldName = await readCsvFile<YieldName>(path.join(dataDir, 'YIELD_NAME.csv'));

  const foodMap = new Map<number, FoodData>();

  foodName.forEach((food) => {
    const foodGroupName = foodGroup.find((fg) => fg.FoodGroupID === food.FoodGroupID);


    foodMap.set(food.FoodID, {
      id: food.FoodID,
      description: food.FoodDescription,
      scientificName: food.ScientificName,
      category: {
        name: foodGroupName.FoodGroupName,
        id: foodGroupName.FoodGroupID,
        code: foodGroupName.FoodGroupCode
      },
      conversionFactors: [],
      yields: [],
      nutrients: []
    });
  });

  conversionFactor.forEach((cf) => {
    const food = foodMap.get(cf.FoodID);
    if (food) {
      const measure = measureName.find((m) => m.MeasureID === cf.MeasureID);
      food.conversionFactors.push({
        value: Number(cf.ConversionFactorValue),
        measureDescription: measure?.MeasureDescription || '',
        measureId: measure?.MeasureID
      });
    }
  });

  yieldAmount.forEach((ya) => {
    const food = foodMap.get(ya.FoodID);
    if (food) {
      const yieldDesc = yieldName.find((yn) => yn.YieldID === ya.YieldID);
      food.yields.push({
        id: ya.YieldID,
        amount: Number(ya.YieldAmount),
        description: yieldDesc?.YieldDescription || ''
      });
    }
  });

  nutrientAmount.forEach((na) => {
    const food = foodMap.get(na.FoodID);
    if (food) {
      const nutrient = nutrientName.find((nn) => nn.NutrientID === na.NutrientID);
      food.nutrients.push({
        id: nutrient?.NutrientID,
        name: nutrient?.NutrientName || '',
        unit: nutrient?.NutrientUnit || '',
        value: Number(na.NutrientValue),
        decimals: nutrient?.NutrientDecimals || 2
      });
    }
  });

  return foodMap;
}
