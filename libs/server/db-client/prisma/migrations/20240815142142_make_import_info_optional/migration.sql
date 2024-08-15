-- DropForeignKey
ALTER TABLE "BrandedFood" DROP CONSTRAINT "BrandedFood_importInfoId_fkey";

-- DropForeignKey
ALTER TABLE "Food" DROP CONSTRAINT "Food_importInfoId_fkey";

-- DropForeignKey
ALTER TABLE "FoodCategory" DROP CONSTRAINT "FoodCategory_importInfoId_fkey";

-- DropForeignKey
ALTER TABLE "FoodNutrient" DROP CONSTRAINT "FoodNutrient_importInfoId_fkey";

-- DropForeignKey
ALTER TABLE "FoodPortion" DROP CONSTRAINT "FoodPortion_importInfoId_fkey";

-- DropForeignKey
ALTER TABLE "MeasureUnit" DROP CONSTRAINT "MeasureUnit_importInfoId_fkey";

-- DropForeignKey
ALTER TABLE "Nutrient" DROP CONSTRAINT "Nutrient_importInfoId_fkey";

-- AlterTable
ALTER TABLE "BrandedFood" ALTER COLUMN "importInfoId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Food" ALTER COLUMN "importInfoId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "FoodCategory" ALTER COLUMN "importInfoId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "FoodNutrient" ALTER COLUMN "importInfoId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "FoodPortion" ALTER COLUMN "importInfoId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "MeasureUnit" ALTER COLUMN "importInfoId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Nutrient" ALTER COLUMN "importInfoId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Food" ADD CONSTRAINT "Food_importInfoId_fkey" FOREIGN KEY ("importInfoId") REFERENCES "ImportInfo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FoodCategory" ADD CONSTRAINT "FoodCategory_importInfoId_fkey" FOREIGN KEY ("importInfoId") REFERENCES "ImportInfo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BrandedFood" ADD CONSTRAINT "BrandedFood_importInfoId_fkey" FOREIGN KEY ("importInfoId") REFERENCES "ImportInfo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Nutrient" ADD CONSTRAINT "Nutrient_importInfoId_fkey" FOREIGN KEY ("importInfoId") REFERENCES "ImportInfo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FoodNutrient" ADD CONSTRAINT "FoodNutrient_importInfoId_fkey" FOREIGN KEY ("importInfoId") REFERENCES "ImportInfo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FoodPortion" ADD CONSTRAINT "FoodPortion_importInfoId_fkey" FOREIGN KEY ("importInfoId") REFERENCES "ImportInfo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MeasureUnit" ADD CONSTRAINT "MeasureUnit_importInfoId_fkey" FOREIGN KEY ("importInfoId") REFERENCES "ImportInfo"("id") ON DELETE SET NULL ON UPDATE CASCADE;
