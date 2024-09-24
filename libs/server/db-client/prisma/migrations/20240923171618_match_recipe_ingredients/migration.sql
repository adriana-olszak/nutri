/*
  Warnings:

  - You are about to drop the `recipe_ingredient_food_matches` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "recipe_ingredient_food_matches" DROP CONSTRAINT "recipe_ingredient_food_matches_matched_food_id_fkey";

-- DropForeignKey
ALTER TABLE "recipe_ingredient_food_matches" DROP CONSTRAINT "recipe_ingredient_food_matches_recipe_ingredient_id_fkey";

-- DropForeignKey
ALTER TABLE "recipe_ingredient_food_matches" DROP CONSTRAINT "recipe_ingredient_food_matches_reviewed_by_id_fkey";

-- DropTable
DROP TABLE "recipe_ingredient_food_matches";

-- CreateTable
CREATE TABLE "matches_recipe_ingredient_food" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "recipe_ingredient_id" UUID NOT NULL,
    "matched_food_id" UUID NOT NULL,
    "bi_encoder_score" DOUBLE PRECISION NOT NULL,
    "cross_encoder_score" DOUBLE PRECISION,
    "rank" INTEGER NOT NULL,
    "confidence" DOUBLE PRECISION NOT NULL,
    "algorithm_version" TEXT,
    "needs_review" BOOLEAN NOT NULL DEFAULT true,
    "match_quality" "MatchQuality" NOT NULL DEFAULT 'MEDIUM',
    "match_type" "MatchType" NOT NULL DEFAULT 'AUTOMATIC',
    "notes" TEXT,
    "potential_nutritional_impact" DOUBLE PRECISION,
    "nutritional_confidence" DOUBLE PRECISION,
    "substitution_complexity" DOUBLE PRECISION,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "matches_recipe_ingredient_food_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "matches_manual_reviews" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "matchRecipeIngredientFoodId" UUID NOT NULL,
    "reviewed_by_id" UUID,
    "reviewed_at" TIMESTAMP(3),
    "review_status" "ReviewStatus" NOT NULL DEFAULT 'PENDING',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "matches_manual_reviews_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "matches_recipe_ingredient_food_recipe_ingredient_id_idx" ON "matches_recipe_ingredient_food"("recipe_ingredient_id");

-- CreateIndex
CREATE INDEX "matches_recipe_ingredient_food_matched_food_id_idx" ON "matches_recipe_ingredient_food"("matched_food_id");

-- CreateIndex
CREATE INDEX "matches_recipe_ingredient_food_needs_review_idx" ON "matches_recipe_ingredient_food"("needs_review");

-- CreateIndex
CREATE INDEX "matches_recipe_ingredient_food_match_quality_idx" ON "matches_recipe_ingredient_food"("match_quality");

-- CreateIndex
CREATE INDEX "matches_recipe_ingredient_food_match_type_idx" ON "matches_recipe_ingredient_food"("match_type");

-- CreateIndex
CREATE UNIQUE INDEX "matches_recipe_ingredient_food_recipe_ingredient_id_matched_key" ON "matches_recipe_ingredient_food"("recipe_ingredient_id", "matched_food_id");

-- CreateIndex
CREATE UNIQUE INDEX "matches_manual_reviews_matchRecipeIngredientFoodId_key" ON "matches_manual_reviews"("matchRecipeIngredientFoodId");

-- AddForeignKey
ALTER TABLE "matches_recipe_ingredient_food" ADD CONSTRAINT "matches_recipe_ingredient_food_recipe_ingredient_id_fkey" FOREIGN KEY ("recipe_ingredient_id") REFERENCES "recipe_ingredients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "matches_recipe_ingredient_food" ADD CONSTRAINT "matches_recipe_ingredient_food_matched_food_id_fkey" FOREIGN KEY ("matched_food_id") REFERENCES "foods"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "matches_manual_reviews" ADD CONSTRAINT "matches_manual_reviews_matchRecipeIngredientFoodId_fkey" FOREIGN KEY ("matchRecipeIngredientFoodId") REFERENCES "matches_recipe_ingredient_food"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "matches_manual_reviews" ADD CONSTRAINT "matches_manual_reviews_reviewed_by_id_fkey" FOREIGN KEY ("reviewed_by_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
