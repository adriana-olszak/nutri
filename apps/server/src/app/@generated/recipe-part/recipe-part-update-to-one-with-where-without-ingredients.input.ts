import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipePartWhereInput } from './recipe-part-where.input';
import { Type } from 'class-transformer';
import { RecipePartUpdateWithoutIngredientsInput } from './recipe-part-update-without-ingredients.input';

@InputType()
export class RecipePartUpdateToOneWithWhereWithoutIngredientsInput {

    @Field(() => RecipePartWhereInput, {nullable:true})
    @Type(() => RecipePartWhereInput)
    where?: RecipePartWhereInput;

    @Field(() => RecipePartUpdateWithoutIngredientsInput, {nullable:false})
    @Type(() => RecipePartUpdateWithoutIngredientsInput)
    data!: RecipePartUpdateWithoutIngredientsInput;
}
