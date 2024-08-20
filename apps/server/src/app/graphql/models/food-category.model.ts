import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';

@ObjectType()
export class FoodCategory {

  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: true })
  code!: string | null;

  @Field(() => String, { nullable: true })
  description!: string | null;
}
