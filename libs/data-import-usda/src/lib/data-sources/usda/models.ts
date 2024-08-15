import { IsString, IsNumber, IsOptional, IsArray, ValidateNested, IsBoolean } from 'class-validator';
import { Type } from 'class-transformer';
import {
  AbridgedFoodItem,
  AbridgedFoodNutrient,
  BrandedFoodItem,
  BrandedFoodItemLabelNutrients,
  BrandedFoodItemLabelNutrientsCalcium,
  BrandedFoodItemLabelNutrientsCalories,
  BrandedFoodItemLabelNutrientsCarbohydrates,
  BrandedFoodItemLabelNutrientsFat,
  BrandedFoodItemLabelNutrientsFiber,
  BrandedFoodItemLabelNutrientsIron,
  BrandedFoodItemLabelNutrientsPotassium,
  BrandedFoodItemLabelNutrientsProtein,
  BrandedFoodItemLabelNutrientsSaturatedFat,
  BrandedFoodItemLabelNutrientsSugars,
  BrandedFoodItemLabelNutrientsTransFat,
  FoodAttribute,
  FoodAttributeFoodAttributeType,
  FoodCategory,
  FoodComponent,
  FoodNutrient,
  FoodNutrientDerivation,
  FoodNutrientSource,
  FoodPortion,
  FoodUpdateLog,
  FoundationFoodItem,
  InputFoodFoundation,
  InputFoodSurvey,
  MeasureUnit, Nutrient, NutrientAcquisitionDetails, NutrientAnalysisDetails, NutrientConversionFactors,
  RetentionFactor,
  SampleFoodItem, SearchResultFood,
  SRLegacyFoodItem, SurveyFoodItem, WweiaFoodCategory
} from './interfaces';

export class AbridgedFoodItemModel implements AbridgedFoodItem {
  @IsString()
  dataType: string;

  @IsString()
  description: string;

  @IsNumber()
  fdcId: number;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AbridgedFoodNutrientModel)
  foodNutrients?: AbridgedFoodNutrientModel[];

  @IsOptional()
  @IsString()
  publicationDate?: string;

  @IsOptional()
  @IsString()
  brandOwner?: string;

  @IsOptional()
  @IsString()
  gtinUpc?: string;

  @IsOptional()
  @IsNumber()
  ndbNumber?: number;

  @IsOptional()
  @IsString()
  foodCode?: string;
}

export class AbridgedFoodNutrientModel implements AbridgedFoodNutrient {
  @IsOptional()
  @IsNumber()
  number?: number;

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsNumber()
  amount?: number;

  @IsOptional()
  @IsString()
  unitName?: string;

  @IsOptional()
  @IsString()
  derivationCode?: string;

  @IsOptional()
  @IsString()
  derivationDescription?: string;
}


export class BrandedFoodItemLabelNutrientsCalciumModel implements BrandedFoodItemLabelNutrientsCalcium {
  @IsOptional()
  @IsNumber()
  value?: number;
}

export class BrandedFoodItemLabelNutrientsCaloriesModel implements BrandedFoodItemLabelNutrientsCalories {
  @IsOptional()
  @IsNumber()
  value?: number;
}

export class BrandedFoodItemLabelNutrientsCarbohydratesModel implements BrandedFoodItemLabelNutrientsCarbohydrates {
  @IsOptional()
  @IsNumber()
  value?: number;
}

export class BrandedFoodItemLabelNutrientsFatModel implements BrandedFoodItemLabelNutrientsFat {
  @IsOptional()
  @IsNumber()
  value?: number;
}

export class BrandedFoodItemLabelNutrientsFiberModel implements BrandedFoodItemLabelNutrientsFiber {
  @IsOptional()
  @IsNumber()
  value?: number;
}

export class BrandedFoodItemLabelNutrientsIronModel implements BrandedFoodItemLabelNutrientsIron {
  @IsOptional()
  @IsNumber()
  value?: number;
}

export class BrandedFoodItemLabelNutrientsPotassiumModel implements BrandedFoodItemLabelNutrientsPotassium {
  @IsOptional()
  @IsNumber()
  value?: number;
}

export class BrandedFoodItemLabelNutrientsProteinModel implements BrandedFoodItemLabelNutrientsProtein {
  @IsOptional()
  @IsNumber()
  value?: number;
}

export class BrandedFoodItemLabelNutrientsSaturatedFatModel implements BrandedFoodItemLabelNutrientsSaturatedFat {
  @IsOptional()
  @IsNumber()
  value?: number;
}

export class BrandedFoodItemLabelNutrientsSugarsModel implements BrandedFoodItemLabelNutrientsSugars {
  @IsOptional()
  @IsNumber()
  value?: number;
}

export class BrandedFoodItemLabelNutrientsTransFatModel implements BrandedFoodItemLabelNutrientsTransFat {
  @IsOptional()
  @IsNumber()
  value?: number;
}

export class BrandedFoodItemLabelNutrientsModel implements BrandedFoodItemLabelNutrients {
  @IsOptional()
  @ValidateNested()
  @Type(() => BrandedFoodItemLabelNutrientsFatModel)
  fat?: BrandedFoodItemLabelNutrientsFatModel;

  @IsOptional()
  @ValidateNested()
  @Type(() => BrandedFoodItemLabelNutrientsSaturatedFatModel)
  saturatedFat?: BrandedFoodItemLabelNutrientsSaturatedFatModel;

  @IsOptional()
  @ValidateNested()
  @Type(() => BrandedFoodItemLabelNutrientsTransFatModel)
  transFat?: BrandedFoodItemLabelNutrientsTransFatModel;

  @IsOptional()
  @ValidateNested()
  @Type(() => BrandedFoodItemLabelNutrientsTransFatModel)
  cholesterol?: BrandedFoodItemLabelNutrientsTransFatModel;

  @IsOptional()
  @ValidateNested()
  @Type(() => BrandedFoodItemLabelNutrientsTransFatModel)
  sodium?: BrandedFoodItemLabelNutrientsTransFatModel;

  @IsOptional()
  @ValidateNested()
  @Type(() => BrandedFoodItemLabelNutrientsCarbohydratesModel)
  carbohydrates?: BrandedFoodItemLabelNutrientsCarbohydratesModel;

  @IsOptional()
  @ValidateNested()
  @Type(() => BrandedFoodItemLabelNutrientsFiberModel)
  fiber?: BrandedFoodItemLabelNutrientsFiberModel;

  @IsOptional()
  @ValidateNested()
  @Type(() => BrandedFoodItemLabelNutrientsSugarsModel)
  sugars?: BrandedFoodItemLabelNutrientsSugarsModel;

  @IsOptional()
  @ValidateNested()
  @Type(() => BrandedFoodItemLabelNutrientsSugarsModel)
  addedSugar?: BrandedFoodItemLabelNutrientsSugarsModel;

  @IsOptional()
  @ValidateNested()
  @Type(() => BrandedFoodItemLabelNutrientsProteinModel)
  protein?: BrandedFoodItemLabelNutrientsProteinModel;

  @IsOptional()
  @ValidateNested()
  @Type(() => BrandedFoodItemLabelNutrientsCalciumModel)
  calcium?: BrandedFoodItemLabelNutrientsCalciumModel;

  @IsOptional()
  @ValidateNested()
  @Type(() => BrandedFoodItemLabelNutrientsIronModel)
  iron?: BrandedFoodItemLabelNutrientsIronModel;

  @IsOptional()
  @ValidateNested()
  @Type(() => BrandedFoodItemLabelNutrientsPotassiumModel)
  potassium?: BrandedFoodItemLabelNutrientsPotassiumModel;

  @IsOptional()
  @ValidateNested()
  @Type(() => BrandedFoodItemLabelNutrientsCaloriesModel)
  calories?: BrandedFoodItemLabelNutrientsCaloriesModel;
}

export class BrandedFoodItemModel implements BrandedFoodItem {
  @IsNumber()
  fdcId: number;

  @IsOptional()
  @IsString()
  availableDate?: string;

  @IsOptional()
  @IsString()
  brandOwner?: string;

  @IsOptional()
  @IsString()
  dataSource?: string;

  @IsString()
  dataType: string;

  @IsString()
  description: string;

  @IsOptional()
  @IsString()
  foodClass?: string;

  @IsOptional()
  @IsString()
  gtinUpc?: string;

  @IsOptional()
  @IsString()
  householdServingFullText?: string;

  @IsOptional()
  @IsString()
  ingredients?: string;

  @IsOptional()
  @IsString()
  modifiedDate?: string;

  @IsOptional()
  @IsString()
  publicationDate?: string;

  @IsOptional()
  @IsNumber()
  servingSize?: number;

  @IsOptional()
  @IsString()
  servingSizeUnit?: string;

  @IsOptional()
  @IsString()
  preparationStateCode?: string;

  @IsOptional()
  @IsString()
  brandedFoodCategory?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  tradeChannel?: string[];

  @IsOptional()
  @IsNumber()
  gpcClassCode?: number;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => FoodNutrientModel)
  foodNutrients?: FoodNutrientModel[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => FoodUpdateLogModel)
  foodUpdateLog?: FoodUpdateLogModel[];

  @IsOptional()
  @ValidateNested()
  @Type(() => BrandedFoodItemLabelNutrientsModel)
  labelNutrients?: BrandedFoodItemLabelNutrientsModel;
}


export class FoodAttributeFoodAttributeTypeModel implements FoodAttributeFoodAttributeType {
  @IsOptional()
  @IsNumber()
  id?: number;

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  description?: string;
}

export class FoodAttributeModel implements FoodAttribute {
  @IsOptional()
  @IsNumber()
  id?: number;

  @IsOptional()
  @IsNumber()
  sequenceNumber?: number;

  @IsOptional()
  @IsString()
  value?: string;

  @IsOptional()
  foodAttributeType?: FoodAttributeFoodAttributeTypeModel;
}

export class FoodCategoryModel implements FoodCategory {
  @IsOptional()
  @IsNumber()
  id?: number;

  @IsOptional()
  @IsString()
  code?: string;

  @IsOptional()
  @IsString()
  description?: string;
}

export class FoodComponentModel implements FoodComponent {
  @IsOptional()
  @IsNumber()
  id?: number;

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsNumber()
  dataPoints?: number;

  @IsOptional()
  @IsNumber()
  gramWeight?: number;

  @IsOptional()
  @IsBoolean()
  isRefuse?: boolean;

  @IsOptional()
  @IsNumber()
  minYearAcquired?: number;

  @IsOptional()
  @IsNumber()
  percentWeight?: number;
}

export class NutrientModel implements Nutrient {
  @IsOptional()
  @IsNumber()
  id?: number;

  @IsOptional()
  @IsString()
  number?: string;

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsNumber()
  rank?: number;

  @IsOptional()
  @IsString()
  unitName?: string;
}

export class FoodNutrientSourceModel implements FoodNutrientSource {
  @IsOptional()
  @IsNumber()
  id?: number;

  @IsOptional()
  @IsString()
  code?: string;

  @IsOptional()
  @IsString()
  description?: string;
}

export class FoodNutrientDerivationModel implements FoodNutrientDerivation {
  @IsOptional()
  @IsNumber()
  id?: number;

  @IsOptional()
  @IsString()
  code?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => FoodNutrientSourceModel)
  foodNutrientSource?: FoodNutrientSourceModel;
}

export class NutrientAcquisitionDetailsModel implements NutrientAcquisitionDetails {
  @IsOptional()
  @IsNumber()
  sampleUnitId?: number;

  @IsOptional()
  @IsString()
  purchaseDate?: string;

  @IsOptional()
  @IsString()
  storeCity?: string;

  @IsOptional()
  @IsString()
  storeState?: string;
}

export class NutrientAnalysisDetailsModel implements NutrientAnalysisDetails {
  @IsOptional()
  @IsNumber()
  subSampleId?: number;

  @IsOptional()
  @IsNumber()
  amount?: number;

  @IsOptional()
  @IsNumber()
  nutrientId?: number;

  @IsOptional()
  @IsString()
  labMethodDescription?: string;

  @IsOptional()
  @IsString()
  labMethodOriginalDescription?: string;

  @IsOptional()
  @IsString()
  labMethodLink?: string;

  @IsOptional()
  @IsString()
  labMethodTechnique?: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => NutrientAcquisitionDetailsModel)
  nutrientAcquisitionDetails?: NutrientAcquisitionDetailsModel[];
}

export class FoodNutrientModel implements FoodNutrient {
  @IsNumber()
  id: number;

  @IsOptional()
  @IsNumber()
  amount?: number;

  @IsOptional()
  @IsNumber()
  dataPoints?: number;

  @IsOptional()
  @IsNumber()
  min?: number;

  @IsOptional()
  @IsNumber()
  max?: number;

  @IsOptional()
  @IsNumber()
  median?: number;

  @IsOptional()
  @IsString()
  type?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => NutrientModel)
  nutrient?: NutrientModel;

  @IsOptional()
  @ValidateNested()
  @Type(() => FoodNutrientDerivationModel)
  foodNutrientDerivation?: FoodNutrientDerivationModel;

  @IsOptional()
  @ValidateNested()
  @Type(() => NutrientAnalysisDetailsModel)
  nutrientAnalysisDetails?: NutrientAnalysisDetailsModel;
}

export class MeasureUnitModel implements MeasureUnit {
  @IsOptional()
  @IsNumber()
  id?: number;

  @IsOptional()
  @IsString()
  abbreviation?: string;

  @IsOptional()
  @IsString()
  name?: string;
}

export class FoodPortionModel implements FoodPortion {
  @IsOptional()
  @IsNumber()
  id?: number;

  @IsOptional()
  @IsNumber()
  amount?: number;

  @IsOptional()
  @IsNumber()
  dataPoints?: number;

  @IsOptional()
  @IsNumber()
  gramWeight?: number;

  @IsOptional()
  @IsNumber()
  minYearAcquired?: number;

  @IsOptional()
  @IsString()
  modifier?: string;

  @IsOptional()
  @IsString()
  portionDescription?: string;

  @IsOptional()
  @IsNumber()
  sequenceNumber?: number;

  @IsOptional()
  @ValidateNested()
  @Type(() => MeasureUnitModel)
  measureUnit?: MeasureUnitModel;
}

export class FoodUpdateLogModel implements FoodUpdateLog {
  @IsOptional()
  @IsNumber()
  fdcId?: number;

  @IsOptional()
  @IsString()
  availableDate?: string;

  @IsOptional()
  @IsString()
  brandOwner?: string;

  @IsOptional()
  @IsString()
  dataSource?: string;

  @IsOptional()
  @IsString()
  dataType?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  foodClass?: string;

  @IsOptional()
  @IsString()
  gtinUpc?: string;

  @IsOptional()
  @IsString()
  householdServingFullText?: string;

  @IsOptional()
  @IsString()
  ingredients?: string;

  @IsOptional()
  @IsString()
  modifiedDate?: string;

  @IsOptional()
  @IsString()
  publicationDate?: string;

  @IsOptional()
  @IsNumber()
  servingSize?: number;

  @IsOptional()
  @IsString()
  servingSizeUnit?: string;

  @IsOptional()
  @IsString()
  brandedFoodCategory?: string;

  @IsOptional()
  @IsString()
  changes?: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => FoodAttributeModel)
  foodAttributes?: FoodAttributeModel[];
}

export class FoundationFoodItemModel implements FoundationFoodItem {
  @IsNumber()
  fdcId: number;

  @IsString()
  dataType: string;

  @IsString()
  description: string;

  @IsOptional()
  @IsString()
  foodClass?: string;

  @IsOptional()
  @IsString()
  footNote?: string;

  @IsOptional()
  @IsBoolean()
  isHistoricalReference?: boolean;

  @IsOptional()
  @IsNumber()
  ndbNumber?: number;

  @IsOptional()
  @IsString()
  publicationDate?: string;

  @IsOptional()
  @IsString()
  scientificName?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => FoodCategoryModel)
  foodCategory?: FoodCategoryModel;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => FoodComponentModel)
  foodComponents?: FoodComponentModel[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => FoodNutrientModel)
  foodNutrients?: FoodNutrientModel[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => FoodPortionModel)
  foodPortions?: FoodPortionModel[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => InputFoodFoundationModel)
  inputFoods?: InputFoodFoundationModel[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => NutrientConversionFactorsModel)
  nutrientConversionFactors?: NutrientConversionFactorsModel[];
}

export class SampleFoodItemModel implements SampleFoodItem {
  @IsNumber()
  fdcId: number;

  @IsOptional()
  @IsString()
  datatype?: string;

  @IsString()
  description: string;

  @IsOptional()
  @IsString()
  foodClass?: string;

  @IsOptional()
  @IsString()
  publicationDate?: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => FoodCategoryModel)
  foodAttributes?: FoodCategoryModel[];
}
export class InputFoodFoundationModel implements InputFoodFoundation {
  @IsOptional()
  @IsNumber()
  id?: number;

  @IsOptional()
  @IsString()
  foodDescription?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => SampleFoodItemModel)
  inputFood?: SampleFoodItemModel;
}

export class WweiaFoodCategoryModel implements WweiaFoodCategory {
  @IsOptional()
  @IsNumber()
  wweiaFoodCategoryCode?: number;

  @IsOptional()
  @IsString()
  wweiaFoodCategoryDescription?: string;
}

export class SurveyFoodItemModel implements SurveyFoodItem {
  @IsNumber()
  fdcId: number;

  @IsOptional()
  @IsString()
  datatype?: string;

  @IsString()
  description: string;

  @IsOptional()
  @IsString()
  endDate?: string;

  @IsOptional()
  @IsString()
  foodClass?: string;

  @IsOptional()
  @IsString()
  foodCode?: string;

  @IsOptional()
  @IsString()
  publicationDate?: string;

  @IsOptional()
  @IsString()
  startDate?: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => FoodAttributeModel)
  foodAttributes?: FoodAttributeModel[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => FoodPortionModel)
  foodPortions?: FoodPortionModel[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => InputFoodSurveyModel)
  inputFoods?: InputFoodSurveyModel[];

  @IsOptional()
  @ValidateNested()
  @Type(() => WweiaFoodCategoryModel)
  wweiaFoodCategory?: WweiaFoodCategoryModel;
}
export class RetentionFactorModel implements RetentionFactor {
  @IsOptional()
  @IsNumber()
  id?: number;

  @IsOptional()
  @IsNumber()
  code?: number;

  @IsOptional()
  @IsString()
  description?: string;
}


export class InputFoodSurveyModel implements InputFoodSurvey {
  @IsOptional()
  @IsNumber()
  id?: number;

  @IsOptional()
  @IsNumber()
  amount?: number;

  @IsOptional()
  @IsString()
  foodDescription?: string;

  @IsOptional()
  @IsNumber()
  ingredientCode?: number;

  @IsOptional()
  @IsString()
  ingredientDescription?: string;

  @IsOptional()
  @IsNumber()
  ingredientWeight?: number;

  @IsOptional()
  @IsString()
  portionCode?: string;

  @IsOptional()
  @IsString()
  portionDescription?: string;

  @IsOptional()
  @IsNumber()
  sequenceNumber?: number;

  @IsOptional()
  @IsNumber()
  surveyFlag?: number;

  @IsOptional()
  @IsString()
  unit?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => SurveyFoodItemModel)
  inputFood?: SurveyFoodItemModel;

  @IsOptional()
  @ValidateNested()
  @Type(() => RetentionFactorModel)
  retentionFactor?: RetentionFactorModel;
}


export class NutrientConversionFactorsModel implements NutrientConversionFactors {
  @IsOptional()
  @IsString()
  type?: string;

  @IsOptional()
  @IsNumber()
  value?: number;
}

export class SRLegacyFoodItemModel implements SRLegacyFoodItem {
  @IsNumber()
  fdcId: number;

  @IsString()
  dataType: string;

  @IsString()
  description: string;

  @IsOptional()
  @IsString()
  foodClass?: string;

  @IsOptional()
  @IsBoolean()
  isHistoricalReference?: boolean;

  @IsOptional()
  @IsNumber()
  ndbNumber?: number;

  @IsOptional()
  @IsString()
  publicationDate?: string;

  @IsOptional()
  @IsString()
  scientificName?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => FoodCategoryModel)
  foodCategory?: FoodCategoryModel;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => FoodNutrientModel)
  foodNutrients?: FoodNutrientModel[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => NutrientConversionFactorsModel)
  nutrientConversionFactors?: NutrientConversionFactorsModel[];
}


export class SearchResultFoodModel implements SearchResultFood {
  @IsNumber()
  fdcId: number;

  @IsOptional()
  @IsString()
  dataType?: string;

  @IsString()
  description: string;

  @IsOptional()
  @IsString()
  foodCode?: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AbridgedFoodNutrientModel)
  foodNutrients?: AbridgedFoodNutrientModel[];

  @IsOptional()
  @IsString()
  publicationDate?: string;

  @IsOptional()
  @IsString()
  scientificName?: string;

  @IsOptional()
  @IsString()
  brandOwner?: string;

  @IsOptional()
  @IsString()
  gtinUpc?: string;

  @IsOptional()
  @IsString()
  ingredients?: string;

  @IsOptional()
  @IsNumber()
  ndbNumber?: number;

  @IsOptional()
  @IsString()
  additionalDescriptions?: string;

  @IsOptional()
  @IsString()
  allHighlightFields?: string;

  @IsOptional()
  @IsNumber()
  score?: number;
}
