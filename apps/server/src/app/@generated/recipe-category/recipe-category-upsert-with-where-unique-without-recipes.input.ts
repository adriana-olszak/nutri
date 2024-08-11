import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RecipeCategoryWhereUniqueInput } from './recipe-category-where-unique.input';
import { Type } from 'class-transformer';
import { RecipeCategoryUpdateWithoutRecipesInput } from './recipe-category-update-without-recipes.input';
import { RecipeCategoryCreateWithoutRecipesInput } from './recipe-category-create-without-recipes.input';

@InputType()
export class RecipeCategoryUpsertWithWhereUniqueWithoutRecipesInput {

    @Field(() => RecipeCategoryWhereUniqueInput, {nullable:false})
    @Type(() => RecipeCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<RecipeCategoryWhereUniqueInput, 'id' | 'name'>;

    @Field(() => RecipeCategoryUpdateWithoutRecipesInput, {nullable:false})
    @Type(() => RecipeCategoryUpdateWithoutRecipesInput)
    update!: RecipeCategoryUpdateWithoutRecipesInput;

    @Field(() => RecipeCategoryCreateWithoutRecipesInput, {nullable:false})
    @Type(() => RecipeCategoryCreateWithoutRecipesInput)
    create!: RecipeCategoryCreateWithoutRecipesInput;
}
