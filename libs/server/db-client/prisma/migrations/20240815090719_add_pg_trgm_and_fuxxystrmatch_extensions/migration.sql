/*
  Warnings:

  - You are about to drop the column `instructions` on the `Recipe` table. All the data in the column will be lost.

*/
-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "fuzzystrmatch";

-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "pg_trgm";

-- CreateEnum
CREATE TYPE "RecipeInstructionsType" AS ENUM ('TEXT', 'IMAGE', 'PART');

-- AlterTable
ALTER TABLE "Recipe" DROP COLUMN "instructions";

-- AlterTable
ALTER TABLE "RecipeIngredient" ADD COLUMN     "extraInfo" TEXT,
ADD COLUMN     "ingredientText" TEXT,
ADD COLUMN     "maxQuantity" DOUBLE PRECISION,
ADD COLUMN     "minQuantity" DOUBLE PRECISION,
ADD COLUMN     "quantityText" TEXT,
ADD COLUMN     "unitText" TEXT;

-- CreateTable
CREATE TABLE "RecipeInstructions" (
    "id" TEXT NOT NULL,
    "recipeId" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "type" "RecipeInstructionsType" NOT NULL,
    "order" INTEGER NOT NULL,
    "listIndex" INTEGER,

    CONSTRAINT "RecipeInstructions_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "RecipeInstructions" ADD CONSTRAINT "RecipeInstructions_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "Recipe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
