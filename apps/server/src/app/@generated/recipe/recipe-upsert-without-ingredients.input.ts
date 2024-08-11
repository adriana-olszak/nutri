import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeUpdateWithoutIngredientsInput } from './recipe-update-without-ingredients.input';
import { Type } from 'class-transformer';
import { RecipeCreateWithoutIngredientsInput } from './recipe-create-without-ingredients.input';
import { RecipeWhereInput } from './recipe-where.input';

@InputType()
export class RecipeUpsertWithoutIngredientsInput {

    @Field(() => RecipeUpdateWithoutIngredientsInput, {nullable:false})
    @Type(() => RecipeUpdateWithoutIngredientsInput)
    update!: RecipeUpdateWithoutIngredientsInput;

    @Field(() => RecipeCreateWithoutIngredientsInput, {nullable:false})
    @Type(() => RecipeCreateWithoutIngredientsInput)
    create!: RecipeCreateWithoutIngredientsInput;

    @Field(() => RecipeWhereInput, {nullable:true})
    @Type(() => RecipeWhereInput)
    where?: RecipeWhereInput;
}
