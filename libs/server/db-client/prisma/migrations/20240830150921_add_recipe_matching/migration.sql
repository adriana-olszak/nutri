/*
  Warnings:

  - Made the column `ingredientText` on table `RecipeIngredient` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "vector";

-- CreateEnum
CREATE TYPE "ReviewStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED');

-- CreateEnum
CREATE TYPE "MatchQuality" AS ENUM ('EXACT', 'HIGH', 'MEDIUM', 'LOW', 'POOR');

-- CreateEnum
CREATE TYPE "MatchType" AS ENUM ('AUTOMATIC', 'MANUAL', 'CORRECTED');

-- DropForeignKey
ALTER TABLE "RecipeIngredient" DROP CONSTRAINT "RecipeIngredient_foodId_fkey";

-- AlterTable
ALTER TABLE "Food" ADD COLUMN     "sentenceTransformerVector" vector(384);

-- AlterTable
ALTER TABLE "RecipeIngredient" ALTER COLUMN "foodId" DROP NOT NULL,
ALTER COLUMN "ingredientText" SET NOT NULL;

-- CreateTable
CREATE TABLE "RecipeIngredientFoodMatch" (
    "id" TEXT NOT NULL,
    "recipeIngredientId" TEXT NOT NULL,
    "matchedFoodId" TEXT NOT NULL,
    "biEncoderScore" DOUBLE PRECISION NOT NULL,
    "crossEncoderScore" DOUBLE PRECISION,
    "rank" INTEGER NOT NULL,
    "confidence" DOUBLE PRECISION NOT NULL,
    "needsReview" BOOLEAN NOT NULL DEFAULT false,
    "reviewedById" TEXT,
    "reviewedAt" TIMESTAMP(3),
    "reviewStatus" "ReviewStatus" NOT NULL DEFAULT 'PENDING',
    "matchQuality" "MatchQuality" NOT NULL DEFAULT 'MEDIUM',
    "matchType" "MatchType" NOT NULL DEFAULT 'AUTOMATIC',
    "notes" TEXT,
    "potentialNutritionalImpact" DOUBLE PRECISION,
    "nutritionalConfidence" DOUBLE PRECISION,
    "substitutionComplexity" DOUBLE PRECISION,
    "algorithmVersion" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RecipeIngredientFoodMatch_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "RecipeIngredientFoodMatch_recipeIngredientId_idx" ON "RecipeIngredientFoodMatch"("recipeIngredientId");

-- CreateIndex
CREATE INDEX "RecipeIngredientFoodMatch_matchedFoodId_idx" ON "RecipeIngredientFoodMatch"("matchedFoodId");

-- CreateIndex
CREATE INDEX "RecipeIngredientFoodMatch_needsReview_idx" ON "RecipeIngredientFoodMatch"("needsReview");

-- CreateIndex
CREATE INDEX "RecipeIngredientFoodMatch_matchQuality_idx" ON "RecipeIngredientFoodMatch"("matchQuality");

-- CreateIndex
CREATE INDEX "RecipeIngredientFoodMatch_matchType_idx" ON "RecipeIngredientFoodMatch"("matchType");

-- CreateIndex
CREATE UNIQUE INDEX "RecipeIngredientFoodMatch_recipeIngredientId_matchedFoodId_key" ON "RecipeIngredientFoodMatch"("recipeIngredientId", "matchedFoodId");

-- AddForeignKey
ALTER TABLE "RecipeIngredient" ADD CONSTRAINT "RecipeIngredient_foodId_fkey" FOREIGN KEY ("foodId") REFERENCES "Food"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecipeIngredientFoodMatch" ADD CONSTRAINT "RecipeIngredientFoodMatch_recipeIngredientId_fkey" FOREIGN KEY ("recipeIngredientId") REFERENCES "RecipeIngredient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecipeIngredientFoodMatch" ADD CONSTRAINT "RecipeIngredientFoodMatch_matchedFoodId_fkey" FOREIGN KEY ("matchedFoodId") REFERENCES "Food"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecipeIngredientFoodMatch" ADD CONSTRAINT "RecipeIngredientFoodMatch_reviewedById_fkey" FOREIGN KEY ("reviewedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
