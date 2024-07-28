import 'reflect-metadata';
import * as fs from 'fs';
import * as yaml from 'js-yaml';
import { plainToClass } from 'class-transformer';
import { IsEnum, IsArray, ValidateNested, validateSync, IsString, IsNumber, IsOptional, IsObject } from 'class-validator';
import { Type } from 'class-transformer';

export enum FoodDataSource {
  USDA = 'USDA',
  CIQUAL = 'CIQUAL',
}

export enum ParserType {
  CSV = 'csv',
  XML = 'xml',
}

export enum USDAFileNames {
  MarketAcquisition = 'market_acquisition',
  FoodPortion = 'food_portion',
  FoodNutrient = 'food_nutrient',
  FoodAttribute = 'food_attribute',
  Food = 'food',
  Nutrient = 'nutrient',
  MeasureUnit = 'measure_unit',
  FoodCategory = 'food_category',
  FoodCalorieConversionFactor = 'food_calorie_conversion_factor',
  FoodNutrientConversionFactor = 'food_nutrient_conversion_factor',
}
type AggregationOperation = 'collect' | 'sum' | 'avg' | 'min' | 'max';
export class FileConfig {
  @IsString()
  @IsEnum(USDAFileNames)
  name: USDAFileNames;

  @IsString()
  path: string;

  @IsNumber()
  @IsOptional()
  order?: number;
}

export class DataSourceConfig {
  @IsEnum(FoodDataSource)
  type: FoodDataSource;

  @IsEnum(ParserType)
  parserType: ParserType;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => FileConfig)
  files: FileConfig[];
}

// export class EnrichmentConfig {
//   @IsString()
//   source: string;
//
//   @IsString()
//   join_key: string;
// }

export class AggregateConfig {
  @IsString()
  field: string;

  @IsString()
  operation: AggregationOperation;
}

export class GroupingConfig {
  @IsString()
  entity: USDAFileNames;

  @IsArray()
  @IsString({ each: true })
  group_by: string[];

  @IsArray()
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => AggregateConfig)
  aggregate?: AggregateConfig[];
}

export class ProcessingConfig {
  @ValidateNested()
  @Type(() => GroupingConfig)
  grouping: GroupingConfig[];

  // @IsObject()
  // enrichment: {
  //   main_entity: string;
  //   entities: EnrichmentConfig[];
  // };
}

export class Config {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => DataSourceConfig)
  data_sources: DataSourceConfig[];

  @ValidateNested()
  @Type(() => ProcessingConfig)
  processing: ProcessingConfig;
}

export function loadConfig(path: string): Config {
  try {
    const fileContents = fs.readFileSync(path, 'utf8');
    const parsedYaml = yaml.load(fileContents) as Record<string, any>;

    const config = plainToClass(Config, parsedYaml);
    const errors = validateSync(config, { skipMissingProperties: false });

    if (errors.length > 0) {
      throw new Error(errors.toString());
    }

    return config;
  } catch (error) {
    throw new Error(`Error loading config: ${error.message}`);
  }
}
