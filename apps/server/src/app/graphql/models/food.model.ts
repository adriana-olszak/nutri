import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { FoodNutrient } from './food-nutrient.model';
import { FoodPortion } from './food-portion.model';
import { FoodCategory } from './food-category.model';

@ObjectType()
export class Food {
  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  description!: string;

  @Field(() => String, { nullable: true })
  scientificName!: string | null;

  @Field(() => [FoodNutrient], { nullable: true })
  nutrients?: Array<FoodNutrient>;

  @Field(() => [FoodPortion], { nullable: true })
  portions?: Array<FoodPortion>;

  @Field(() => FoodCategory, { nullable: true })
  category?: FoodCategory;

  @Field(() => Date, { nullable: false })
  createdAt!: Date;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date;
}
