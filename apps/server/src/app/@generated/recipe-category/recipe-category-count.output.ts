import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class RecipeCategoryCount {

    @Field(() => Int, {nullable:false})
    recipes?: number;
}
