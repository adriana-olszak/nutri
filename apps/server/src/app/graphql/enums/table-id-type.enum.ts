import { registerEnumType } from "@nestjs/graphql";

export enum TableIdTypeEnum {
  MANUAL_REVIEW_MATCHES = "MANUAL_REVIEW_MATCHES",
  MANUAL_REVIEW_FOOD_MATCHES = "MANUAL_REVIEW_FOOD_MATCHES",
  QUESTIONNAIRES = "QUESTIONNAIRES",
  RECIPES = "RECIPES",
  FOODS = "FOODS",
}
registerEnumType(TableIdTypeEnum, {
  name: 'TableIdType',
});
