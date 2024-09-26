import { registerEnumType } from "@nestjs/graphql";

export enum TableViewTypeEnum {
  MANUAL_REVIEWS = "MANUAL_REVIEWS",
  QUESTIONNAIRES = "QUESTIONNAIRES",
  RECIPES = "RECIPES",
  FOODS = "FOODS",
}

registerEnumType(TableViewTypeEnum, {
  name: 'TableViewType',
});
