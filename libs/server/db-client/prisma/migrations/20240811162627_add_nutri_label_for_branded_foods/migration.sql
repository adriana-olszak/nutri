-- CreateTable
CREATE TABLE "NutritionLabel" (
    "id" TEXT NOT NULL,
    "brandedFoodId" TEXT NOT NULL,
    "calories" DOUBLE PRECISION,
    "totalFat" DOUBLE PRECISION,
    "saturatedFat" DOUBLE PRECISION,
    "transFat" DOUBLE PRECISION,
    "cholesterol" DOUBLE PRECISION,
    "sodium" DOUBLE PRECISION,
    "totalCarbohydrate" DOUBLE PRECISION,
    "dietaryFiber" DOUBLE PRECISION,
    "totalSugars" DOUBLE PRECISION,
    "addedSugars" DOUBLE PRECISION,
    "protein" DOUBLE PRECISION,
    "vitaminA" DOUBLE PRECISION,
    "vitaminC" DOUBLE PRECISION,
    "vitaminD" DOUBLE PRECISION,
    "calcium" DOUBLE PRECISION,
    "iron" DOUBLE PRECISION,
    "potassium" DOUBLE PRECISION,
    "servingsPerContainer" DOUBLE PRECISION,
    "householdServingFullText" TEXT,
    "percentDailyValueFat" DOUBLE PRECISION,
    "percentDailyValueSaturatedFat" DOUBLE PRECISION,
    "percentDailyValueCholesterol" DOUBLE PRECISION,
    "percentDailyValueSodium" DOUBLE PRECISION,
    "percentDailyValueCarbohydrate" DOUBLE PRECISION,
    "percentDailyValueFiber" DOUBLE PRECISION,
    "percentDailyValueProtein" DOUBLE PRECISION,
    "percentDailyValueVitaminA" DOUBLE PRECISION,
    "percentDailyValueVitaminC" DOUBLE PRECISION,
    "percentDailyValueVitaminD" DOUBLE PRECISION,
    "percentDailyValueCalcium" DOUBLE PRECISION,
    "percentDailyValueIron" DOUBLE PRECISION,
    "percentDailyValuePotassium" DOUBLE PRECISION,

    CONSTRAINT "NutritionLabel_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "NutritionLabel_brandedFoodId_key" ON "NutritionLabel"("brandedFoodId");

-- AddForeignKey
ALTER TABLE "NutritionLabel" ADD CONSTRAINT "NutritionLabel_brandedFoodId_fkey" FOREIGN KEY ("brandedFoodId") REFERENCES "BrandedFood"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
