import 'reflect-metadata';
import * as fs from 'fs';
import * as yaml from 'js-yaml';
import { plainToClass } from 'class-transformer';
import { IsEnum, IsArray, ValidateNested, validateSync, IsString, IsNumber, IsOptional, IsObject } from 'class-validator';
import { Type } from 'class-transformer';

export enum FoodDataSource {
  USDA = 'USDA',
  CIQUAL = 'CIQUAL',
  CANADA = 'CANADA',
  EUROFIR = 'EUROFIR',
}

export enum ParserType {
  CSV = 'csv',
  JSON = 'json',
  XML = 'xml',
}


export class FileConfig {
  @IsString()
  name: string;

  @IsString()
  path: string;

  @IsNumber()
  @IsOptional()
  order?: number;
}

export class DataSourceConfig {
  @IsEnum(FoodDataSource)
  dataSource: FoodDataSource;

  @IsString()
  sourceVersion: string;

  @IsEnum(ParserType)
  parserType: ParserType;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => FileConfig)
  files: FileConfig[];
}


export class Config {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => DataSourceConfig)
  data_sources: DataSourceConfig[];

  @IsEnum(FoodDataSource)
  use_data_source: FoodDataSource

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
