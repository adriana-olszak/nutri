import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RecipePartWhereUniqueInput } from './recipe-part-where-unique.input';
import { Type } from 'class-transformer';
import { RecipePartUpdateWithoutRecipeInput } from './recipe-part-update-without-recipe.input';

@InputType()
export class RecipePartUpdateWithWhereUniqueWithoutRecipeInput {

    @Field(() => RecipePartWhereUniqueInput, {nullable:false})
    @Type(() => RecipePartWhereUniqueInput)
    where!: Prisma.AtLeast<RecipePartWhereUniqueInput, 'id'>;

    @Field(() => RecipePartUpdateWithoutRecipeInput, {nullable:false})
    @Type(() => RecipePartUpdateWithoutRecipeInput)
    data!: RecipePartUpdateWithoutRecipeInput;
}
