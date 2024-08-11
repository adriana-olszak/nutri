import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RecipeIngredientWhereUniqueInput } from './recipe-ingredient-where-unique.input';
import { Type } from 'class-transformer';
import { RecipeIngredientUpdateWithoutPartInput } from './recipe-ingredient-update-without-part.input';

@InputType()
export class RecipeIngredientUpdateWithWhereUniqueWithoutPartInput {

    @Field(() => RecipeIngredientWhereUniqueInput, {nullable:false})
    @Type(() => RecipeIngredientWhereUniqueInput)
    where!: Prisma.AtLeast<RecipeIngredientWhereUniqueInput, 'id'>;

    @Field(() => RecipeIngredientUpdateWithoutPartInput, {nullable:false})
    @Type(() => RecipeIngredientUpdateWithoutPartInput)
    data!: RecipeIngredientUpdateWithoutPartInput;
}
