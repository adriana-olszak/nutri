import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class RecipeImage {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    url!: string;

    @Field(() => String, {nullable:true})
    altText!: string | null;

    @Field(() => Int, {nullable:true})
    width!: number | null;

    @Field(() => Int, {nullable:true})
    height!: number | null;
}
