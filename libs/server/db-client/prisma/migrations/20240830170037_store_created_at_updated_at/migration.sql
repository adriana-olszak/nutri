/*
  Warnings:

  - Added the required column `updatedAt` to the `Answer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `BrandedFood` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `ColumnView` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `FoodCategory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `FoodCategoryOnFood` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `FoodNutrient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `FoodPortion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `FoodSearchVector` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Language` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `MeasureUnit` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Nutrient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Question` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `RecipeImage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `RecipeIngredient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `RecipeInstructions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `RecipePart` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Season` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Section` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Submission` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Tag` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Tenant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Translation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Answer" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "BrandedFood" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "ColumnView" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "FoodCategory" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "FoodCategoryOnFood" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "FoodNutrient" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "FoodPortion" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "FoodSearchVector" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Language" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "MeasureUnit" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Nutrient" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Question" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "RecipeImage" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "RecipeIngredient" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "RecipeInstructions" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "RecipePart" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Season" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Section" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Submission" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Tag" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Tenant" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Translation" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
