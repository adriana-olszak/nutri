import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { RecipeIngredient } from './recipe-ingredient.model';
import { MatchFood } from './match-food.model';
import { MatchManualReview } from './match-manual-review.model';
import { MatchStatus } from '../prisma/match-status.enum';

@ObjectType()
export class Match {

  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => MatchStatus, { nullable: false, defaultValue: 'PENDING_MATCH' })
  status!: keyof typeof MatchStatus;

  @Field(() => String, { nullable: true })
  selectedFoodMatchId!: string | null;

  @Field(() => String)
  ingredientText!: string;

  @Field(() => Date, { nullable: false })
  createdAt!: Date;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date;

  @Field(() => RecipeIngredient, { nullable: false })
  recipeIngredient?: RecipeIngredient;

  @Field(() => MatchFood, { nullable: true })
  selectedFoodMatch?: MatchFood | null;

  @Field(() => [MatchFood], { nullable: true })
  foodMatches?: Array<MatchFood>;

  @Field(() => [MatchManualReview], { nullable: true })
  manualReviews?: Array<MatchManualReview>;

}
