/*
  Warnings:

  - The values [CORRECTED] on the enum `MatchType` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the `recipe_ingredient_food_matches` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "MatchStatus" AS ENUM ('PENDING_MATCH', 'AUTO_MATCHING_IN_PROGRESS', 'AUTO_MATCHING_FAILED', 'PENDING_REVIEW', 'IN_REVIEW', 'AUTO_APPROVED', 'APPROVED', 'REJECTED', 'NEEDS_REMATCH');

-- DropForeignKey
ALTER TABLE "recipe_ingredient_food_matches" DROP CONSTRAINT "recipe_ingredient_food_matches_matched_food_id_fkey";

-- DropForeignKey
ALTER TABLE "recipe_ingredient_food_matches" DROP CONSTRAINT "recipe_ingredient_food_matches_recipe_ingredient_id_fkey";

-- DropForeignKey
ALTER TABLE "recipe_ingredient_food_matches" DROP CONSTRAINT "recipe_ingredient_food_matches_reviewed_by_id_fkey";


-- DropTable
DROP TABLE "recipe_ingredient_food_matches";


ALTER TYPE "ReviewStatus" ADD VALUE 'IN_PROGRESS';
ALTER TYPE "ReviewStatus" ADD VALUE 'NEEDS_FURTHER_REVIEW';
ALTER TYPE "ReviewStatus" ADD VALUE 'MANUAL_SELECTION';


-- AlterTable
ALTER TABLE "auth_login_log" ALTER COLUMN "updated_at" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "auth_password_reset_token" ALTER COLUMN "updated_at" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "auth_refresh_token" ALTER COLUMN "updated_at" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "auth_session" ALTER COLUMN "updated_at" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "auth_token_blacklist" ALTER COLUMN "updated_at" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "food_categories" ALTER COLUMN "updated_at" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "food_embeddings" ALTER COLUMN "updated_at" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "food_food_nutrients" ALTER COLUMN "updated_at" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "food_measure_units" ALTER COLUMN "updated_at" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "food_nutrients" ALTER COLUMN "updated_at" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "food_portions" ALTER COLUMN "updated_at" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "food_search_vectors" ALTER COLUMN "updated_at" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "foods" ALTER COLUMN "updated_at" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "i18n_languages" ALTER COLUMN "updated_at" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "i18n_translations" ALTER COLUMN "updated_at" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "poll_answers" ALTER COLUMN "updated_at" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "poll_questions" ALTER COLUMN "updated_at" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "poll_sections" ALTER COLUMN "updated_at" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "poll_submissions" ALTER COLUMN "updated_at" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "poll_versions" ALTER COLUMN "updated_at" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "polls" ALTER COLUMN "updated_at" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "recipe_images" ALTER COLUMN "updated_at" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "recipe_ingredients" ALTER COLUMN "updated_at" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "recipe_instructions" ALTER COLUMN "updated_at" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "recipe_parts" ALTER COLUMN "updated_at" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "recipe_seasons" ALTER COLUMN "updated_at" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "recipe_tags" ALTER COLUMN "updated_at" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "recipes" ALTER COLUMN "updated_at" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "table_view_column_views" ALTER COLUMN "updated_at" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "table_view_definitions" ALTER COLUMN "updated_at" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "tenants" ALTER COLUMN "updated_at" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "updated_at" SET DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "matches" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "status" "MatchStatus" NOT NULL DEFAULT 'PENDING_MATCH',
    "recipe_ingredient_id" UUID NOT NULL,
    "selected_food_match_id" UUID,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "matches_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "match_foods" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "match_id" UUID NOT NULL,
    "food_id" UUID NOT NULL,
    "match_type" "MatchType" NOT NULL DEFAULT 'AUTOMATIC',
    "match_quality" "MatchQuality",
    "bi_encoder_score" DOUBLE PRECISION,
    "cross_encoder_score" DOUBLE PRECISION,
    "rank" INTEGER,
    "confidence" DOUBLE PRECISION,
    "algorithm_version" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "match_foods_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "match_manual_reviews" (
    "id" TEXT NOT NULL,
    "match_id" UUID NOT NULL,
    "reviewStatus" "ReviewStatus" NOT NULL,
    "reviewer_id" UUID,
    "notes" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "match_manual_reviews_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "matches_selected_food_match_id_key" ON "matches"("selected_food_match_id");

-- CreateIndex
CREATE INDEX "matches_recipe_ingredient_id_idx" ON "matches"("recipe_ingredient_id");

-- CreateIndex
CREATE INDEX "matches_status_idx" ON "matches"("status");

-- CreateIndex
CREATE INDEX "match_foods_match_id_idx" ON "match_foods"("match_id");

-- CreateIndex
CREATE INDEX "match_foods_food_id_idx" ON "match_foods"("food_id");

-- CreateIndex
CREATE INDEX "match_manual_reviews_match_id_idx" ON "match_manual_reviews"("match_id");

-- AddForeignKey
ALTER TABLE "matches" ADD CONSTRAINT "matches_recipe_ingredient_id_fkey" FOREIGN KEY ("recipe_ingredient_id") REFERENCES "recipe_ingredients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "matches" ADD CONSTRAINT "matches_selected_food_match_id_fkey" FOREIGN KEY ("selected_food_match_id") REFERENCES "match_foods"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "match_foods" ADD CONSTRAINT "match_foods_match_id_fkey" FOREIGN KEY ("match_id") REFERENCES "matches"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "match_foods" ADD CONSTRAINT "match_foods_food_id_fkey" FOREIGN KEY ("food_id") REFERENCES "foods"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "match_manual_reviews" ADD CONSTRAINT "match_manual_reviews_match_id_fkey" FOREIGN KEY ("match_id") REFERENCES "matches"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "match_manual_reviews" ADD CONSTRAINT "match_manual_reviews_reviewer_id_fkey" FOREIGN KEY ("reviewer_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
