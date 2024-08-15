import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class RecipeInstructionsSumAggregate {

    @Field(() => Int, {nullable:true})
    order?: number;

    @Field(() => Int, {nullable:true})
    listIndex?: number;
}
