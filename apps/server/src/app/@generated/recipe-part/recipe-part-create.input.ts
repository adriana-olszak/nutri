import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeCreateNestedOneWithoutPartsInput } from '../recipe/recipe-create-nested-one-without-parts.input';
import { RecipeIngredientCreateNestedManyWithoutPartInput } from '../recipe-ingredient/recipe-ingredient-create-nested-many-without-part.input';

@InputType()
export class RecipePartCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => RecipeCreateNestedOneWithoutPartsInput, {nullable:false})
    recipe!: RecipeCreateNestedOneWithoutPartsInput;

    @Field(() => RecipeIngredientCreateNestedManyWithoutPartInput, {nullable:true})
    ingredients?: RecipeIngredientCreateNestedManyWithoutPartInput;
}
