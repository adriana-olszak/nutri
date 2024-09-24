/*
  Warnings:

  - The primary key for the `FoodNutrient` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `FoodNutrient` table. All the data in the column will be lost.
  - You are about to drop the `BrandedFood` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `NutritionLabel` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[foodId,measureUnitName]` on the table `FoodPortion` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "BrandedFood" DROP CONSTRAINT "BrandedFood_foodId_fkey";

-- DropForeignKey
ALTER TABLE "BrandedFood" DROP CONSTRAINT "BrandedFood_importInfoId_fkey";

-- DropForeignKey
ALTER TABLE "NutritionLabel" DROP CONSTRAINT "NutritionLabel_brandedFoodId_fkey";

-- AlterTable
ALTER TABLE "FoodNutrient" DROP CONSTRAINT "FoodNutrient_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "FoodNutrient_pkey" PRIMARY KEY ("foodId", "nutrientId");

-- DropTable
DROP TABLE "BrandedFood";

-- DropTable
DROP TABLE "NutritionLabel";

-- CreateIndex
CREATE UNIQUE INDEX "FoodPortion_foodId_measureUnitName_key" ON "FoodPortion"("foodId", "measureUnitName");
