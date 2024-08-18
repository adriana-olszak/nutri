enum RecipeColumnType {
  RECIPES_TITLE = "RECIPES_TITLE",
  RECIPES_DESCRIPTION = "RECIPES_DESCRIPTION",
  RECIPES_COOKING_TIME = "RECIPES_COOKING_TIME",
  RECIPES_PREP_TIME = "RECIPES_PREP_TIME",
  RECIPES_SERVINGS_MIN = "RECIPES_SERVINGS_MIN",
  RECIPES_SERVINGS_MAX = "RECIPES_SERVINGS_MAX",
  RECIPES_CREATED_AT = "RECIPES_CREATED_AT",
  RECIPES_UPDATED_AT = "RECIPES_UPDATED_AT"
}
enum TableType {
  RECIPES = 'RECIPES',
  PATIENTS = 'PATIENTS',
  INGREDIENTS = 'INGREDIENTS',
}

enum TableIdType {
  ALL_RECIPES = "ALL_RECIPES",
  FAVORITE_RECIPES = "FAVORITE_RECIPES",
  RECENTLY_ADDED_RECIPES = "RECENTLY_ADDED_RECIPES",
  PATIENTS = "PATIENTS",
  ALL_INGREDIENTS = "ALL_INGREDIENTS",
  PANTRY_INGREDIENTS = "PANTRY_INGREDIENTS",
  SHOPPING_LIST = "SHOPPING_LIST",
  MEAL_PLANS = "MEAL_PLANS",
  NUTRITIONAL_GUIDELINES = "NUTRITIONAL_GUIDELINES",
  DIETARY_RESTRICTIONS = "DIETARY_RESTRICTIONS"
}

type ColumnDef = {
  columnId: string;
  columnType: RecipeColumnType;
  name: string;
  width: number;
  visible: boolean;
  filter: any | null; // The 'any' type is used here as the filter structure wasn't specified. You may want to define a more specific type for filters.
};

type TableViewDef = {
  id: string;
  name: string;
  tableId: TableIdType;
  order: number;
  icon: string;
  filters: string; // This is a string in the example, but you might want to consider using an object if it's meant to be parsed JSON
  sorting: string; // Same as filters, consider using an object if it's meant to be parsed JSON
  columns: ColumnDef[];
  isPreset: boolean;
  isShared: boolean;
  createdAt: string; // ISO 8601 date string
  updatedAt: string; // ISO 8601 date string
};

// Patient Table Types and Enums
enum PatientColumnType {
  PATIENTS_NAME = "PATIENTS_NAME",
  PATIENTS_AGE = "PATIENTS_AGE",
  PATIENTS_HEIGHT = "PATIENTS_HEIGHT",
  PATIENTS_WEIGHT = "PATIENTS_WEIGHT",
  PATIENTS_BMI = "PATIENTS_BMI",
  PATIENTS_FITNESS_LEVEL = "PATIENTS_FITNESS_LEVEL",
  PATIENTS_DIETARY_PREFERENCES = "PATIENTS_DIETARY_PREFERENCES",
  PATIENTS_DIETARY_RESTRICTIONS = "PATIENTS_DIETARY_RESTRICTIONS",
  PATIENTS_HEALTH_PROBLEMS = "PATIENTS_HEALTH_PROBLEMS",
  PATIENTS_ALLERGIES = "PATIENTS_ALLERGIES"
}

enum FitnessLevel {
  SEDENTARY = "Sedentary",
  LIGHT_ACTIVE = "Light Active",
  MODERATELY_ACTIVE = "Moderately Active",
  VERY_ACTIVE = "Very Active",
  EXTRA_ACTIVE = "Extra Active"
}
export {RecipeColumnType, TableIdType, TableViewDef, ColumnDef, TableType, FitnessLevel, PatientColumnType}
