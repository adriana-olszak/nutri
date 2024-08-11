import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeCreateNestedOneWithoutPartsInput } from '../recipe/recipe-create-nested-one-without-parts.input';

@InputType()
export class RecipePartCreateWithoutIngredientsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => RecipeCreateNestedOneWithoutPartsInput, {nullable:false})
    recipe!: RecipeCreateNestedOneWithoutPartsInput;
}
