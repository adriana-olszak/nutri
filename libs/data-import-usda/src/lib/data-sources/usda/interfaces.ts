/**
 * This file was generated using Swagger Codegen of USDA FoodData Central API.
 */

/**
 *
 * @export
 * @interface AbridgedFoodItem
 */
export interface AbridgedFoodItem {
  /**
   *
   * @type {string}
   * @memberof AbridgedFoodItem
   */
  dataType: string;
  /**
   *
   * @type {string}
   * @memberof AbridgedFoodItem
   */
  description: string;
  /**
   *
   * @type {number}
   * @memberof AbridgedFoodItem
   */
  fdcId: number;
  /**
   *
   * @type {Array<AbridgedFoodNutrient>}
   * @memberof AbridgedFoodItem
   */
  foodNutrients?: Array<AbridgedFoodNutrient>;
  /**
   *
   * @type {string}
   * @memberof AbridgedFoodItem
   */
  publicationDate?: string;
  /**
   * only applies to Branded Foods
   * @type {string}
   * @memberof AbridgedFoodItem
   */
  brandOwner?: string;
  /**
   * only applies to Branded Foods
   * @type {string}
   * @memberof AbridgedFoodItem
   */
  gtinUpc?: string;
  /**
   * only applies to Foundation and SRLegacy Foods
   * @type {number}
   * @memberof AbridgedFoodItem
   */
  ndbNumber?: number;
  /**
   * only applies to Survey Foods
   * @type {string}
   * @memberof AbridgedFoodItem
   */
  foodCode?: string;
}

/**
 *
 * @export
 * @interface AbridgedFoodNutrient
 */
export interface AbridgedFoodNutrient {
  /**
   *
   * @type {number}
   * @memberof AbridgedFoodNutrient
   */
  number?: number;
  /**
   *
   * @type {string}
   * @memberof AbridgedFoodNutrient
   */
  name?: string;
  /**
   *
   * @type {number}
   * @memberof AbridgedFoodNutrient
   */
  amount?: number;
  /**
   *
   * @type {string}
   * @memberof AbridgedFoodNutrient
   */
  unitName?: string;
  /**
   *
   * @type {string}
   * @memberof AbridgedFoodNutrient
   */
  derivationCode?: string;
  /**
   *
   * @type {string}
   * @memberof AbridgedFoodNutrient
   */
  derivationDescription?: string;
}

/**
 *
 * @export
 * @interface BrandedFoodItem
 */
export interface BrandedFoodItem {
  /**
   *
   * @type {number}
   * @memberof BrandedFoodItem
   */
  fdcId: number;
  /**
   *
   * @type {string}
   * @memberof BrandedFoodItem
   */
  availableDate?: string;
  /**
   *
   * @type {string}
   * @memberof BrandedFoodItem
   */
  brandOwner?: string;
  /**
   *
   * @type {string}
   * @memberof BrandedFoodItem
   */
  dataSource?: string;
  /**
   *
   * @type {string}
   * @memberof BrandedFoodItem
   */
  dataType: string;
  /**
   *
   * @type {string}
   * @memberof BrandedFoodItem
   */
  description: string;
  /**
   *
   * @type {string}
   * @memberof BrandedFoodItem
   */
  foodClass?: string;
  /**
   *
   * @type {string}
   * @memberof BrandedFoodItem
   */
  gtinUpc?: string;
  /**
   *
   * @type {string}
   * @memberof BrandedFoodItem
   */
  householdServingFullText?: string;
  /**
   *
   * @type {string}
   * @memberof BrandedFoodItem
   */
  ingredients?: string;
  /**
   *
   * @type {string}
   * @memberof BrandedFoodItem
   */
  modifiedDate?: string;
  /**
   *
   * @type {string}
   * @memberof BrandedFoodItem
   */
  publicationDate?: string;
  /**
   *
   * @type {number}
   * @memberof BrandedFoodItem
   */
  servingSize?: number;
  /**
   *
   * @type {string}
   * @memberof BrandedFoodItem
   */
  servingSizeUnit?: string;
  /**
   *
   * @type {string}
   * @memberof BrandedFoodItem
   */
  preparationStateCode?: string;
  /**
   *
   * @type {string}
   * @memberof BrandedFoodItem
   */
  brandedFoodCategory?: string;
  /**
   *
   * @type {Array<string>}
   * @memberof BrandedFoodItem
   */
  tradeChannel?: Array<string>;
  /**
   *
   * @type {number}
   * @memberof BrandedFoodItem
   */
  gpcClassCode?: number;
  /**
   *
   * @type {Array<FoodNutrient>}
   * @memberof BrandedFoodItem
   */
  foodNutrients?: Array<FoodNutrient>;
  /**
   *
   * @type {Array<FoodUpdateLog>}
   * @memberof BrandedFoodItem
   */
  foodUpdateLog?: Array<FoodUpdateLog>;
  /**
   *
   * @type {BrandedFoodItemLabelNutrients}
   * @memberof BrandedFoodItem
   */
  labelNutrients?: BrandedFoodItemLabelNutrients;
}

/**
 *
 * @export
 * @interface BrandedFoodItemLabelNutrients
 */
export interface BrandedFoodItemLabelNutrients {
  /**
   *
   * @type {BrandedFoodItemLabelNutrientsFat}
   * @memberof BrandedFoodItemLabelNutrients
   */
  fat?: BrandedFoodItemLabelNutrientsFat;
  /**
   *
   * @type {BrandedFoodItemLabelNutrientsSaturatedFat}
   * @memberof BrandedFoodItemLabelNutrients
   */
  saturatedFat?: BrandedFoodItemLabelNutrientsSaturatedFat;
  /**
   *
   * @type {BrandedFoodItemLabelNutrientsTransFat}
   * @memberof BrandedFoodItemLabelNutrients
   */
  transFat?: BrandedFoodItemLabelNutrientsTransFat;
  /**
   *
   * @type {BrandedFoodItemLabelNutrientsTransFat}
   * @memberof BrandedFoodItemLabelNutrients
   */
  cholesterol?: BrandedFoodItemLabelNutrientsTransFat;
  /**
   *
   * @type {BrandedFoodItemLabelNutrientsTransFat}
   * @memberof BrandedFoodItemLabelNutrients
   */
  sodium?: BrandedFoodItemLabelNutrientsTransFat;
  /**
   *
   * @type {BrandedFoodItemLabelNutrientsCarbohydrates}
   * @memberof BrandedFoodItemLabelNutrients
   */
  carbohydrates?: BrandedFoodItemLabelNutrientsCarbohydrates;
  /**
   *
   * @type {BrandedFoodItemLabelNutrientsFiber}
   * @memberof BrandedFoodItemLabelNutrients
   */
  fiber?: BrandedFoodItemLabelNutrientsFiber;
  /**
   *
   * @type {BrandedFoodItemLabelNutrientsSugars}
   * @memberof BrandedFoodItemLabelNutrients
   */
  sugars?: BrandedFoodItemLabelNutrientsSugars;
  /**
   *
   * @type {BrandedFoodItemLabelNutrientsProtein}
   * @memberof BrandedFoodItemLabelNutrients
   */
  protein?: BrandedFoodItemLabelNutrientsProtein;
  /**
   *
   * @type {BrandedFoodItemLabelNutrientsCalcium}
   * @memberof BrandedFoodItemLabelNutrients
   */
  calcium?: BrandedFoodItemLabelNutrientsCalcium;
  /**
   *
   * @type {BrandedFoodItemLabelNutrientsIron}
   * @memberof BrandedFoodItemLabelNutrients
   */
  iron?: BrandedFoodItemLabelNutrientsIron;
  /**
   *
   * @type {BrandedFoodItemLabelNutrientsPotassium}
   * @memberof BrandedFoodItemLabelNutrients
   */
  potassium?: BrandedFoodItemLabelNutrientsPotassium;
  /**
   *
   * @type {BrandedFoodItemLabelNutrientsCalories}
   * @memberof BrandedFoodItemLabelNutrients
   */
  calories?: BrandedFoodItemLabelNutrientsCalories;
}

/**
 *
 * @export
 * @interface BrandedFoodItemLabelNutrientsCalcium
 */
export interface BrandedFoodItemLabelNutrientsCalcium {
  /**
   *
   * @type {number}
   * @memberof BrandedFoodItemLabelNutrientsCalcium
   */
  value?: number;
}

/**
 *
 * @export
 * @interface BrandedFoodItemLabelNutrientsCalories
 */
export interface BrandedFoodItemLabelNutrientsCalories {
  /**
   *
   * @type {number}
   * @memberof BrandedFoodItemLabelNutrientsCalories
   */
  value?: number;
}

/**
 *
 * @export
 * @interface BrandedFoodItemLabelNutrientsCarbohydrates
 */
export interface BrandedFoodItemLabelNutrientsCarbohydrates {
  /**
   *
   * @type {number}
   * @memberof BrandedFoodItemLabelNutrientsCarbohydrates
   */
  value?: number;
}

/**
 *
 * @export
 * @interface BrandedFoodItemLabelNutrientsFat
 */
export interface BrandedFoodItemLabelNutrientsFat {
  /**
   *
   * @type {number}
   * @memberof BrandedFoodItemLabelNutrientsFat
   */
  value?: number;
}

/**
 *
 * @export
 * @interface BrandedFoodItemLabelNutrientsFiber
 */
export interface BrandedFoodItemLabelNutrientsFiber {
  /**
   *
   * @type {number}
   * @memberof BrandedFoodItemLabelNutrientsFiber
   */
  value?: number;
}

/**
 *
 * @export
 * @interface BrandedFoodItemLabelNutrientsIron
 */
export interface BrandedFoodItemLabelNutrientsIron {
  /**
   *
   * @type {number}
   * @memberof BrandedFoodItemLabelNutrientsIron
   */
  value?: number;
}

/**
 *
 * @export
 * @interface BrandedFoodItemLabelNutrientsPotassium
 */
export interface BrandedFoodItemLabelNutrientsPotassium {
  /**
   *
   * @type {number}
   * @memberof BrandedFoodItemLabelNutrientsPotassium
   */
  value?: number;
}

/**
 *
 * @export
 * @interface BrandedFoodItemLabelNutrientsProtein
 */
export interface BrandedFoodItemLabelNutrientsProtein {
  /**
   *
   * @type {number}
   * @memberof BrandedFoodItemLabelNutrientsProtein
   */
  value?: number;
}

/**
 *
 * @export
 * @interface BrandedFoodItemLabelNutrientsSaturatedFat
 */
export interface BrandedFoodItemLabelNutrientsSaturatedFat {
  /**
   *
   * @type {number}
   * @memberof BrandedFoodItemLabelNutrientsSaturatedFat
   */
  value?: number;
}

/**
 *
 * @export
 * @interface BrandedFoodItemLabelNutrientsSugars
 */
export interface BrandedFoodItemLabelNutrientsSugars {
  /**
   *
   * @type {number}
   * @memberof BrandedFoodItemLabelNutrientsSugars
   */
  value?: number;
}

/**
 *
 * @export
 * @interface BrandedFoodItemLabelNutrientsTransFat
 */
export interface BrandedFoodItemLabelNutrientsTransFat {
  /**
   *
   * @type {number}
   * @memberof BrandedFoodItemLabelNutrientsTransFat
   */
  value?: number;
}

/**
 *
 * @export
 * @interface FoodAttribute
 */
export interface FoodAttribute {
  /**
   *
   * @type {number}
   * @memberof FoodAttribute
   */
  id?: number;
  /**
   *
   * @type {number}
   * @memberof FoodAttribute
   */
  sequenceNumber?: number;
  /**
   *
   * @type {string}
   * @memberof FoodAttribute
   */
  value?: string;
  /**
   *
   * @type {FoodAttributeFoodAttributeType}
   * @memberof FoodAttribute
   */
  foodAttributeType?: FoodAttributeFoodAttributeType;
}

/**
 *
 * @export
 * @interface FoodAttributeFoodAttributeType
 */
export interface FoodAttributeFoodAttributeType {
  /**
   *
   * @type {number}
   * @memberof FoodAttributeFoodAttributeType
   */
  id?: number;
  /**
   *
   * @type {string}
   * @memberof FoodAttributeFoodAttributeType
   */
  name?: string;
  /**
   *
   * @type {string}
   * @memberof FoodAttributeFoodAttributeType
   */
  description?: string;
}

/**
 *
 * @export
 * @interface FoodCategory
 */
export interface FoodCategory {
  /**
   *
   * @type {number}
   * @memberof FoodCategory
   */
  id?: number;
  /**
   *
   * @type {string}
   * @memberof FoodCategory
   */
  code?: string;
  /**
   *
   * @type {string}
   * @memberof FoodCategory
   */
  description?: string;
}

/**
 *
 * @export
 * @interface FoodComponent
 */
export interface FoodComponent {
  /**
   *
   * @type {number}
   * @memberof FoodComponent
   */
  id?: number;
  /**
   *
   * @type {string}
   * @memberof FoodComponent
   */
  name?: string;
  /**
   *
   * @type {number}
   * @memberof FoodComponent
   */
  dataPoints?: number;
  /**
   *
   * @type {number}
   * @memberof FoodComponent
   */
  gramWeight?: number;
  /**
   *
   * @type {boolean}
   * @memberof FoodComponent
   */
  isRefuse?: boolean;
  /**
   *
   * @type {number}
   * @memberof FoodComponent
   */
  minYearAcquired?: number;
  /**
   *
   * @type {number}
   * @memberof FoodComponent
   */
  percentWeight?: number;
}


/**
 *
 * @export
 * @interface FoodNutrient
 */
export interface FoodNutrient {
  /**
   *
   * @type {number}
   * @memberof FoodNutrient
   */
  id: number;
  /**
   *
   * @type {number}
   * @memberof FoodNutrient
   */
  amount?: number;
  /**
   *
   * @type {number}
   * @memberof FoodNutrient
   */
  dataPoints?: number;
  /**
   *
   * @type {number}
   * @memberof FoodNutrient
   */
  min?: number;
  /**
   *
   * @type {number}
   * @memberof FoodNutrient
   */
  max?: number;
  /**
   *
   * @type {number}
   * @memberof FoodNutrient
   */
  median?: number;
  /**
   *
   * @type {string}
   * @memberof FoodNutrient
   */
  type?: string;
  /**
   *
   * @type {Nutrient}
   * @memberof FoodNutrient
   */
  nutrient?: Nutrient;
  /**
   *
   * @type {FoodNutrientDerivation}
   * @memberof FoodNutrient
   */
  foodNutrientDerivation?: FoodNutrientDerivation;
  /**
   *
   * @type {NutrientAnalysisDetails}
   * @memberof FoodNutrient
   */
  nutrientAnalysisDetails?: NutrientAnalysisDetails;
}

/**
 *
 * @export
 * @interface FoodNutrientDerivation
 */
export interface FoodNutrientDerivation {
  /**
   *
   * @type {number}
   * @memberof FoodNutrientDerivation
   */
  id?: number;
  /**
   *
   * @type {string}
   * @memberof FoodNutrientDerivation
   */
  code?: string;
  /**
   *
   * @type {string}
   * @memberof FoodNutrientDerivation
   */
  description?: string;
  /**
   *
   * @type {FoodNutrientSource}
   * @memberof FoodNutrientDerivation
   */
  foodNutrientSource?: FoodNutrientSource;
}

/**
 *
 * @export
 * @interface FoodNutrientSource
 */
export interface FoodNutrientSource {
  /**
   *
   * @type {number}
   * @memberof FoodNutrientSource
   */
  id?: number;
  /**
   *
   * @type {string}
   * @memberof FoodNutrientSource
   */
  code?: string;
  /**
   *
   * @type {string}
   * @memberof FoodNutrientSource
   */
  description?: string;
}

/**
 *
 * @export
 * @interface FoodPortion
 */
export interface FoodPortion {
  /**
   *
   * @type {number}
   * @memberof FoodPortion
   */
  id?: number;
  /**
   *
   * @type {number}
   * @memberof FoodPortion
   */
  amount?: number;
  /**
   *
   * @type {number}
   * @memberof FoodPortion
   */
  dataPoints?: number;
  /**
   *
   * @type {number}
   * @memberof FoodPortion
   */
  gramWeight?: number;
  /**
   *
   * @type {number}
   * @memberof FoodPortion
   */
  minYearAcquired?: number;
  /**
   *
   * @type {string}
   * @memberof FoodPortion
   */
  modifier?: string;
  /**
   *
   * @type {string}
   * @memberof FoodPortion
   */
  portionDescription?: string;
  /**
   *
   * @type {number}
   * @memberof FoodPortion
   */
  sequenceNumber?: number;
  /**
   *
   * @type {MeasureUnit}
   * @memberof FoodPortion
   */
  measureUnit?: MeasureUnit;
}

/**
 *
 * @export
 * @interface FoodUpdateLog
 */
export interface FoodUpdateLog {
  /**
   *
   * @type {number}
   * @memberof FoodUpdateLog
   */
  fdcId?: number;
  /**
   *
   * @type {string}
   * @memberof FoodUpdateLog
   */
  availableDate?: string;
  /**
   *
   * @type {string}
   * @memberof FoodUpdateLog
   */
  brandOwner?: string;
  /**
   *
   * @type {string}
   * @memberof FoodUpdateLog
   */
  dataSource?: string;
  /**
   *
   * @type {string}
   * @memberof FoodUpdateLog
   */
  dataType?: string;
  /**
   *
   * @type {string}
   * @memberof FoodUpdateLog
   */
  description?: string;
  /**
   *
   * @type {string}
   * @memberof FoodUpdateLog
   */
  foodClass?: string;
  /**
   *
   * @type {string}
   * @memberof FoodUpdateLog
   */
  gtinUpc?: string;
  /**
   *
   * @type {string}
   * @memberof FoodUpdateLog
   */
  householdServingFullText?: string;
  /**
   *
   * @type {string}
   * @memberof FoodUpdateLog
   */
  ingredients?: string;
  /**
   *
   * @type {string}
   * @memberof FoodUpdateLog
   */
  modifiedDate?: string;
  /**
   *
   * @type {string}
   * @memberof FoodUpdateLog
   */
  publicationDate?: string;
  /**
   *
   * @type {number}
   * @memberof FoodUpdateLog
   */
  servingSize?: number;
  /**
   *
   * @type {string}
   * @memberof FoodUpdateLog
   */
  servingSizeUnit?: string;
  /**
   *
   * @type {string}
   * @memberof FoodUpdateLog
   */
  brandedFoodCategory?: string;
  /**
   *
   * @type {string}
   * @memberof FoodUpdateLog
   */
  changes?: string;
  /**
   *
   * @type {Array<FoodAttribute>}
   * @memberof FoodUpdateLog
   */
  foodAttributes?: Array<FoodAttribute>;
}

/**
 *
 * @export
 * @interface FoundationFoodItem
 */
export interface FoundationFoodItem {
  /**
   *
   * @type {number}
   * @memberof FoundationFoodItem
   */
  fdcId: number;
  /**
   *
   * @type {string}
   * @memberof FoundationFoodItem
   */
  dataType: string;
  /**
   *
   * @type {string}
   * @memberof FoundationFoodItem
   */
  description: string;
  /**
   *
   * @type {string}
   * @memberof FoundationFoodItem
   */
  foodClass?: string;
  /**
   *
   * @type {string}
   * @memberof FoundationFoodItem
   */
  footNote?: string;
  /**
   *
   * @type {boolean}
   * @memberof FoundationFoodItem
   */
  isHistoricalReference?: boolean;
  /**
   *
   * @type {number}
   * @memberof FoundationFoodItem
   */
  ndbNumber?: number;
  /**
   *
   * @type {string}
   * @memberof FoundationFoodItem
   */
  publicationDate?: string;
  /**
   *
   * @type {string}
   * @memberof FoundationFoodItem
   */
  scientificName?: string;
  /**
   *
   * @type {FoodCategory}
   * @memberof FoundationFoodItem
   */
  foodCategory?: FoodCategory;
  /**
   *
   * @type {Array<FoodComponent>}
   * @memberof FoundationFoodItem
   */
  foodComponents?: Array<FoodComponent>;
  /**
   *
   * @type {Array<FoodNutrient>}
   * @memberof FoundationFoodItem
   */
  foodNutrients?: Array<FoodNutrient>;
  /**
   *
   * @type {Array<FoodPortion>}
   * @memberof FoundationFoodItem
   */
  foodPortions?: Array<FoodPortion>;
  /**
   *
   * @type {Array<InputFoodFoundation>}
   * @memberof FoundationFoodItem
   */
  inputFoods?: Array<InputFoodFoundation>;
  /**
   *
   * @type {Array<NutrientConversionFactors>}
   * @memberof FoundationFoodItem
   */
  nutrientConversionFactors?: Array<NutrientConversionFactors>;
}

/**
 *
 * @export
 * @interface InlineResponse200
 */
export interface InlineResponse200 {
}

/**
 * applies to Foundation foods. Not all inputFoods will have all fields.
 * @export
 * @interface InputFoodFoundation
 */
export interface InputFoodFoundation {
  /**
   *
   * @type {number}
   * @memberof InputFoodFoundation
   */
  id?: number;
  /**
   *
   * @type {string}
   * @memberof InputFoodFoundation
   */
  foodDescription?: string;
  /**
   *
   * @type {SampleFoodItem}
   * @memberof InputFoodFoundation
   */
  inputFood?: SampleFoodItem;
}

/**
 * applies to Survey (FNDDS). Not all inputFoods will have all fields.
 * @export
 * @interface InputFoodSurvey
 */
export interface InputFoodSurvey {
  /**
   *
   * @type {number}
   * @memberof InputFoodSurvey
   */
  id?: number;
  /**
   *
   * @type {number}
   * @memberof InputFoodSurvey
   */
  amount?: number;
  /**
   *
   * @type {string}
   * @memberof InputFoodSurvey
   */
  foodDescription?: string;
  /**
   *
   * @type {number}
   * @memberof InputFoodSurvey
   */
  ingredientCode?: number;
  /**
   *
   * @type {string}
   * @memberof InputFoodSurvey
   */
  ingredientDescription?: string;
  /**
   *
   * @type {number}
   * @memberof InputFoodSurvey
   */
  ingredientWeight?: number;
  /**
   *
   * @type {string}
   * @memberof InputFoodSurvey
   */
  portionCode?: string;
  /**
   *
   * @type {string}
   * @memberof InputFoodSurvey
   */
  portionDescription?: string;
  /**
   *
   * @type {number}
   * @memberof InputFoodSurvey
   */
  sequenceNumber?: number;
  /**
   *
   * @type {number}
   * @memberof InputFoodSurvey
   */
  surveyFlag?: number;
  /**
   *
   * @type {string}
   * @memberof InputFoodSurvey
   */
  unit?: string;
  /**
   *
   * @type {SurveyFoodItem}
   * @memberof InputFoodSurvey
   */
  inputFood?: SurveyFoodItem;
  /**
   *
   * @type {RetentionFactor}
   * @memberof InputFoodSurvey
   */
  retentionFactor?: RetentionFactor;
}

/**
 *
 * @export
 * @interface MeasureUnit
 */
export interface MeasureUnit {
  /**
   *
   * @type {number}
   * @memberof MeasureUnit
   */
  id?: number;
  /**
   *
   * @type {string}
   * @memberof MeasureUnit
   */
  abbreviation?: string;
  /**
   *
   * @type {string}
   * @memberof MeasureUnit
   */
  name?: string;
}

/**
 * a food nutrient
 * @export
 * @interface Nutrient
 */
export interface Nutrient {
  /**
   *
   * @type {number}
   * @memberof Nutrient
   */
  id?: number;
  /**
   *
   * @type {string}
   * @memberof Nutrient
   */
  number?: string;
  /**
   *
   * @type {string}
   * @memberof Nutrient
   */
  name?: string;
  /**
   *
   * @type {number}
   * @memberof Nutrient
   */
  rank?: number;
  /**
   *
   * @type {string}
   * @memberof Nutrient
   */
  unitName?: string;
}

/**
 *
 * @export
 * @interface NutrientAcquisitionDetails
 */
export interface NutrientAcquisitionDetails {
  /**
   *
   * @type {number}
   * @memberof NutrientAcquisitionDetails
   */
  sampleUnitId?: number;
  /**
   *
   * @type {string}
   * @memberof NutrientAcquisitionDetails
   */
  purchaseDate?: string;
  /**
   *
   * @type {string}
   * @memberof NutrientAcquisitionDetails
   */
  storeCity?: string;
  /**
   *
   * @type {string}
   * @memberof NutrientAcquisitionDetails
   */
  storeState?: string;
}

/**
 *
 * @export
 * @interface NutrientAnalysisDetails
 */
export interface NutrientAnalysisDetails {
  /**
   *
   * @type {number}
   * @memberof NutrientAnalysisDetails
   */
  subSampleId?: number;
  /**
   *
   * @type {number}
   * @memberof NutrientAnalysisDetails
   */
  amount?: number;
  /**
   *
   * @type {number}
   * @memberof NutrientAnalysisDetails
   */
  nutrientId?: number;
  /**
   *
   * @type {string}
   * @memberof NutrientAnalysisDetails
   */
  labMethodDescription?: string;
  /**
   *
   * @type {string}
   * @memberof NutrientAnalysisDetails
   */
  labMethodOriginalDescription?: string;
  /**
   *
   * @type {string}
   * @memberof NutrientAnalysisDetails
   */
  labMethodLink?: string;
  /**
   *
   * @type {string}
   * @memberof NutrientAnalysisDetails
   */
  labMethodTechnique?: string;
  /**
   *
   * @type {Array<NutrientAcquisitionDetails>}
   * @memberof NutrientAnalysisDetails
   */
  nutrientAcquisitionDetails?: Array<NutrientAcquisitionDetails>;
}

/**
 *
 * @export
 * @interface NutrientConversionFactors
 */
export interface NutrientConversionFactors {
  /**
   *
   * @type {string}
   * @memberof NutrientConversionFactors
   */
  type?: string;
  /**
   *
   * @type {number}
   * @memberof NutrientConversionFactors
   */
  value?: number;
}

/**
 *
 * @export
 * @interface RetentionFactor
 */
export interface RetentionFactor {
  /**
   *
   * @type {number}
   * @memberof RetentionFactor
   */
  id?: number;
  /**
   *
   * @type {number}
   * @memberof RetentionFactor
   */
  code?: number;
  /**
   *
   * @type {string}
   * @memberof RetentionFactor
   */
  description?: string;
}

/**
 *
 * @export
 * @interface SRLegacyFoodItem
 */
export interface SRLegacyFoodItem {
  /**
   *
   * @type {number}
   * @memberof SRLegacyFoodItem
   */
  fdcId: number;
  /**
   *
   * @type {string}
   * @memberof SRLegacyFoodItem
   */
  dataType: string;
  /**
   *
   * @type {string}
   * @memberof SRLegacyFoodItem
   */
  description: string;
  /**
   *
   * @type {string}
   * @memberof SRLegacyFoodItem
   */
  foodClass?: string;
  /**
   *
   * @type {boolean}
   * @memberof SRLegacyFoodItem
   */
  isHistoricalReference?: boolean;
  /**
   *
   * @type {number}
   * @memberof SRLegacyFoodItem
   */
  ndbNumber?: number;
  /**
   *
   * @type {string}
   * @memberof SRLegacyFoodItem
   */
  publicationDate?: string;
  /**
   *
   * @type {string}
   * @memberof SRLegacyFoodItem
   */
  scientificName?: string;
  /**
   *
   * @type {FoodCategory}
   * @memberof SRLegacyFoodItem
   */
  foodCategory?: FoodCategory;
  /**
   *
   * @type {Array<FoodNutrient>}
   * @memberof SRLegacyFoodItem
   */
  foodNutrients?: Array<FoodNutrient>;
  /**
   *
   * @type {Array<NutrientConversionFactors>}
   * @memberof SRLegacyFoodItem
   */
  nutrientConversionFactors?: Array<NutrientConversionFactors>;
}

/**
 *
 * @export
 * @interface SampleFoodItem
 */
export interface SampleFoodItem {
  /**
   *
   * @type {number}
   * @memberof SampleFoodItem
   */
  fdcId: number;
  /**
   *
   * @type {string}
   * @memberof SampleFoodItem
   */
  datatype?: string;
  /**
   *
   * @type {string}
   * @memberof SampleFoodItem
   */
  description: string;
  /**
   *
   * @type {string}
   * @memberof SampleFoodItem
   */
  foodClass?: string;
  /**
   *
   * @type {string}
   * @memberof SampleFoodItem
   */
  publicationDate?: string;
  /**
   *
   * @type {Array<FoodCategory>}
   * @memberof SampleFoodItem
   */
  foodAttributes?: Array<FoodCategory>;
}

/**
 *
 * @export
 * @interface SearchResultFood
 */
export interface SearchResultFood {
  /**
   * Unique ID of the food.
   * @type {number}
   * @memberof SearchResultFood
   */
  fdcId: number;
  /**
   * The type of the food data.
   * @type {string}
   * @memberof SearchResultFood
   */
  dataType?: string;
  /**
   * The description of the food.
   * @type {string}
   * @memberof SearchResultFood
   */
  description: string;
  /**
   * Any A unique ID identifying the food within FNDDS.
   * @type {string}
   * @memberof SearchResultFood
   */
  foodCode?: string;
  /**
   *
   * @type {Array<AbridgedFoodNutrient>}
   * @memberof SearchResultFood
   */
  foodNutrients?: Array<AbridgedFoodNutrient>;
  /**
   * Date the item was published to FDC.
   * @type {string}
   * @memberof SearchResultFood
   */
  publicationDate?: string;
  /**
   * The scientific name of the food.
   * @type {string}
   * @memberof SearchResultFood
   */
  scientificName?: string;
  /**
   * Brand owner for the food. Only applies to Branded Foods.
   * @type {string}
   * @memberof SearchResultFood
   */
  brandOwner?: string;
  /**
   * GTIN or UPC code identifying the food. Only applies to Branded Foods.
   * @type {string}
   * @memberof SearchResultFood
   */
  gtinUpc?: string;
  /**
   * The list of ingredients (as it appears on the product label). Only applies to Branded Foods.
   * @type {string}
   * @memberof SearchResultFood
   */
  ingredients?: string;
  /**
   * Unique number assigned for foundation foods. Only applies to Foundation and SRLegacy Foods.
   * @type {number}
   * @memberof SearchResultFood
   */
  ndbNumber?: number;
  /**
   * Any additional descriptions of the food.
   * @type {string}
   * @memberof SearchResultFood
   */
  additionalDescriptions?: string;
  /**
   * allHighlightFields
   * @type {string}
   * @memberof SearchResultFood
   */
  allHighlightFields?: string;
  /**
   * Relative score indicating how well the food matches the search criteria.
   * @type {number}
   * @memberof SearchResultFood
   */
  score?: number;
}

/**
 *
 * @export
 * @interface SurveyFoodItem
 */
export interface SurveyFoodItem {
  /**
   *
   * @type {number}
   * @memberof SurveyFoodItem
   */
  fdcId: number;
  /**
   *
   * @type {string}
   * @memberof SurveyFoodItem
   */
  datatype?: string;
  /**
   *
   * @type {string}
   * @memberof SurveyFoodItem
   */
  description: string;
  /**
   *
   * @type {string}
   * @memberof SurveyFoodItem
   */
  endDate?: string;
  /**
   *
   * @type {string}
   * @memberof SurveyFoodItem
   */
  foodClass?: string;
  /**
   *
   * @type {string}
   * @memberof SurveyFoodItem
   */
  foodCode?: string;
  /**
   *
   * @type {string}
   * @memberof SurveyFoodItem
   */
  publicationDate?: string;
  /**
   *
   * @type {string}
   * @memberof SurveyFoodItem
   */
  startDate?: string;
  /**
   *
   * @type {Array<FoodAttribute>}
   * @memberof SurveyFoodItem
   */
  foodAttributes?: Array<FoodAttribute>;
  /**
   *
   * @type {Array<FoodPortion>}
   * @memberof SurveyFoodItem
   */
  foodPortions?: Array<FoodPortion>;
  /**
   *
   * @type {Array<InputFoodSurvey>}
   * @memberof SurveyFoodItem
   */
  inputFoods?: Array<InputFoodSurvey>;
  /**
   *
   * @type {WweiaFoodCategory}
   * @memberof SurveyFoodItem
   */
  wweiaFoodCategory?: WweiaFoodCategory;
}

/**
 *
 * @export
 * @interface WweiaFoodCategory
 */
export interface WweiaFoodCategory {
  /**
   *
   * @type {number}
   * @memberof WweiaFoodCategory
   */
  wweiaFoodCategoryCode?: number;
  /**
   *
   * @type {string}
   * @memberof WweiaFoodCategory
   */
  wweiaFoodCategoryDescription?: string;
}
