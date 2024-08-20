import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class FoodNutrient {
  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  nutrientId!: string;

  @Field(() => Float, { nullable: false })
  amount!: number;

  @Field(() => Float, { nullable: true })
  min!: number | null;

  @Field(() => Float, { nullable: true })
  median!: number | null;

  @Field(() => Float, { nullable: true })
  max!: number | null;

  @Field(() => String, { nullable: false })
  name!: string | null;

  @Field(() => String, { nullable: false })
  unitName!: string | null;
}
