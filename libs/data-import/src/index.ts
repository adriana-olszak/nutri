import 'reflect-metadata';
import * as path from 'path';
import { loadConfig, Config, FileConfig, USDAFileNames } from './config';
import { getParser } from './lib/parser';
import * as USDAModels from './lib/usda-models';
import { plainToInstance } from 'class-transformer';
import { SingleBar } from 'cli-progress';
import { MainUSDAModel } from './lib/usda-models';
import * as fs from 'node:fs';
import { Alignment, table } from 'table';

type ModelType<K extends USDAFileNames> =
  K extends USDAFileNames.Food ? USDAModels.FoodModel :
    K extends USDAFileNames.Nutrient ? USDAModels.NutrientModel :
      K extends USDAFileNames.FoodNutrient ? USDAModels.FoodNutrientModel :
        K extends USDAFileNames.FoodCategory ? USDAModels.FoodCategoryModel :
          K extends USDAFileNames.MeasureUnit ? USDAModels.MeasureUnitModel :
            K extends USDAFileNames.FoodAttribute ? USDAModels.FoodAttributeModel :
              K extends USDAFileNames.FoodPortion ? USDAModels.FoodPortionModel :
                K extends USDAFileNames.FoodCalorieConversionFactor ? USDAModels.FoodCalorieConversionFactorModel :
                  K extends USDAFileNames.FoodNutrientConversionFactor ? USDAModels.FoodNutrientConversionFactor :
                    K extends USDAFileNames.MarketAcquisition ? USDAModels.MarketAcquisitionModel :
                      never;

export type RawProcessedDataMaps = {
  [K in USDAFileNames]: Map<number, ModelType<K>>;
};
export type GroupedProcessedDataMaps = {
  [K in USDAFileNames]: K extends keyof GroupedEntities
    ? Map<number, ({ models: ModelType<K>[] } & { [P in GroupedEntities[K]]: number })>
    : K extends keyof AggregatedEntities
      ? Map<string, { [P in AggregatedEntities[K][number]]: number[] } & ModelType<K>>
      : Map<number, ModelType<K>>;
};
export type GroupedEntities = {
  [USDAFileNames.FoodNutrient]: 'fdc_id';
  [USDAFileNames.FoodAttribute]: 'fdc_id';
  [USDAFileNames.FoodPortion]: 'fdc_id';
  [USDAFileNames.MarketAcquisition]: 'fdc_id';
};

export type AggregatedEntities = {
  [USDAFileNames.Food]: ['fdc_id', 'food_category_id'];
};

async function main() {
  try {
    const config = loadConfig(path.join(__dirname, 'config.yml'));
    const processedData = await processFiles(config);
    const groupedModels = groupProcessedData(config, processedData);
    const mainUSDAModel = createMainUSDAModel(groupedModels);
    console.log(JSON.stringify(mainUSDAModel[0]));
    // const enrichedFoodModels = enrichFoodModels(config, processedData);

    // console.log('Grouped Food Models:', groupedFoodModels);
  } catch (error) {
    console.error(`Unhandled error: ${error.message}`);
    process.exit(1);
  }
}

async function processFiles(config: Config): Promise<RawProcessedDataMaps> {
  const processedData: Partial<RawProcessedDataMaps> = {};
  const sortedFiles = config.data_sources
    .flatMap(source => source.files)
    .sort((a, b) => (a.order || 0) - (b.order || 0));

  for (const file of sortedFiles) {
    const dataSource = config.data_sources.find(ds => ds.files.includes(file))!;
    const parser = getParser(dataSource.parserType);
    const data = await parser.parse(path.join(__dirname, file.path));
    processedData[file.name] = processFileData(file, data);
  }


  return processedData as RawProcessedDataMaps;
}

function stringifyFirstFiveElements(data: Map<string | number, any>): string {
  const result = {};
  let count = 0;
  for (const [key, value] of data.entries()) {
    if (count >= 5) break;
    result[key] = value;
    count++;
  }
  return JSON.stringify(result, null, 2);
}

function collectReportData(entityName: string, data: Map<number | string, any>) {
  const totalEntries = data.size;
  let totalItems = 0;
  let minItems = Infinity;
  let maxItems = 0;
  let isGrouped = false;

  data.forEach((value, key) => {
    let itemCount: number;

    if (Array.isArray(value)) {
      itemCount = value.length;
      isGrouped = true;
    } else if (value && typeof value === 'object' && 'models' in value && Array.isArray(value.models)) {
      itemCount = value.models.length;
      isGrouped = true;
    } else if (value && typeof value === 'object' && Object.values(value).some(v => Array.isArray(v))) {
      // This checks if any of the object's values is an array, indicating grouped data
      itemCount = Object.values(value).reduce((sum: number, v) => {
        if (Array.isArray(v)) {
          return sum + v.length;
        } else {
          return sum + 1;
        }
        return sum;
      }, 0) as number;
      isGrouped = true;
    } else {
      itemCount = 1;
    }

    totalItems += itemCount;
    minItems = Math.min(minItems, itemCount);
    maxItems = Math.max(maxItems, itemCount);
  });

  // If not grouped, adjust min and max
  if (!isGrouped) {
    minItems = 1;
    maxItems = 1;
  }

  return {
    'Entity Name': entityName,
    'Total Entries': totalEntries,
    'Total Items': totalItems,
    'Avg Items/Entry': totalEntries > 0 ? (totalItems / totalEntries).toFixed(2) : '0',
    'Min Items/Entry': minItems === Infinity ? 0 : minItems,
    'Max Items/Entry': maxItems
  };
}

function processFileData(file: FileConfig, data: any[]): Map<number, any> {
  const bar = new SingleBar({
    format: `Processing ${file.name} | {bar} | {percentage}% || {value}/{total} Items`,
    barCompleteChar: '\u2588',
    barIncompleteChar: '\u2591'
  });

  bar.start(data.length, 0);

  const processedData = new Map();

  for (const item of data) {
    let model;
    switch (file.name) {
      case USDAFileNames.Food:
        model = plainToInstance(USDAModels.FoodModel, item);
        break;
      case USDAFileNames.Nutrient:
        model = plainToInstance(USDAModels.NutrientModel, item);
        break;
      case USDAFileNames.FoodNutrient:
        model = plainToInstance(USDAModels.FoodNutrientModel, item);
        break;
      case USDAFileNames.FoodCategory:
        model = plainToInstance(USDAModels.FoodCategoryModel, item);
        break;
      case USDAFileNames.MeasureUnit:
        model = plainToInstance(USDAModels.MeasureUnitModel, item);
        break;
      case USDAFileNames.FoodAttribute:
        model = plainToInstance(USDAModels.FoodAttributeModel, item);
        break;
      case USDAFileNames.FoodPortion:
        model = plainToInstance(USDAModels.FoodPortionModel, item);
        break;
      case USDAFileNames.FoodCalorieConversionFactor:
        model = plainToInstance(USDAModels.FoodCalorieConversionFactorModel, item);
        break;
      case USDAFileNames.FoodNutrientConversionFactor:
        model = plainToInstance(USDAModels.FoodNutrientConversionFactor, item);
        break;
      case USDAFileNames.MarketAcquisition:
        model = plainToInstance(USDAModels.MarketAcquisitionModel, item);
        break;
      default:
        throw new Error(`Unsupported file name: ${file.name}`);
    }
    model.validate();
    processedData.set(model.key(), model);
    bar.increment();
  }

  bar.stop();
  return processedData;
}

//
//
// function enrichFoodModels(config: Config, processedData: ProcessedDataMaps): Map<number, USDAModels.FoodModel> {
//   const enrichedFoodModels = new Map(processedData[USDAFileNames.Food]);
//
//   for (const [fdcId, foodModel] of enrichedFoodModels) {
//     for (const enrichSource of config.processing.enrichment) {
//       switch (enrichSource.source) {
//         case USDAFileNames.Nutrient:
//           const foodNutrients = processedData[USDAFileNames.FoodNutrient].get(fdcId) || [];
//           foodModel.nutrients = foodNutrients.map(fn => ({
//             ...fn,
//             nutrientDetails: processedData[USDAFileNames.Nutrient].get(fn.nutrient_id)
//           }));
//           break;
//         case USDAFileNames.FoodCategory:
//           foodModel.category = processedData[USDAFileNames.FoodCategory].get(foodModel.food_category_id);
//           break;
//         case USDAFileNames.FoodAttribute:
//           foodModel.attributes = processedData[USDAFileNames.FoodAttribute].get(fdcId) || [];
//           break;
//         case USDAFileNames.FoodPortion:
//           foodModel.portions = processedData[USDAFileNames.FoodPortion].get(fdcId) || [];
//           break;
//         case USDAFileNames.FoodCalorieConversionFactor:
//           foodModel.calorieConversionFactor = processedData[USDAFileNames.FoodCalorieConversionFactor].get(foodModel.food_nutrient_conversion_factor_id);
//           break;
//         case USDAFileNames.MarketAcquisition:
//           foodModel.marketAcquisitions = processedData[USDAFileNames.MarketAcquisition].get(fdcId) || [];
//           break;
//       }
//     }
//   }
//
//   return enrichedFoodModels;
// }

function groupProcessedData(config: Config, processedData: RawProcessedDataMaps): GroupedProcessedDataMaps {
  const groupedData: Partial<GroupedProcessedDataMaps> = {};
  const beforeGroupingReport: any[] = [];
  const afterGroupingReport: any[] = [];
  const firstFiveElementsReport: { [key: string]: string } = {};

  // Generate report for all data before grouping
  for (const [key, value] of Object.entries(processedData)) {
    beforeGroupingReport.push(collectReportData(key, value));
  }

  for (const groupConfig of config.processing.grouping) {
    const entityData = processedData[groupConfig.entity];
    if (entityData) {
      const groupedMap = new Map<string | number, any>();
      entityData.forEach((value, key) => {
        const groupKeyParts = groupConfig.group_by.map(field => (value as any)[field]);
        const groupKeyString = groupKeyParts.join('|');
        const groupKey = groupKeyParts.length === 1 && !isNaN(Number(groupKeyString))
          ? Number(groupKeyString)
          : groupKeyString;

        if (!groupedMap.has(groupKey)) {
          groupedMap.set(groupKey, {});
          groupConfig.group_by.forEach(field => {
            groupedMap.get(groupKey)![field] = (value as any)[field];
          });
        }

        // Perform aggregations if specified
        if (groupConfig.aggregate) {
          groupConfig.aggregate.forEach(agg => {
            const fieldValue = (value as any)[agg.field];
            switch (agg.operation) {
              case 'collect':
                if (!groupedMap.get(groupKey)![agg.field]) {
                  groupedMap.get(groupKey)![agg.field] = [];
                }
                groupedMap.get(groupKey)![agg.field].push(fieldValue);
                break;
              case 'sum':
                groupedMap.get(groupKey)![agg.field] = (groupedMap.get(groupKey)![agg.field] || 0) + fieldValue;
                break;
              case 'avg':
                if (!groupedMap.get(groupKey)![`${agg.field}_sum`]) {
                  groupedMap.get(groupKey)![`${agg.field}_sum`] = 0;
                  groupedMap.get(groupKey)![`${agg.field}_count`] = 0;
                }
                groupedMap.get(groupKey)![`${agg.field}_sum`] += fieldValue;
                groupedMap.get(groupKey)![`${agg.field}_count`]++;
                groupedMap.get(groupKey)![agg.field] = groupedMap.get(groupKey)![`${agg.field}_sum`] / groupedMap.get(groupKey)![`${agg.field}_count`];
                break;
              case 'min':
                groupedMap.get(groupKey)![agg.field] = Math.min(groupedMap.get(groupKey)![agg.field] || Infinity, fieldValue);
                break;
              case 'max':
                groupedMap.get(groupKey)![agg.field] = Math.max(groupedMap.get(groupKey)![agg.field] || -Infinity, fieldValue);
                break;
            }
          });
        } else {
          // If no aggregation is specified, collect all entities
          if (!groupedMap.get(groupKey)!.models) {
            groupedMap.get(groupKey)!.models = [];
          }
          groupedMap.get(groupKey)!.models.push(value);
        }
      });
      groupedData[groupConfig.entity] = groupedMap as any;
      afterGroupingReport.push(collectReportData(groupConfig.entity, groupedMap));
      firstFiveElementsReport[`${groupConfig.entity} (Grouped)`] = stringifyFirstFiveElements(groupedMap);
    }
  }

  // Copy non-grouped data as-is and add to after-grouping report
  for (const [key, value] of Object.entries(processedData)) {
    if (!(groupedData[key])) {
      groupedData[key] = value;
      afterGroupingReport.push(collectReportData(key, value));
      firstFiveElementsReport[key] = stringifyFirstFiveElements(value);
    }
  }
// Sort both reports by entity name
  beforeGroupingReport.sort((a, b) => a['Entity Name'].localeCompare(b['Entity Name']));
  afterGroupingReport.sort((a, b) => a['Entity Name'].localeCompare(b['Entity Name']));

  console.log('\nProcessed Data Report (Before Grouping):');
  console.table(beforeGroupingReport);

  console.log('\nProcessed Data Report (After Grouping):');
  console.table(afterGroupingReport);

  return groupedData as GroupedProcessedDataMaps;
}

function createMainUSDAModel(groupedModels: GroupedProcessedDataMaps) {
  const logStream = fs.createWriteStream('food_portions_log.txt', { flags: 'a' });
  const models = Array.from(groupedModels['food']).map(([name, data]) => {
    const fdc_ids: number[] = data.fdc_id;
    const category_ids: number[] = data.food_category_id;
    const model = new MainUSDAModel();
    model.fdc_ids = fdc_ids;
    model.name = name;
    const food_nutrient_conversion_factor = fdc_ids.map(fdc_id => groupedModels['food_nutrient_conversion_factor'].get(fdc_id)).filter(Boolean).map((food_nutrient_conversion_factor) => {
      const food_calorie_conversion = groupedModels['food_calorie_conversion_factor'].get(food_nutrient_conversion_factor.id);
      return {
        nutrients: food_nutrient_conversion_factor,
        calories: food_calorie_conversion
      };
    });
    const food_attributes = fdc_ids.map(fdc_id => groupedModels['food_attribute'].get(fdc_id)).filter(Boolean).map((food_attribute) => {
      return food_attribute.models;
    }).flat();
    const food_nutrients = fdc_ids.map(fdc_id => groupedModels['food_nutrient'].get(fdc_id)).filter(Boolean).map((food_nutrient) => {
      return food_nutrient.models.map((model) => {
        const nutrient = groupedModels['nutrient'].get(model.nutrient_id);
        return {
          foodNutrient: model,
          nutrient
        };
      });
    }).flat();
// Handle food portions
    const portionMap = new Map<string, {
      count: number,
      totalGramWeight: number,
      portion: any,
      measure: any
    }>();

    fdc_ids.forEach(fdc_id => {
      const foodPortion = groupedModels['food_portion'].get(fdc_id);
      if (foodPortion) {
        foodPortion.models.forEach(model => {
          const measure_unit = groupedModels['measure_unit'].get(model.measure_unit_id);
          const key = `${model.measure_unit_id}_${model.amount}`;

          if (portionMap.has(key)) {
            const existing = portionMap.get(key)!;
            existing.count++;
            existing.totalGramWeight += model.gram_weight;

            // Log differences other than gram_weight
            if (JSON.stringify(existing.portion) !== JSON.stringify(model)) {
              logStream.write(`Difference found for food ${fdc_id}, portion key ${key}:\n`);
              logStream.write(`Existing: ${JSON.stringify(existing.portion)}\n`);
              logStream.write(`New: ${JSON.stringify(model)}\n\n`);
            }
          } else {
            portionMap.set(key, {
              count: 1,
              totalGramWeight: model.gram_weight,
              portion: { ...model },
              measure: measure_unit
            });
          }
        });
      }
    });

    model.foodPortions = Array.from(portionMap.values()).map(item => ({
      portion: {
        ...item.portion,
        gram_weight: item.totalGramWeight / item.count
      },
      measure: item.measure
    }));

    // Handle UPC codes
    const upcSet = new Set<string>();
    fdc_ids.forEach(fdc_id => {
      const marketAcquisition = groupedModels['market_acquisition'].get(fdc_id);
      if (marketAcquisition) {
        marketAcquisition.models.forEach(model => {
          if (model.upc_code) upcSet.add(model.upc_code);
        });
      }
    });
    model.upcCodes = Array.from(upcSet);

    // Handle food categories
    const categoryMap = new Map<number, any>();
    category_ids.forEach(category_id => {
      const category = groupedModels['food_category'].get(category_id);
      if (category && !categoryMap.has(category.id)) {
        categoryMap.set(category.id, category);
      }
    });
    model.foodCategories = Array.from(categoryMap.values());

    model.conversionFactors = food_nutrient_conversion_factor;
    model.foodAttributes = food_attributes;
    model.foodNutrients = food_nutrients;

    return model;
  });
  logStream.end();
  generateReport(models);
  return models;
}

// Separate function for generating the report
function generateReport(models: MainUSDAModel[]) {
  const report = models.map(model => ({
    name: model.name,
    conversionFactors: model.conversionFactors.length,
    foodCategories: model.foodCategories.length,
    foodAttributes: model.foodAttributes.length,
    foodNutrients: model.foodNutrients.length,
    foodPortions: model.foodPortions.length,
    upcCodes: model.upcCodes.length,
    fdc_ids: model.fdc_ids.length
  }));

  // Prepare data for table
  const tableData = [
    ['Name', 'Conversion Factors', 'Food Categories', 'Food Attributes', 'Food Nutrients', 'Food Portions', 'UPC Codes', 'FDC IDs'],
    ...report.map(r => [
      r.name,
      r.conversionFactors.toString(),
      r.foodCategories.toString(),
      r.foodAttributes.toString(),
      r.foodNutrients.toString(),
      r.foodPortions.toString(),
      r.upcCodes.toString(),
      r.fdc_ids.toString()
    ])
  ];

  // Add totals row
  const totals = report.reduce((acc, r) => ({
    name: 'TOTAL',
    conversionFactors: acc.conversionFactors + r.conversionFactors,
    foodCategories: acc.foodCategories + r.foodCategories,
    foodAttributes: acc.foodAttributes + r.foodAttributes,
    foodNutrients: acc.foodNutrients + r.foodNutrients,
    foodPortions: acc.foodPortions + r.foodPortions,
    upcCodes: acc.upcCodes + r.upcCodes,
    fdc_ids: acc.fdc_ids + r.fdc_ids
  }), {
    name: 'TOTAL',
    conversionFactors: 0,
    foodCategories: 0,
    foodAttributes: 0,
    foodNutrients: 0,
    foodPortions: 0,
    upcCodes: 0,
    fdc_ids: 0
  });

  tableData.push([
    totals.name,
    totals.conversionFactors.toString(),
    totals.foodCategories.toString(),
    totals.foodAttributes.toString(),
    totals.foodNutrients.toString(),
    totals.foodPortions.toString(),
    totals.upcCodes.toString(),
    totals.fdc_ids.toString()
  ]);

  // Generate and print the table
  const tableConfig = {
    columns: {
      0: { alignment: 'left' as Alignment, width: 30 },
      1: { alignment: 'right' as Alignment },
      2: { alignment: 'right' as Alignment },
      3: { alignment: 'right' as Alignment },
      4: { alignment: 'right' as Alignment },
      5: { alignment: 'right' as Alignment },
      6: { alignment: 'right' as Alignment },
      7: { alignment: 'right' as Alignment }
    }
  };

  console.log(table(tableData, tableConfig));

  console.log(`Total number of models created: ${models.length}`);
}

main().catch(console.error);
