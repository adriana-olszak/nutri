import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class FoodPortion {
  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => Float, { nullable: false })
  conversionFactor!: number;

  @Field(() => Float, { nullable: false })
  gramWeight!: number;

  @Field(() => String, { nullable: true })
  portionDescription!: string | null;
}
