// This file is generated automatically. Do not edit it manually.
import { Prisma } from "@prisma/client";

export type DefaultFields = {
  readonly BrandedFood?: Prisma.BrandedFoodSelect;
  readonly Food?: Prisma.FoodSelect;
  readonly FoodCategory?: Prisma.FoodCategorySelect;
  readonly FoodCategoryOnFood?: Prisma.FoodCategoryOnFoodSelect;
  readonly FoodNutrient?: Prisma.FoodNutrientSelect;
  readonly FoodPortion?: Prisma.FoodPortionSelect;
  readonly FoodSearchVector?: Prisma.FoodSearchVectorSelect;
  readonly ImportInfo?: Prisma.ImportInfoSelect;
  readonly Language?: Prisma.LanguageSelect;
  readonly LoginLog?: Prisma.LoginLogSelect;
  readonly MeasureUnit?: Prisma.MeasureUnitSelect;
  readonly Nutrient?: Prisma.NutrientSelect;
  readonly PasswordResetToken?: Prisma.PasswordResetTokenSelect;
  readonly Recipe?: Prisma.RecipeSelect;
  readonly RecipeCategory?: Prisma.RecipeCategorySelect;
  readonly RecipeImage?: Prisma.RecipeImageSelect;
  readonly RecipeIngredient?: Prisma.RecipeIngredientSelect;
  readonly RecipePart?: Prisma.RecipePartSelect;
  readonly RefreshToken?: Prisma.RefreshTokenSelect;
  readonly Season?: Prisma.SeasonSelect;
  readonly Session?: Prisma.SessionSelect;
  readonly Tag?: Prisma.TagSelect;
  readonly TokenBlacklist?: Prisma.TokenBlacklistSelect;
  readonly Translation?: Prisma.TranslationSelect;
  readonly User?: Prisma.UserSelect;
};

type WithFuncSelect<T> = {
  [P in keyof T]?: T[P] | ((select: T[P]) => T[P]);
};

export type PalDefaultFields = WithFuncSelect<DefaultFields>;
