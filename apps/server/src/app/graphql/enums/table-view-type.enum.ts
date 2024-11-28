import { registerEnumType } from "@nestjs/graphql";

export enum TableViewTypeEnum {
  MANUAL_REVIEWS = "MANUAL_REVIEWS",
  POLLS = "POLLS",
  PATIENTS = "PATIENTS",
  RECIPES = "RECIPES",
  INGREDIENTS = "INGREDIENTS",
  MEAL_PLANS = "MEAL_PLANS",
  SHOPPING_LISTS = "SHOPPING_LISTS",
}

registerEnumType(TableViewTypeEnum, {
  name: 'TableViewType',
});
