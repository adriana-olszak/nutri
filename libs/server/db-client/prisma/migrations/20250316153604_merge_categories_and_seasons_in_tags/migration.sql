/*
  Warnings:

  - You are about to drop the `_RecipeToRecipeCategory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_RecipeToSeason` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `recipe_categories` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `recipe_seasons` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_RecipeToRecipeCategory" DROP CONSTRAINT "_RecipeToRecipeCategory_A_fkey";

-- DropForeignKey
ALTER TABLE "_RecipeToRecipeCategory" DROP CONSTRAINT "_RecipeToRecipeCategory_B_fkey";

-- DropForeignKey
ALTER TABLE "_RecipeToSeason" DROP CONSTRAINT "_RecipeToSeason_A_fkey";

-- DropForeignKey
ALTER TABLE "_RecipeToSeason" DROP CONSTRAINT "_RecipeToSeason_B_fkey";

-- DropTable
DROP TABLE "_RecipeToRecipeCategory";

-- DropTable
DROP TABLE "_RecipeToSeason";

-- DropTable
DROP TABLE "recipe_categories";

-- DropTable
DROP TABLE "recipe_seasons";
