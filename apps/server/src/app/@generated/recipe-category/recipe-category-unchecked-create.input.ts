import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeUncheckedCreateNestedManyWithoutCategoriesInput } from '../recipe/recipe-unchecked-create-nested-many-without-categories.input';

@InputType()
export class RecipeCategoryUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => RecipeUncheckedCreateNestedManyWithoutCategoriesInput, {nullable:true})
    recipes?: RecipeUncheckedCreateNestedManyWithoutCategoriesInput;
}
