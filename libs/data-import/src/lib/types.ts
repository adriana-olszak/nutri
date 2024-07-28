import { FoodDataSource } from '../config';
export enum EntityType {
  Language = 'Language',
  Translation = 'Translation',
  Food = 'Food',
  FoodSearchVector = 'FoodSearchVector',
  FoodCategory = 'FoodCategory',
  BrandedFood = 'BrandedFood',
  Nutrient = 'Nutrient',
  FoodNutrient = 'FoodNutrient',
  FoodPortion = 'FoodPortion',
  InputFood = 'InputFood',
  DataSourceReference = 'DataSourceReference',
}

export type Entity =
  | LanguageEntity
  | TranslationEntity
  | FoodEntity
  | FoodSearchVectorEntity
  | FoodCategoryEntity
  | BrandedFoodEntity
  | NutrientEntity
  | FoodNutrientEntity
  | FoodPortionEntity
  | InputFoodEntity
  | DataSourceReferenceEntity;

interface BaseEntity {
  id: string;
  type: EntityType;
}

export interface LanguageEntity extends BaseEntity {
  type: EntityType.Language;
  code: string;
  name: string;
}

export interface TranslationEntity extends BaseEntity {
  type: EntityType.Translation;
  languageCode: string;
  entityType: string;
  entityId: string;
  field: string;
  value: string;
}

export interface FoodEntity extends BaseEntity {
  type: EntityType.Food;
  scientificName?: string;
  foodCategoryId: string;
  description: string;
  importDate: string;
  dataSource: FoodDataSource;
  sourceVersion: string;
}

export interface FoodSearchVectorEntity extends BaseEntity {
  type: EntityType.FoodSearchVector;
  foodId: string;
  languageCode: string;
}

export interface FoodCategoryEntity extends BaseEntity {
  type: EntityType.FoodCategory;
  code: string;
  parentCategoryId?: string;
}

export interface BrandedFoodEntity extends BaseEntity {
  type: EntityType.BrandedFood;
  foodId: string;
  brandOwner: string;
  gtinUpc?: string;
  ingredients?: string;
  servingSize?: number;
  servingUnit?: string;
}

export interface NutrientEntity extends BaseEntity {
  type: EntityType.Nutrient;
  name: string;
  unit: string;
  nutrientCode: string;
}

export interface FoodNutrientEntity extends BaseEntity {
  type: EntityType.FoodNutrient;
  foodId: string;
  nutrientId: string;
  amount: number;
  dataSourceId?: string;
}

export interface FoodPortionEntity extends BaseEntity {
  type: EntityType.FoodPortion;
  foodId: string;
  amount: number;
  measureUnit: string;
  gramWeight: number;
  portionDescription?: string;
}

export interface InputFoodEntity extends BaseEntity {
  type: EntityType.InputFood;
  foodId: string;
  ingredientFoodId: string;
  amount: number;
  unit?: string;
}

export interface DataSourceReferenceEntity extends BaseEntity {
  type: EntityType.DataSourceReference;
  sourceCode: string;
  citation: string;
}
