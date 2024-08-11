import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipePartUpdateWithoutIngredientsInput } from './recipe-part-update-without-ingredients.input';
import { Type } from 'class-transformer';
import { RecipePartCreateWithoutIngredientsInput } from './recipe-part-create-without-ingredients.input';
import { RecipePartWhereInput } from './recipe-part-where.input';

@InputType()
export class RecipePartUpsertWithoutIngredientsInput {

    @Field(() => RecipePartUpdateWithoutIngredientsInput, {nullable:false})
    @Type(() => RecipePartUpdateWithoutIngredientsInput)
    update!: RecipePartUpdateWithoutIngredientsInput;

    @Field(() => RecipePartCreateWithoutIngredientsInput, {nullable:false})
    @Type(() => RecipePartCreateWithoutIngredientsInput)
    create!: RecipePartCreateWithoutIngredientsInput;

    @Field(() => RecipePartWhereInput, {nullable:true})
    @Type(() => RecipePartWhereInput)
    where?: RecipePartWhereInput;
}
