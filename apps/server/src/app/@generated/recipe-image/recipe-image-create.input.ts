import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { RecipeCreateNestedOneWithoutImagesInput } from '../recipe/recipe-create-nested-one-without-images.input';

@InputType()
export class RecipeImageCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    url!: string;

    @Field(() => String, {nullable:true})
    altText?: string;

    @Field(() => Int, {nullable:true})
    width?: number;

    @Field(() => Int, {nullable:true})
    height?: number;

    @Field(() => RecipeCreateNestedOneWithoutImagesInput, {nullable:false})
    recipe!: RecipeCreateNestedOneWithoutImagesInput;
}
