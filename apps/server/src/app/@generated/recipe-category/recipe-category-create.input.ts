import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeCreateNestedManyWithoutCategoriesInput } from '../recipe/recipe-create-nested-many-without-categories.input';

@InputType()
export class RecipeCategoryCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => RecipeCreateNestedManyWithoutCategoriesInput, {nullable:true})
    recipes?: RecipeCreateNestedManyWithoutCategoriesInput;
}
