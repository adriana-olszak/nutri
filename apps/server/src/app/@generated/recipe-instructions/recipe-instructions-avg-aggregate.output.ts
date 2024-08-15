import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class RecipeInstructionsAvgAggregate {

    @Field(() => Float, {nullable:true})
    order?: number;

    @Field(() => Float, {nullable:true})
    listIndex?: number;
}
