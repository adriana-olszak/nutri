import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeIngredientUncheckedCreateNestedManyWithoutPartInput } from '../recipe-ingredient/recipe-ingredient-unchecked-create-nested-many-without-part.input';

@InputType()
export class RecipePartUncheckedCreateWithoutRecipeInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => RecipeIngredientUncheckedCreateNestedManyWithoutPartInput, {nullable:true})
    ingredients?: RecipeIngredientUncheckedCreateNestedManyWithoutPartInput;
}
