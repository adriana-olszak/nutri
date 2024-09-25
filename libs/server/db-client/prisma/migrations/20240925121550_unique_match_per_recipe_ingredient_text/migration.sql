/*
  Warnings:

  - You are about to drop the column `recipe_ingredient_id` on the `matches` table. All the data in the column will be lost.
  - You are about to drop the column `table_id` on the `table_view_definitions` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[ingredient_text]` on the table `matches` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `ingredient_text` to the `matches` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tablFmodel Match {e_id` to the `table_view_definitions` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "matches" DROP CONSTRAINT "matches_recipe_ingredient_id_fkey";

-- DropIndex
DROP INDEX "matches_recipe_ingredient_id_idx";

-- AlterTable
ALTER TABLE "matches" DROP COLUMN "recipe_ingredient_id",
ADD COLUMN     "ingredient_text" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "recipe_ingredients" ADD COLUMN     "match_id" UUID;

-- AlterTable
ALTER TABLE "table_view_definitions" DROP COLUMN "table_id",
ADD COLUMN     "tablFmodel Match {e_id" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "matches_ingredient_text_key" ON "matches"("ingredient_text");

-- CreateIndex
CREATE INDEX "matches_ingredient_text_idx" ON "matches"("ingredient_text");

-- AddForeignKey
ALTER TABLE "recipe_ingredients" ADD CONSTRAINT "recipe_ingredients_match_id_fkey" FOREIGN KEY ("match_id") REFERENCES "matches"("id") ON DELETE SET NULL ON UPDATE CASCADE;
