import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class RecipeIngredientSumAggregate {

    @Field(() => Float, {nullable:true})
    quantity?: number;

    @Field(() => Float, {nullable:true})
    minQuantity?: number;

    @Field(() => Float, {nullable:true})
    maxQuantity?: number;
}
