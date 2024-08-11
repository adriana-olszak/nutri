import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RecipeImageWhereUniqueInput } from './recipe-image-where-unique.input';
import { Type } from 'class-transformer';
import { RecipeImageUpdateWithoutRecipeInput } from './recipe-image-update-without-recipe.input';

@InputType()
export class RecipeImageUpdateWithWhereUniqueWithoutRecipeInput {

    @Field(() => RecipeImageWhereUniqueInput, {nullable:false})
    @Type(() => RecipeImageWhereUniqueInput)
    where!: Prisma.AtLeast<RecipeImageWhereUniqueInput, 'id'>;

    @Field(() => RecipeImageUpdateWithoutRecipeInput, {nullable:false})
    @Type(() => RecipeImageUpdateWithoutRecipeInput)
    data!: RecipeImageUpdateWithoutRecipeInput;
}
