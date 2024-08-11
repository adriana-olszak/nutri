import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeIngredientCreateNestedManyWithoutPartInput } from '../recipe-ingredient/recipe-ingredient-create-nested-many-without-part.input';

@InputType()
export class RecipePartCreateWithoutRecipeInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => RecipeIngredientCreateNestedManyWithoutPartInput, {nullable:true})
    ingredients?: RecipeIngredientCreateNestedManyWithoutPartInput;
}
