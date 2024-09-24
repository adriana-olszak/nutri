/*
  Warnings:

  - You are about to drop the column `parent_category_id` on the `food_categories` table. All the data in the column will be lost.
  - You are about to drop the `food_categories_on_food` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `category_id` to the `foods` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "food_categories" DROP CONSTRAINT "food_categories_parent_category_id_fkey";

-- DropForeignKey
ALTER TABLE "food_categories_on_food" DROP CONSTRAINT "food_categories_on_food_category_id_fkey";

-- DropForeignKey
ALTER TABLE "food_categories_on_food" DROP CONSTRAINT "food_categories_on_food_food_id_fkey";

-- DropIndex
DROP INDEX "food_categories_parent_category_id_idx";

-- AlterTable
ALTER TABLE "food_categories" DROP COLUMN "parent_category_id";

-- AlterTable
ALTER TABLE "foods" ADD COLUMN     "category_id" UUID NOT NULL;

-- DropTable
DROP TABLE "food_categories_on_food";

-- AddForeignKey
ALTER TABLE "foods" ADD CONSTRAINT "foods_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "food_categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
