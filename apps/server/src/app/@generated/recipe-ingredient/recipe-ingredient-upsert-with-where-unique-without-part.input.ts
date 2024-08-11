import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RecipeIngredientWhereUniqueInput } from './recipe-ingredient-where-unique.input';
import { Type } from 'class-transformer';
import { RecipeIngredientUpdateWithoutPartInput } from './recipe-ingredient-update-without-part.input';
import { RecipeIngredientCreateWithoutPartInput } from './recipe-ingredient-create-without-part.input';

@InputType()
export class RecipeIngredientUpsertWithWhereUniqueWithoutPartInput {

    @Field(() => RecipeIngredientWhereUniqueInput, {nullable:false})
    @Type(() => RecipeIngredientWhereUniqueInput)
    where!: Prisma.AtLeast<RecipeIngredientWhereUniqueInput, 'id'>;

    @Field(() => RecipeIngredientUpdateWithoutPartInput, {nullable:false})
    @Type(() => RecipeIngredientUpdateWithoutPartInput)
    update!: RecipeIngredientUpdateWithoutPartInput;

    @Field(() => RecipeIngredientCreateWithoutPartInput, {nullable:false})
    @Type(() => RecipeIngredientCreateWithoutPartInput)
    create!: RecipeIngredientCreateWithoutPartInput;
}
