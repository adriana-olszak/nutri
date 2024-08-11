import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeIngredientUncheckedCreateNestedManyWithoutPartInput } from '../recipe-ingredient/recipe-ingredient-unchecked-create-nested-many-without-part.input';

@InputType()
export class RecipePartUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    recipeId!: string;

    @Field(() => RecipeIngredientUncheckedCreateNestedManyWithoutPartInput, {nullable:true})
    ingredients?: RecipeIngredientUncheckedCreateNestedManyWithoutPartInput;
}
