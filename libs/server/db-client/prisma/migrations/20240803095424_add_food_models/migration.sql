-- CreateEnum
CREATE TYPE "FoodDataSource" AS ENUM ('USDA', 'EUROFIR', 'CIQUAL', 'USER_INPUT');

-- CreateTable
CREATE TABLE "Language" (
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Language_pkey" PRIMARY KEY ("code")
);

-- CreateTable
CREATE TABLE "Translation" (
    "id" TEXT NOT NULL,
    "entityType" TEXT NOT NULL,
    "entityId" TEXT NOT NULL,
    "field" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "languageCode" TEXT NOT NULL,

    CONSTRAINT "Translation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Food" (
    "id" TEXT NOT NULL,
    "sourceId" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "scientificName" TEXT,
    "importInfoId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Food_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FoodSearchVector" (
    "id" TEXT NOT NULL,
    "foodId" TEXT NOT NULL,
    "languageCode" TEXT NOT NULL,
    "searchVector" tsvector NOT NULL,

    CONSTRAINT "FoodSearchVector_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FoodCategory" (
    "id" TEXT NOT NULL,
    "code" TEXT,
    "description" TEXT,
    "parentCategoryId" TEXT,
    "level" INTEGER NOT NULL,
    "sourceId" TEXT NOT NULL,
    "importInfoId" TEXT NOT NULL,

    CONSTRAINT "FoodCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FoodCategoryOnFood" (
    "foodId" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,
    "isPrimaryCategory" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "FoodCategoryOnFood_pkey" PRIMARY KEY ("foodId","categoryId")
);

-- CreateTable
CREATE TABLE "BrandedFood" (
    "id" TEXT NOT NULL,
    "foodId" TEXT NOT NULL,
    "brandOwner" TEXT NOT NULL,
    "gtinUpc" TEXT,
    "ingredients" TEXT,
    "servingSize" DOUBLE PRECISION,
    "servingUnit" TEXT,
    "sourceId" TEXT NOT NULL,
    "importInfoId" TEXT NOT NULL,

    CONSTRAINT "BrandedFood_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Nutrient" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "unitName" TEXT NOT NULL,
    "sourceId" TEXT NOT NULL,
    "importInfoId" TEXT NOT NULL,

    CONSTRAINT "Nutrient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FoodNutrient" (
    "id" TEXT NOT NULL,
    "foodId" TEXT NOT NULL,
    "nutrientId" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "min" DOUBLE PRECISION,
    "median" DOUBLE PRECISION,
    "max" DOUBLE PRECISION,
    "confidenceCode" TEXT,
    "sourceId" TEXT NOT NULL,
    "importInfoId" TEXT NOT NULL,

    CONSTRAINT "FoodNutrient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FoodPortion" (
    "id" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "gramWeight" DOUBLE PRECISION NOT NULL,
    "portionDescription" TEXT,
    "sourceId" TEXT NOT NULL,
    "foodId" TEXT NOT NULL,
    "measureUnitName" TEXT NOT NULL,
    "importInfoId" TEXT NOT NULL,

    CONSTRAINT "FoodPortion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MeasureUnit" (
    "name" TEXT NOT NULL,
    "importInfoId" TEXT NOT NULL,

    CONSTRAINT "MeasureUnit_pkey" PRIMARY KEY ("name")
);

-- CreateTable
CREATE TABLE "ImportInfo" (
    "id" TEXT NOT NULL,
    "sourceVersion" TEXT NOT NULL,
    "importDate" TIMESTAMP(3) NOT NULL,
    "dataSource" "FoodDataSource" NOT NULL,

    CONSTRAINT "ImportInfo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Language_code_key" ON "Language"("code");

-- CreateIndex
CREATE INDEX "Translation_entityType_entityId_idx" ON "Translation"("entityType", "entityId");

-- CreateIndex
CREATE UNIQUE INDEX "Translation_languageCode_entityType_entityId_field_key" ON "Translation"("languageCode", "entityType", "entityId", "field");

-- CreateIndex
CREATE UNIQUE INDEX "Food_sourceId_key" ON "Food"("sourceId");

-- CreateIndex
CREATE INDEX "FoodSearchVector_searchVector_idx" ON "FoodSearchVector" USING GIN ("searchVector");

-- CreateIndex
CREATE UNIQUE INDEX "FoodSearchVector_foodId_languageCode_key" ON "FoodSearchVector"("foodId", "languageCode");

-- CreateIndex
CREATE UNIQUE INDEX "FoodCategory_code_key" ON "FoodCategory"("code");

-- CreateIndex
CREATE UNIQUE INDEX "FoodCategory_description_key" ON "FoodCategory"("description");

-- CreateIndex
CREATE UNIQUE INDEX "FoodCategory_sourceId_key" ON "FoodCategory"("sourceId");

-- CreateIndex
CREATE INDEX "FoodCategory_parentCategoryId_idx" ON "FoodCategory"("parentCategoryId");

-- CreateIndex
CREATE INDEX "FoodCategory_level_idx" ON "FoodCategory"("level");

-- CreateIndex
CREATE INDEX "FoodCategoryOnFood_foodId_idx" ON "FoodCategoryOnFood"("foodId");

-- CreateIndex
CREATE INDEX "FoodCategoryOnFood_categoryId_idx" ON "FoodCategoryOnFood"("categoryId");

-- CreateIndex
CREATE UNIQUE INDEX "BrandedFood_foodId_key" ON "BrandedFood"("foodId");

-- CreateIndex
CREATE INDEX "BrandedFood_brandOwner_idx" ON "BrandedFood"("brandOwner");

-- CreateIndex
CREATE INDEX "BrandedFood_gtinUpc_idx" ON "BrandedFood"("gtinUpc");

-- CreateIndex
CREATE UNIQUE INDEX "Nutrient_sourceId_key" ON "Nutrient"("sourceId");

-- CreateIndex
CREATE INDEX "Nutrient_name_idx" ON "Nutrient"("name");

-- CreateIndex
CREATE INDEX "FoodNutrient_foodId_idx" ON "FoodNutrient"("foodId");

-- CreateIndex
CREATE INDEX "FoodNutrient_nutrientId_idx" ON "FoodNutrient"("nutrientId");

-- CreateIndex
CREATE INDEX "FoodNutrient_amount_idx" ON "FoodNutrient"("amount");

-- CreateIndex
CREATE INDEX "FoodPortion_foodId_idx" ON "FoodPortion"("foodId");

-- CreateIndex
CREATE UNIQUE INDEX "MeasureUnit_name_key" ON "MeasureUnit"("name");

-- CreateIndex
CREATE INDEX "ImportInfo_importDate_idx" ON "ImportInfo"("importDate");

-- CreateIndex
CREATE UNIQUE INDEX "ImportInfo_dataSource_sourceVersion_key" ON "ImportInfo"("dataSource", "sourceVersion");

-- AddForeignKey
ALTER TABLE "Translation" ADD CONSTRAINT "Translation_languageCode_fkey" FOREIGN KEY ("languageCode") REFERENCES "Language"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Food" ADD CONSTRAINT "Food_importInfoId_fkey" FOREIGN KEY ("importInfoId") REFERENCES "ImportInfo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FoodSearchVector" ADD CONSTRAINT "FoodSearchVector_foodId_fkey" FOREIGN KEY ("foodId") REFERENCES "Food"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FoodSearchVector" ADD CONSTRAINT "FoodSearchVector_languageCode_fkey" FOREIGN KEY ("languageCode") REFERENCES "Language"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FoodCategory" ADD CONSTRAINT "FoodCategory_importInfoId_fkey" FOREIGN KEY ("importInfoId") REFERENCES "ImportInfo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FoodCategory" ADD CONSTRAINT "FoodCategory_parentCategoryId_fkey" FOREIGN KEY ("parentCategoryId") REFERENCES "FoodCategory"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FoodCategoryOnFood" ADD CONSTRAINT "FoodCategoryOnFood_foodId_fkey" FOREIGN KEY ("foodId") REFERENCES "Food"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FoodCategoryOnFood" ADD CONSTRAINT "FoodCategoryOnFood_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "FoodCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BrandedFood" ADD CONSTRAINT "BrandedFood_foodId_fkey" FOREIGN KEY ("foodId") REFERENCES "Food"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BrandedFood" ADD CONSTRAINT "BrandedFood_importInfoId_fkey" FOREIGN KEY ("importInfoId") REFERENCES "ImportInfo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Nutrient" ADD CONSTRAINT "Nutrient_importInfoId_fkey" FOREIGN KEY ("importInfoId") REFERENCES "ImportInfo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FoodNutrient" ADD CONSTRAINT "FoodNutrient_foodId_fkey" FOREIGN KEY ("foodId") REFERENCES "Food"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FoodNutrient" ADD CONSTRAINT "FoodNutrient_nutrientId_fkey" FOREIGN KEY ("nutrientId") REFERENCES "Nutrient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FoodNutrient" ADD CONSTRAINT "FoodNutrient_importInfoId_fkey" FOREIGN KEY ("importInfoId") REFERENCES "ImportInfo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FoodPortion" ADD CONSTRAINT "FoodPortion_foodId_fkey" FOREIGN KEY ("foodId") REFERENCES "Food"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FoodPortion" ADD CONSTRAINT "FoodPortion_measureUnitName_fkey" FOREIGN KEY ("measureUnitName") REFERENCES "MeasureUnit"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FoodPortion" ADD CONSTRAINT "FoodPortion_importInfoId_fkey" FOREIGN KEY ("importInfoId") REFERENCES "ImportInfo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MeasureUnit" ADD CONSTRAINT "MeasureUnit_importInfoId_fkey" FOREIGN KEY ("importInfoId") REFERENCES "ImportInfo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
