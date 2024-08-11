import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class FoodCategorySumAggregate {

    @Field(() => Int, {nullable:true})
    level?: number;
}
