import { registerEnumType } from '@nestjs/graphql';

export enum NutritionLabelScalarFieldEnum {
    id = "id",
    brandedFoodId = "brandedFoodId",
    calories = "calories",
    totalFat = "totalFat",
    saturatedFat = "saturatedFat",
    transFat = "transFat",
    cholesterol = "cholesterol",
    sodium = "sodium",
    totalCarbohydrate = "totalCarbohydrate",
    dietaryFiber = "dietaryFiber",
    totalSugars = "totalSugars",
    addedSugars = "addedSugars",
    protein = "protein",
    vitaminA = "vitaminA",
    vitaminC = "vitaminC",
    vitaminD = "vitaminD",
    calcium = "calcium",
    iron = "iron",
    potassium = "potassium",
    servingsPerContainer = "servingsPerContainer",
    householdServingFullText = "householdServingFullText",
    percentDailyValueFat = "percentDailyValueFat",
    percentDailyValueSaturatedFat = "percentDailyValueSaturatedFat",
    percentDailyValueCholesterol = "percentDailyValueCholesterol",
    percentDailyValueSodium = "percentDailyValueSodium",
    percentDailyValueCarbohydrate = "percentDailyValueCarbohydrate",
    percentDailyValueFiber = "percentDailyValueFiber",
    percentDailyValueProtein = "percentDailyValueProtein",
    percentDailyValueVitaminA = "percentDailyValueVitaminA",
    percentDailyValueVitaminC = "percentDailyValueVitaminC",
    percentDailyValueVitaminD = "percentDailyValueVitaminD",
    percentDailyValueCalcium = "percentDailyValueCalcium",
    percentDailyValueIron = "percentDailyValueIron",
    percentDailyValuePotassium = "percentDailyValuePotassium"
}


registerEnumType(NutritionLabelScalarFieldEnum, { name: 'NutritionLabelScalarFieldEnum', description: undefined })
