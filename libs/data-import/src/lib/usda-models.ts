import {
  IsDate,
  IsDecimal,
  IsEnum,
  IsInstance,
  IsNumber,
  IsOptional,
  IsString,
  validateSync
} from 'class-validator';
import { logger } from './logger';
import { Transform, Type } from 'class-transformer';
import Decimal from 'decimal.js';
import 'reflect-metadata';
import { FoodPortions } from './prisma-models/FoodPortions';

/**
 * Represents the multiplication factors to be used when calculating energy from macronutrients for a specific food.
 */
export class FoodCalorieConversionFactorModel {
  /** ID of the related row in the nutrient_conversion_factor table */
  @IsNumber()
  @Type(() => Number)
  private food_nutrient_conversion_factor_id: number;

  /** The multiplication factor for protein */
  @IsInstance(Decimal)
  @Transform(({ value }) => new Decimal(value))
  private protein_value: Decimal;

  /** The multiplication factor for fat */
  @IsInstance(Decimal)
  @Transform(({ value }) => new Decimal(value))
  private fat_value: Decimal;

  /** The multiplication factor for carbohydrates */
  @IsInstance(Decimal)
  @Transform(({ value }) => new Decimal(value))
  private carbohydrate_value: Decimal;

  validate() {
    const errors = validateSync(this);

    if (errors.length) {
      errors.forEach((error) =>
        logger.error({ error, message: `[FoodCalorieConversionFactorModel] Validation Error` })
      );

      throw new Error('Not able to initialize model');
    }
  }

  key() {
    return this.food_nutrient_conversion_factor_id;
  }
}

/**
 * Represents the multiplication factors to be used when calculating energy from macronutrients for a specific food.
 */
export class FoodNutrientConversionFactor {
  /** ID of the related row in the nutrient_conversion_factor table */
  @IsNumber()
  @Type(() => Number)
  id: number;

  @IsNumber()
  @Type(() => Number)
  fdc_id: number;

  validate() {
    const errors = validateSync(this);

    if (errors.length) {
      errors.forEach((error) =>
        logger.error({ error, message: `[FoodNutrientConversionFactor] Validation Error` })
      );

      throw new Error('Not able to initialize model');
    }
  }

  key() {
    return this.fdc_id;
  }
}

/**
 * Represents a food category, which groups foods of defined similarity.
 */
export class FoodCategoryModel {
  /** Unique identifier for the food category */
  @IsNumber()
  @Type(() => Number)
  id: number;

  /** Food group code */
  @IsNumber()
  @Type(() => Number)
  code: number;

  /** Description of the food group */
  @IsString()
  description: string;

  validate() {
    const errors = validateSync(this);

    if (errors.length) {
      errors.forEach((error) =>
        logger.error({ error, message: `[FoodCategoryModel] Validation Error` })
      );

      throw new Error('Not able to initialize model');
    }
  }

  key() {
    return this.id;
  }
}

/**
 * Represents units for measuring quantities of foods.
 */
export class MeasureUnitModel {
  /** Unique identifier for the measure unit */
  @IsNumber()
  @Type(() => Number)
  id: number;

  /** Name of the unit */
  @IsString()
  name: string;

  validate() {
    const errors = validateSync(this);

    if (errors.length) {
      errors.forEach((error) =>
        logger.error({ error, message: `[MeasureUnitModel] Validation Error` })
      );

      throw new Error('Not able to initialize model');
    }
  }

  key() {
    return this.id;
  }
}

/**
 * Represents a nutrient, which is a chemical constituent of a food officially recognized as essential to human health.
 */
export class NutrientModel {
  /** Unique identifier for the nutrient */
  @IsNumber()
  @Type(() => Number)
  id: number;

  /** Name of the nutrient */
  @IsString()
  name: string;

  /** The standard unit of measure for the nutrient (per 100g of food) */
  @IsString()
  unit_name: string;

  /** A unique code identifying a nutrient or food constituent */
  @IsNumber()
  @Type(() => Number)
  nutrient_nbr: number;

  /** Rank of the nutrient */
  @IsOptional()
  @Transform(({ value }) => value ? new Decimal(value) : undefined)
  rank: Decimal;

  validate() {
    const errors = validateSync(this);

    if (errors.length) {
      errors.forEach((error) =>
        logger.error({ error, message: `[NutrientModel] Validation Error` })
      );

      throw new Error('Not able to initialize model');
    }
  }

  key() {
    return this.id;
  }
}

/**
 * Represents different types of food data.
 */
export enum FoodModelDataType {
  market_acquisition = 'market_acquisition',
  sample_food = 'sample_food',
  sub_sample_food = 'sub_sample_food',
  foundation_food = 'foundation_food',
  agricultural_acquisition = 'agricultural_acquisition'
}

/**
 * Represents a food item.
 */
export class FoodModel {
  /** Unique permanent identifier of the food */
  @IsNumber()
  @Type(() => Number)
  fdc_id: number;

  /** Date when the food was published to FoodData Central */
  @IsOptional()
  publication_date: Date;

  /** ID of the food category the food belongs to */
  @IsNumber()
  @Type(() => Number)
  food_category_id: number;

  /** Description of the food */
  @IsString()
  description: string;

  /** Type of food data */
  @IsEnum(FoodModelDataType)
  data_type: FoodModelDataType;


  validate() {
    const errors = validateSync(this);

    if (errors.length) {
      errors.forEach((error) =>
        logger.error({ error, message: `[FoodModel] Validation Error` })
      );

      throw new Error('Not able to initialize model');
    }
  }

  key() {
    return this.fdc_id;
  }
}

/**
 * Represents a generic property of a food.
 */
export class FoodAttributeModel {
  /** Unique identifier for the food attribute */
  @IsNumber()
  @Type(() => Number)
  id: number;

  /** ID of the food this food attribute pertains to */
  @IsNumber()
  @Type(() => Number)
  fdc_id: number;

  /** The order the attribute will be displayed on the released food */
  @IsOptional()
  seq_num?: number;

  /** ID of the type of food attribute to which this value is associated for a specific food */
  @IsOptional()
  food_attribute_type_id?: number;

  /** Name of food attribute */
  @IsString()
  name: string;

  /** The actual value of the attribute */
  @IsString()
  value: string;

  validate() {
    const errors = validateSync(this);

    if (errors.length) {
      errors.forEach((error) =>
        logger.error({ error, message: `[FoodAttributeModel] Validation Error` })
      );

      throw new Error('Not able to initialize model');
    }
  }

  key() {
    return this.fdc_id;
  }
}

/**
 * Represents a nutrient value for a food.
 */
export class FoodNutrientModel {
  /** Unique identifier for the food nutrient */
  @IsNumber()
  @Type(() => Number)
  id: number;

  /** ID of the food this food nutrient pertains to */
  @IsNumber()
  @Type(() => Number)
  fdc_id: number;

  /** ID of the nutrient to which the food nutrient pertains */
  @IsNumber()
  @Type(() => Number)
  nutrient_id: number;

  /** Amount of the nutrient per 100g of food. Specified in unit defined in the nutrient table. */
  @IsOptional()
  @Transform(({ value }) => value ? new Decimal(value) : undefined)
  amount?: Decimal;

  /** Number of observations on which the value is based */
  @IsNumber()
  @Type(() => Number)
  data_points: number;

  /** ID of the food nutrient derivation technique used to derive the value */
  @IsNumber()
  @Type(() => Number)
  derivation_id: number;

  /** The minimum amount */
  @IsOptional()
  min?: Decimal;

  /** The maximum amount */
  @IsOptional()
  max?: Decimal;

  /** The median amount */
  @IsOptional()
  median?: Decimal;

  /** Limit of quantitation */
  @IsOptional()
  loq?: Decimal;

  validate() {
    const errors = validateSync(this);

    if (errors.length) {
      errors.forEach((error) =>
        logger.error({ error, message: `[FoodNutrientModel] Validation Error` })
      );

      throw new Error('Not able to initialize model');
    }
  }

  key() {
    return this.fdc_id;
  }
}

/**
 * Represents a discrete amount of food.
 */
export class FoodPortionModel {
  /** Unique identifier for the food portion */
  @IsNumber()
  @Type(() => Number)
  id: number;

  /** ID of the food this food portion pertains to */
  @IsNumber()
  @Type(() => Number)
  fdc_id: number;

  /** The order the measure will be displayed on the released food */
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  seq_num?: number;

  /** The number of measure units that comprise the measure */
  @IsDecimal()
  amount: Decimal;

  /** The unit used for the measure */
  @IsNumber()
  @Type(() => Number)
  measure_unit_id: number;

  /** Comments that provide more specificity on the measure */
  @IsOptional()
  @IsString()
  portion_description?: string;

  /** Qualifier of the measure (e.g. related to food shape or form) */
  @IsOptional()
  @IsString()
  modifier?: string;

  /** The weight of the measure in grams */
  @IsOptional()
  @Type(() => Number)
  gram_weight?: number;

  /** The number of observations on which the measure is based */
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  data_points?: number;

  /** Comments on any unusual aspects of the measure */
  @IsOptional()
  @IsString()
  footnote?: string;

  /** Minimum purchase year of all acquisitions used to derive the measure value */
  @IsDate()
  @IsOptional()
  @Transform(({ value }) => value ? new Date(value) : undefined)
  min_year_acquired?: Date;

  validate() {
    const errors = validateSync(this);

    if (errors.length) {
      errors.forEach((error) =>
        logger.error({ error, message: `[FoodPortionModel] Validation Error` })
      );

      throw new Error('Not able to initialize model');
    }
  }

  key() {
    return this.fdc_id;
  }
}

/**
 * Represents a food obtained for chemical analysis.
 */
export class MarketAcquisitionModel {
  /** ID of the food in the food table */
  @IsNumber()
  @Type(() => Number)
  fdc_id: number;

  /** UPC code for the food. Only applicable for retail products. */
  @IsString()
  @IsOptional()
  upc_code?: string;

  validate() {
    const errors = validateSync(this);

    if (errors.length) {
      errors.forEach((error) =>
        logger.error({ error, message: `[MarketAcquisitionModel] Validation Error` })
      );

      throw new Error('Not able to initialize model');
    }
  }

  key() {
    return this.fdc_id;
  }
}

export type NormalizedUSDAModels = FoodCalorieConversionFactorModel
  | FoodNutrientConversionFactor
  | FoodCategoryModel
  | MeasureUnitModel
  | NutrientModel

export type GroupedUSDAModels = | FoodModel
  | FoodAttributeModel
  | FoodNutrientModel
  | FoodPortionModel
  | MarketAcquisitionModel;

export type PossibleUSDAModels =
  NormalizedUSDAModels | GroupedUSDAModels


export class MainUSDAModel {
  fdc_ids: number[];
  name: string;
  conversionFactors: { nutrients: FoodNutrientConversionFactor, calories: FoodCalorieConversionFactorModel }[] = [];
  foodCategories: FoodCategoryModel[] = [];
  foodAttributes: FoodAttributeModel[] = [];
  foodNutrients: { foodNutrient: FoodNutrientModel, nutrient: NutrientModel }[] = [];
  foodPortions: { portion: FoodPortionModel, measure: MeasureUnitModel }[] = [];
  upcCodes: string[] = [];
}
