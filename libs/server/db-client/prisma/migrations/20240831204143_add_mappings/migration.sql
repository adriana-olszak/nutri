/*
  Warnings:

  - You are about to drop the `Answer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ColumnView` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Food` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FoodCategory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FoodCategoryOnFood` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FoodEmbedding` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FoodNutrient` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FoodPortion` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FoodSearchVector` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ImportInfo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Language` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `LoginLog` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Nutrient` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PasswordResetToken` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Question` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Questionnaire` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `QuestionnaireVersion` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Recipe` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RecipeCategory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RecipeImage` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RecipeIngredient` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RecipeIngredientFoodMatch` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RecipeInstructions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RecipePart` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RefreshToken` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Season` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Section` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Session` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Submission` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TableViewDefinition` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Tag` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Tenant` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TokenBlacklist` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Translation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - Changed the type of `A` on the `_RecipeToRecipeCategory` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `B` on the `_RecipeToRecipeCategory` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `A` on the `_RecipeToSeason` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `B` on the `_RecipeToSeason` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `A` on the `_RecipeToTag` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `B` on the `_RecipeToTag` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Answer" DROP CONSTRAINT "Answer_questionId_fkey";

-- DropForeignKey
ALTER TABLE "Answer" DROP CONSTRAINT "Answer_submissionId_fkey";

-- DropForeignKey
ALTER TABLE "ColumnView" DROP CONSTRAINT "ColumnView_tableViewDefinitionId_fkey";

-- DropForeignKey
ALTER TABLE "Food" DROP CONSTRAINT "Food_importInfoId_fkey";

-- DropForeignKey
ALTER TABLE "FoodCategory" DROP CONSTRAINT "FoodCategory_importInfoId_fkey";

-- DropForeignKey
ALTER TABLE "FoodCategory" DROP CONSTRAINT "FoodCategory_parentCategoryId_fkey";

-- DropForeignKey
ALTER TABLE "FoodCategoryOnFood" DROP CONSTRAINT "FoodCategoryOnFood_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "FoodCategoryOnFood" DROP CONSTRAINT "FoodCategoryOnFood_foodId_fkey";

-- DropForeignKey
ALTER TABLE "FoodEmbedding" DROP CONSTRAINT "FoodEmbedding_foodId_fkey";

-- DropForeignKey
ALTER TABLE "FoodEmbedding" DROP CONSTRAINT "FoodEmbedding_languageCode_fkey";

-- DropForeignKey
ALTER TABLE "FoodNutrient" DROP CONSTRAINT "FoodNutrient_foodId_fkey";

-- DropForeignKey
ALTER TABLE "FoodNutrient" DROP CONSTRAINT "FoodNutrient_importInfoId_fkey";

-- DropForeignKey
ALTER TABLE "FoodNutrient" DROP CONSTRAINT "FoodNutrient_nutrientId_fkey";

-- DropForeignKey
ALTER TABLE "FoodPortion" DROP CONSTRAINT "FoodPortion_foodId_fkey";

-- DropForeignKey
ALTER TABLE "FoodPortion" DROP CONSTRAINT "FoodPortion_importInfoId_fkey";

-- DropForeignKey
ALTER TABLE "FoodSearchVector" DROP CONSTRAINT "FoodSearchVector_foodId_fkey";

-- DropForeignKey
ALTER TABLE "FoodSearchVector" DROP CONSTRAINT "FoodSearchVector_languageCode_fkey";

-- DropForeignKey
ALTER TABLE "LoginLog" DROP CONSTRAINT "LoginLog_userId_fkey";

-- DropForeignKey
ALTER TABLE "Nutrient" DROP CONSTRAINT "Nutrient_importInfoId_fkey";

-- DropForeignKey
ALTER TABLE "PasswordResetToken" DROP CONSTRAINT "PasswordResetToken_userId_fkey";

-- DropForeignKey
ALTER TABLE "Question" DROP CONSTRAINT "Question_sectionId_fkey";

-- DropForeignKey
ALTER TABLE "Questionnaire" DROP CONSTRAINT "Questionnaire_tenantId_fkey";

-- DropForeignKey
ALTER TABLE "QuestionnaireVersion" DROP CONSTRAINT "QuestionnaireVersion_questionnaireId_fkey";

-- DropForeignKey
ALTER TABLE "RecipeImage" DROP CONSTRAINT "RecipeImage_recipeId_fkey";

-- DropForeignKey
ALTER TABLE "RecipeIngredient" DROP CONSTRAINT "RecipeIngredient_foodId_fkey";

-- DropForeignKey
ALTER TABLE "RecipeIngredient" DROP CONSTRAINT "RecipeIngredient_partId_fkey";

-- DropForeignKey
ALTER TABLE "RecipeIngredient" DROP CONSTRAINT "RecipeIngredient_recipeId_fkey";

-- DropForeignKey
ALTER TABLE "RecipeIngredientFoodMatch" DROP CONSTRAINT "RecipeIngredientFoodMatch_matchedFoodId_fkey";

-- DropForeignKey
ALTER TABLE "RecipeIngredientFoodMatch" DROP CONSTRAINT "RecipeIngredientFoodMatch_recipeIngredientId_fkey";

-- DropForeignKey
ALTER TABLE "RecipeIngredientFoodMatch" DROP CONSTRAINT "RecipeIngredientFoodMatch_reviewedById_fkey";

-- DropForeignKey
ALTER TABLE "RecipeInstructions" DROP CONSTRAINT "RecipeInstructions_recipeId_fkey";

-- DropForeignKey
ALTER TABLE "RecipePart" DROP CONSTRAINT "RecipePart_recipeId_fkey";

-- DropForeignKey
ALTER TABLE "RefreshToken" DROP CONSTRAINT "RefreshToken_userId_fkey";

-- DropForeignKey
ALTER TABLE "Section" DROP CONSTRAINT "Section_questionnaireVersionId_fkey";

-- DropForeignKey
ALTER TABLE "Session" DROP CONSTRAINT "Session_userId_fkey";

-- DropForeignKey
ALTER TABLE "Submission" DROP CONSTRAINT "Submission_questionnaireId_fkey";

-- DropForeignKey
ALTER TABLE "Submission" DROP CONSTRAINT "Submission_questionnaireVersionId_fkey";

-- DropForeignKey
ALTER TABLE "Submission" DROP CONSTRAINT "Submission_userId_fkey";

-- DropForeignKey
ALTER TABLE "Translation" DROP CONSTRAINT "Translation_languageCode_fkey";

-- DropForeignKey
ALTER TABLE "_RecipeToRecipeCategory" DROP CONSTRAINT "_RecipeToRecipeCategory_A_fkey";

-- DropForeignKey
ALTER TABLE "_RecipeToRecipeCategory" DROP CONSTRAINT "_RecipeToRecipeCategory_B_fkey";

-- DropForeignKey
ALTER TABLE "_RecipeToSeason" DROP CONSTRAINT "_RecipeToSeason_A_fkey";

-- DropForeignKey
ALTER TABLE "_RecipeToSeason" DROP CONSTRAINT "_RecipeToSeason_B_fkey";

-- DropForeignKey
ALTER TABLE "_RecipeToTag" DROP CONSTRAINT "_RecipeToTag_A_fkey";

-- DropForeignKey
ALTER TABLE "_RecipeToTag" DROP CONSTRAINT "_RecipeToTag_B_fkey";

-- AlterTable
ALTER TABLE "_RecipeToRecipeCategory" DROP COLUMN "A",
ADD COLUMN     "A" UUID NOT NULL,
DROP COLUMN "B",
ADD COLUMN     "B" UUID NOT NULL;

-- AlterTable
ALTER TABLE "_RecipeToSeason" DROP COLUMN "A",
ADD COLUMN     "A" UUID NOT NULL,
DROP COLUMN "B",
ADD COLUMN     "B" UUID NOT NULL;

-- AlterTable
ALTER TABLE "_RecipeToTag" DROP COLUMN "A",
ADD COLUMN     "A" UUID NOT NULL,
DROP COLUMN "B",
ADD COLUMN     "B" UUID NOT NULL;

-- DropTable
DROP TABLE "Answer";

-- DropTable
DROP TABLE "ColumnView";

-- DropTable
DROP TABLE "Food";

-- DropTable
DROP TABLE "FoodCategory";

-- DropTable
DROP TABLE "FoodCategoryOnFood";

-- DropTable
DROP TABLE "FoodEmbedding";

-- DropTable
DROP TABLE "FoodNutrient";

-- DropTable
DROP TABLE "FoodPortion";

-- DropTable
DROP TABLE "FoodSearchVector";

-- DropTable
DROP TABLE "ImportInfo";

-- DropTable
DROP TABLE "Language";

-- DropTable
DROP TABLE "LoginLog";

-- DropTable
DROP TABLE "Nutrient";

-- DropTable
DROP TABLE "PasswordResetToken";

-- DropTable
DROP TABLE "Question";

-- DropTable
DROP TABLE "Questionnaire";

-- DropTable
DROP TABLE "QuestionnaireVersion";

-- DropTable
DROP TABLE "Recipe";

-- DropTable
DROP TABLE "RecipeCategory";

-- DropTable
DROP TABLE "RecipeImage";

-- DropTable
DROP TABLE "RecipeIngredient";

-- DropTable
DROP TABLE "RecipeIngredientFoodMatch";

-- DropTable
DROP TABLE "RecipeInstructions";

-- DropTable
DROP TABLE "RecipePart";

-- DropTable
DROP TABLE "RefreshToken";

-- DropTable
DROP TABLE "Season";

-- DropTable
DROP TABLE "Section";

-- DropTable
DROP TABLE "Session";

-- DropTable
DROP TABLE "Submission";

-- DropTable
DROP TABLE "TableViewDefinition";

-- DropTable
DROP TABLE "Tag";

-- DropTable
DROP TABLE "Tenant";

-- DropTable
DROP TABLE "TokenBlacklist";

-- DropTable
DROP TABLE "Translation";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "users" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "email" TEXT NOT NULL,
    "password" TEXT,
    "roles" "Roles"[],
    "google_id" TEXT,
    "google_profile" JSONB,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "auth_refresh_token" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "token" TEXT NOT NULL,
    "user_id" UUID NOT NULL,
    "family_id" TEXT NOT NULL,
    "session_id" TEXT NOT NULL,
    "expires_at" TIMESTAMP(3) NOT NULL,
    "used" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "auth_refresh_token_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "auth_session" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "user_id" UUID NOT NULL,
    "device_info" TEXT,
    "ip_address" TEXT,
    "last_active_at" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "auth_session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "auth_login_log" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "user_id" UUID,
    "success" BOOLEAN NOT NULL,
    "ip_address" TEXT,
    "user_agent" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "auth_login_log_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "auth_password_reset_token" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "token" TEXT NOT NULL,
    "user_id" UUID NOT NULL,
    "expires_at" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "auth_password_reset_token_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "auth_token_blacklist" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "token" TEXT NOT NULL,
    "expires_at" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "auth_token_blacklist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "i18n_languages" (
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "i18n_languages_pkey" PRIMARY KEY ("code")
);

-- CreateTable
CREATE TABLE "i18n_translations" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "entity_type" TEXT NOT NULL,
    "entity_id" TEXT NOT NULL,
    "field" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "language_code" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "i18n_translations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "foods" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "source_id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "scientific_name" TEXT,
    "import_info_id" UUID,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "foods_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "food_search_vectors" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "food_id" UUID NOT NULL,
    "language_code" TEXT NOT NULL,
    "search_vector" tsvector NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "food_search_vectors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "food_embeddings" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "food_id" UUID NOT NULL,
    "language_code" TEXT NOT NULL,
    "embedding_type" TEXT NOT NULL,
    "embedding" vector(384) NOT NULL,
    "model_version" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "food_embeddings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "food_categories" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "code" TEXT,
    "description" TEXT,
    "parent_category_id" UUID,
    "level" INTEGER NOT NULL,
    "source_id" TEXT NOT NULL,
    "import_info_id" UUID,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "food_categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "food_categories_on_food" (
    "food_id" UUID NOT NULL,
    "category_id" UUID NOT NULL,
    "is_primary_category" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "food_categories_on_food_pkey" PRIMARY KEY ("food_id","category_id")
);

-- CreateTable
CREATE TABLE "food_nutrients" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT NOT NULL,
    "unit_name" TEXT NOT NULL,
    "source_id" TEXT NOT NULL,
    "import_info_id" UUID,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "food_nutrients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "food_food_nutrients" (
    "food_id" UUID NOT NULL,
    "nutrient_id" UUID NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "min" DOUBLE PRECISION,
    "median" DOUBLE PRECISION,
    "max" DOUBLE PRECISION,
    "confidence_code" TEXT,
    "source_id" TEXT NOT NULL,
    "import_info_id" UUID,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "food_food_nutrients_pkey" PRIMARY KEY ("food_id","nutrient_id")
);

-- CreateTable
CREATE TABLE "food_portions" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "amount" DOUBLE PRECISION NOT NULL,
    "gram_weight" DOUBLE PRECISION NOT NULL,
    "portion_description" TEXT,
    "source_id" TEXT NOT NULL,
    "food_id" UUID NOT NULL,
    "measure_unit_name" TEXT NOT NULL,
    "import_info_id" UUID,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "food_portions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "import_infos" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "source_version" TEXT NOT NULL,
    "import_date" TIMESTAMP(3) NOT NULL,
    "data_source" "FoodDataSource" NOT NULL,

    CONSTRAINT "import_infos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "recipes" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "title" TEXT NOT NULL,
    "source_id" TEXT,
    "source_url" TEXT,
    "description" TEXT,
    "cooking_time" TEXT,
    "prep_time" TEXT,
    "servings_text" TEXT,
    "servings_min" INTEGER,
    "servings_max" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "recipes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "recipe_images" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "recipe_id" UUID NOT NULL,
    "url" TEXT NOT NULL,
    "alt_text" TEXT,
    "width" INTEGER,
    "height" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "recipe_images_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "recipe_seasons" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "recipe_seasons_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "recipe_tags" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "recipe_tags_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "recipe_parts" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT NOT NULL,
    "recipe_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "recipe_parts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "recipe_instructions" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "recipe_id" UUID NOT NULL,
    "content" TEXT NOT NULL,
    "type" "RecipeInstructionsType" NOT NULL,
    "order" INTEGER NOT NULL,
    "list_index" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "recipe_instructions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "recipe_ingredients" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "recipe_id" UUID NOT NULL,
    "part_id" UUID,
    "food_id" UUID,
    "quantity" DOUBLE PRECISION NOT NULL,
    "quantity_text" TEXT,
    "min_quantity" DOUBLE PRECISION,
    "max_quantity" DOUBLE PRECISION,
    "unit" TEXT NOT NULL,
    "unit_text" TEXT,
    "ingredient_text" TEXT NOT NULL,
    "extra_info" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "recipe_ingredients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "recipe_ingredient_food_matches" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "recipe_ingredient_id" UUID NOT NULL,
    "matched_food_id" UUID NOT NULL,
    "bi_encoder_score" DOUBLE PRECISION NOT NULL,
    "cross_encoder_score" DOUBLE PRECISION,
    "rank" INTEGER NOT NULL,
    "confidence" DOUBLE PRECISION NOT NULL,
    "needs_review" BOOLEAN NOT NULL DEFAULT false,
    "reviewed_by_id" UUID,
    "reviewed_at" TIMESTAMP(3),
    "review_status" "ReviewStatus" NOT NULL DEFAULT 'PENDING',
    "match_quality" "MatchQuality" NOT NULL DEFAULT 'MEDIUM',
    "match_type" "MatchType" NOT NULL DEFAULT 'AUTOMATIC',
    "notes" TEXT,
    "potential_nutritional_impact" DOUBLE PRECISION,
    "nutritional_confidence" DOUBLE PRECISION,
    "substitution_complexity" DOUBLE PRECISION,
    "algorithm_version" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "recipe_ingredient_food_matches_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "recipe_categories" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT NOT NULL,

    CONSTRAINT "recipe_categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "table_view_definitions" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "user_id" TEXT,
    "table_id" TEXT NOT NULL,
    "table_type" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "icon" TEXT,
    "filters" TEXT,
    "sorting" TEXT,
    "is_preset" BOOLEAN NOT NULL DEFAULT false,
    "is_shared" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "table_view_definitions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "table_view_column_views" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "column_id" INTEGER NOT NULL,
    "column_type" TEXT NOT NULL,
    "width" INTEGER NOT NULL,
    "visible" BOOLEAN NOT NULL,
    "name" TEXT NOT NULL,
    "filter" TEXT,
    "table_view_definition_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "table_view_column_views_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tenants" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tenants_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "polls" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "tenant_id" UUID,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "is_public" BOOLEAN NOT NULL DEFAULT false,
    "deleted_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "polls_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "poll_versions" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "questionnaire_id" UUID NOT NULL,
    "version_number" INTEGER NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT false,
    "deleted_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "poll_versions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "poll_sections" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "questionnaire_version_id" UUID NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "order" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "poll_sections_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "poll_questions" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "section_id" UUID NOT NULL,
    "type" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "is_required" BOOLEAN NOT NULL DEFAULT false,
    "order" INTEGER NOT NULL,
    "config" JSONB NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "poll_questions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "poll_submissions" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "questionnaire_id" UUID NOT NULL,
    "questionnaire_version_id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "is_complete" BOOLEAN NOT NULL DEFAULT false,
    "started_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completed_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "poll_submissions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "poll_answers" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "submission_id" UUID NOT NULL,
    "question_id" UUID NOT NULL,
    "value" JSONB NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "poll_answers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_google_id_key" ON "users"("google_id");

-- CreateIndex
CREATE UNIQUE INDEX "auth_refresh_token_token_key" ON "auth_refresh_token"("token");

-- CreateIndex
CREATE UNIQUE INDEX "auth_password_reset_token_token_key" ON "auth_password_reset_token"("token");

-- CreateIndex
CREATE UNIQUE INDEX "auth_token_blacklist_token_key" ON "auth_token_blacklist"("token");

-- CreateIndex
CREATE UNIQUE INDEX "i18n_languages_code_key" ON "i18n_languages"("code");

-- CreateIndex
CREATE INDEX "i18n_translations_entity_type_entity_id_idx" ON "i18n_translations"("entity_type", "entity_id");

-- CreateIndex
CREATE UNIQUE INDEX "i18n_translations_language_code_entity_type_entity_id_field_key" ON "i18n_translations"("language_code", "entity_type", "entity_id", "field");

-- CreateIndex
CREATE UNIQUE INDEX "foods_source_id_key" ON "foods"("source_id");

-- CreateIndex
CREATE INDEX "foods_id_description_idx" ON "foods"("id", "description");

-- CreateIndex
CREATE INDEX "foods_description_idx" ON "foods" USING GIN ("description" gin_trgm_ops);

-- CreateIndex
CREATE INDEX "food_search_vectors_search_vector_idx" ON "food_search_vectors" USING GIN ("search_vector");

-- CreateIndex
CREATE UNIQUE INDEX "food_search_vectors_food_id_language_code_key" ON "food_search_vectors"("food_id", "language_code");

-- CreateIndex
CREATE UNIQUE INDEX "food_embeddings_food_id_language_code_embedding_type_key" ON "food_embeddings"("food_id", "language_code", "embedding_type");

-- CreateIndex
CREATE UNIQUE INDEX "food_categories_code_key" ON "food_categories"("code");

-- CreateIndex
CREATE UNIQUE INDEX "food_categories_description_key" ON "food_categories"("description");

-- CreateIndex
CREATE UNIQUE INDEX "food_categories_source_id_key" ON "food_categories"("source_id");

-- CreateIndex
CREATE INDEX "food_categories_parent_category_id_idx" ON "food_categories"("parent_category_id");

-- CreateIndex
CREATE INDEX "food_categories_level_idx" ON "food_categories"("level");

-- CreateIndex
CREATE INDEX "food_categories_on_food_food_id_idx" ON "food_categories_on_food"("food_id");

-- CreateIndex
CREATE INDEX "food_categories_on_food_category_id_idx" ON "food_categories_on_food"("category_id");

-- CreateIndex
CREATE UNIQUE INDEX "food_nutrients_source_id_key" ON "food_nutrients"("source_id");

-- CreateIndex
CREATE INDEX "food_nutrients_name_idx" ON "food_nutrients"("name");

-- CreateIndex
CREATE INDEX "food_food_nutrients_food_id_idx" ON "food_food_nutrients"("food_id");

-- CreateIndex
CREATE INDEX "food_food_nutrients_nutrient_id_idx" ON "food_food_nutrients"("nutrient_id");

-- CreateIndex
CREATE INDEX "food_food_nutrients_amount_idx" ON "food_food_nutrients"("amount");

-- CreateIndex
CREATE INDEX "food_portions_food_id_idx" ON "food_portions"("food_id");

-- CreateIndex
CREATE UNIQUE INDEX "food_portions_food_id_measure_unit_name_key" ON "food_portions"("food_id", "measure_unit_name");

-- CreateIndex
CREATE INDEX "import_infos_import_date_idx" ON "import_infos"("import_date");

-- CreateIndex
CREATE UNIQUE INDEX "import_infos_data_source_source_version_key" ON "import_infos"("data_source", "source_version");

-- CreateIndex
CREATE UNIQUE INDEX "recipes_title_key" ON "recipes"("title");

-- CreateIndex
CREATE INDEX "recipe_images_recipe_id_idx" ON "recipe_images"("recipe_id");

-- CreateIndex
CREATE UNIQUE INDEX "recipe_seasons_name_key" ON "recipe_seasons"("name");

-- CreateIndex
CREATE UNIQUE INDEX "recipe_tags_name_key" ON "recipe_tags"("name");

-- CreateIndex
CREATE INDEX "recipe_parts_recipe_id_idx" ON "recipe_parts"("recipe_id");

-- CreateIndex
CREATE INDEX "recipe_ingredients_recipe_id_idx" ON "recipe_ingredients"("recipe_id");

-- CreateIndex
CREATE INDEX "recipe_ingredients_part_id_idx" ON "recipe_ingredients"("part_id");

-- CreateIndex
CREATE INDEX "recipe_ingredients_food_id_idx" ON "recipe_ingredients"("food_id");

-- CreateIndex
CREATE INDEX "recipe_ingredient_food_matches_recipe_ingredient_id_idx" ON "recipe_ingredient_food_matches"("recipe_ingredient_id");

-- CreateIndex
CREATE INDEX "recipe_ingredient_food_matches_matched_food_id_idx" ON "recipe_ingredient_food_matches"("matched_food_id");

-- CreateIndex
CREATE INDEX "recipe_ingredient_food_matches_needs_review_idx" ON "recipe_ingredient_food_matches"("needs_review");

-- CreateIndex
CREATE INDEX "recipe_ingredient_food_matches_match_quality_idx" ON "recipe_ingredient_food_matches"("match_quality");

-- CreateIndex
CREATE INDEX "recipe_ingredient_food_matches_match_type_idx" ON "recipe_ingredient_food_matches"("match_type");

-- CreateIndex
CREATE UNIQUE INDEX "recipe_ingredient_food_matches_recipe_ingredient_id_matched_key" ON "recipe_ingredient_food_matches"("recipe_ingredient_id", "matched_food_id");

-- CreateIndex
CREATE UNIQUE INDEX "recipe_categories_name_key" ON "recipe_categories"("name");

-- CreateIndex
CREATE INDEX "table_view_definitions_user_id_idx" ON "table_view_definitions"("user_id");

-- CreateIndex
CREATE INDEX "table_view_definitions_table_type_idx" ON "table_view_definitions"("table_type");

-- CreateIndex
CREATE INDEX "table_view_column_views_table_view_definition_id_idx" ON "table_view_column_views"("table_view_definition_id");

-- CreateIndex
CREATE UNIQUE INDEX "poll_versions_questionnaire_id_version_number_key" ON "poll_versions"("questionnaire_id", "version_number");

-- CreateIndex
CREATE UNIQUE INDEX "_RecipeToRecipeCategory_AB_unique" ON "_RecipeToRecipeCategory"("A", "B");

-- CreateIndex
CREATE INDEX "_RecipeToRecipeCategory_B_index" ON "_RecipeToRecipeCategory"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_RecipeToSeason_AB_unique" ON "_RecipeToSeason"("A", "B");

-- CreateIndex
CREATE INDEX "_RecipeToSeason_B_index" ON "_RecipeToSeason"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_RecipeToTag_AB_unique" ON "_RecipeToTag"("A", "B");

-- CreateIndex
CREATE INDEX "_RecipeToTag_B_index" ON "_RecipeToTag"("B");

-- AddForeignKey
ALTER TABLE "auth_refresh_token" ADD CONSTRAINT "auth_refresh_token_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "auth_session" ADD CONSTRAINT "auth_session_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "auth_login_log" ADD CONSTRAINT "auth_login_log_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "auth_password_reset_token" ADD CONSTRAINT "auth_password_reset_token_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "i18n_translations" ADD CONSTRAINT "i18n_translations_language_code_fkey" FOREIGN KEY ("language_code") REFERENCES "i18n_languages"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "foods" ADD CONSTRAINT "foods_import_info_id_fkey" FOREIGN KEY ("import_info_id") REFERENCES "import_infos"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "food_search_vectors" ADD CONSTRAINT "food_search_vectors_food_id_fkey" FOREIGN KEY ("food_id") REFERENCES "foods"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "food_search_vectors" ADD CONSTRAINT "food_search_vectors_language_code_fkey" FOREIGN KEY ("language_code") REFERENCES "i18n_languages"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "food_embeddings" ADD CONSTRAINT "food_embeddings_food_id_fkey" FOREIGN KEY ("food_id") REFERENCES "foods"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "food_embeddings" ADD CONSTRAINT "food_embeddings_language_code_fkey" FOREIGN KEY ("language_code") REFERENCES "i18n_languages"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "food_categories" ADD CONSTRAINT "food_categories_import_info_id_fkey" FOREIGN KEY ("import_info_id") REFERENCES "import_infos"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "food_categories" ADD CONSTRAINT "food_categories_parent_category_id_fkey" FOREIGN KEY ("parent_category_id") REFERENCES "food_categories"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "food_categories_on_food" ADD CONSTRAINT "food_categories_on_food_food_id_fkey" FOREIGN KEY ("food_id") REFERENCES "foods"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "food_categories_on_food" ADD CONSTRAINT "food_categories_on_food_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "food_categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "food_nutrients" ADD CONSTRAINT "food_nutrients_import_info_id_fkey" FOREIGN KEY ("import_info_id") REFERENCES "import_infos"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "food_food_nutrients" ADD CONSTRAINT "food_food_nutrients_food_id_fkey" FOREIGN KEY ("food_id") REFERENCES "foods"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "food_food_nutrients" ADD CONSTRAINT "food_food_nutrients_nutrient_id_fkey" FOREIGN KEY ("nutrient_id") REFERENCES "food_nutrients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "food_food_nutrients" ADD CONSTRAINT "food_food_nutrients_import_info_id_fkey" FOREIGN KEY ("import_info_id") REFERENCES "import_infos"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "food_portions" ADD CONSTRAINT "food_portions_food_id_fkey" FOREIGN KEY ("food_id") REFERENCES "foods"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "food_portions" ADD CONSTRAINT "food_portions_import_info_id_fkey" FOREIGN KEY ("import_info_id") REFERENCES "import_infos"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "recipe_images" ADD CONSTRAINT "recipe_images_recipe_id_fkey" FOREIGN KEY ("recipe_id") REFERENCES "recipes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "recipe_parts" ADD CONSTRAINT "recipe_parts_recipe_id_fkey" FOREIGN KEY ("recipe_id") REFERENCES "recipes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "recipe_instructions" ADD CONSTRAINT "recipe_instructions_recipe_id_fkey" FOREIGN KEY ("recipe_id") REFERENCES "recipes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "recipe_ingredients" ADD CONSTRAINT "recipe_ingredients_recipe_id_fkey" FOREIGN KEY ("recipe_id") REFERENCES "recipes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "recipe_ingredients" ADD CONSTRAINT "recipe_ingredients_part_id_fkey" FOREIGN KEY ("part_id") REFERENCES "recipe_parts"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "recipe_ingredients" ADD CONSTRAINT "recipe_ingredients_food_id_fkey" FOREIGN KEY ("food_id") REFERENCES "foods"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "recipe_ingredient_food_matches" ADD CONSTRAINT "recipe_ingredient_food_matches_recipe_ingredient_id_fkey" FOREIGN KEY ("recipe_ingredient_id") REFERENCES "recipe_ingredients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "recipe_ingredient_food_matches" ADD CONSTRAINT "recipe_ingredient_food_matches_matched_food_id_fkey" FOREIGN KEY ("matched_food_id") REFERENCES "foods"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "recipe_ingredient_food_matches" ADD CONSTRAINT "recipe_ingredient_food_matches_reviewed_by_id_fkey" FOREIGN KEY ("reviewed_by_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "table_view_column_views" ADD CONSTRAINT "table_view_column_views_table_view_definition_id_fkey" FOREIGN KEY ("table_view_definition_id") REFERENCES "table_view_definitions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "polls" ADD CONSTRAINT "polls_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "poll_versions" ADD CONSTRAINT "poll_versions_questionnaire_id_fkey" FOREIGN KEY ("questionnaire_id") REFERENCES "polls"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "poll_sections" ADD CONSTRAINT "poll_sections_questionnaire_version_id_fkey" FOREIGN KEY ("questionnaire_version_id") REFERENCES "poll_versions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "poll_questions" ADD CONSTRAINT "poll_questions_section_id_fkey" FOREIGN KEY ("section_id") REFERENCES "poll_sections"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "poll_submissions" ADD CONSTRAINT "poll_submissions_questionnaire_id_fkey" FOREIGN KEY ("questionnaire_id") REFERENCES "polls"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "poll_submissions" ADD CONSTRAINT "poll_submissions_questionnaire_version_id_fkey" FOREIGN KEY ("questionnaire_version_id") REFERENCES "poll_versions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "poll_submissions" ADD CONSTRAINT "poll_submissions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "poll_answers" ADD CONSTRAINT "poll_answers_submission_id_fkey" FOREIGN KEY ("submission_id") REFERENCES "poll_submissions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "poll_answers" ADD CONSTRAINT "poll_answers_question_id_fkey" FOREIGN KEY ("question_id") REFERENCES "poll_questions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RecipeToRecipeCategory" ADD CONSTRAINT "_RecipeToRecipeCategory_A_fkey" FOREIGN KEY ("A") REFERENCES "recipes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RecipeToRecipeCategory" ADD CONSTRAINT "_RecipeToRecipeCategory_B_fkey" FOREIGN KEY ("B") REFERENCES "recipe_categories"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RecipeToSeason" ADD CONSTRAINT "_RecipeToSeason_A_fkey" FOREIGN KEY ("A") REFERENCES "recipes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RecipeToSeason" ADD CONSTRAINT "_RecipeToSeason_B_fkey" FOREIGN KEY ("B") REFERENCES "recipe_seasons"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RecipeToTag" ADD CONSTRAINT "_RecipeToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "recipes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RecipeToTag" ADD CONSTRAINT "_RecipeToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "recipe_tags"("id") ON DELETE CASCADE ON UPDATE CASCADE;
