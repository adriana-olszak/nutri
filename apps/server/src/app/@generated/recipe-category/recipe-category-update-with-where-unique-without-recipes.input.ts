import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RecipeCategoryWhereUniqueInput } from './recipe-category-where-unique.input';
import { Type } from 'class-transformer';
import { RecipeCategoryUpdateWithoutRecipesInput } from './recipe-category-update-without-recipes.input';

@InputType()
export class RecipeCategoryUpdateWithWhereUniqueWithoutRecipesInput {

    @Field(() => RecipeCategoryWhereUniqueInput, {nullable:false})
    @Type(() => RecipeCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<RecipeCategoryWhereUniqueInput, 'id' | 'name'>;

    @Field(() => RecipeCategoryUpdateWithoutRecipesInput, {nullable:false})
    @Type(() => RecipeCategoryUpdateWithoutRecipesInput)
    data!: RecipeCategoryUpdateWithoutRecipesInput;
}
