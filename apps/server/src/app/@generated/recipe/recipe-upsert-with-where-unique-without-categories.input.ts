import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';
import { Type } from 'class-transformer';
import { RecipeUpdateWithoutCategoriesInput } from './recipe-update-without-categories.input';
import { RecipeCreateWithoutCategoriesInput } from './recipe-create-without-categories.input';

@InputType()
export class RecipeUpsertWithWhereUniqueWithoutCategoriesInput {

    @Field(() => RecipeWhereUniqueInput, {nullable:false})
    @Type(() => RecipeWhereUniqueInput)
    where!: Prisma.AtLeast<RecipeWhereUniqueInput, 'id' | 'title'>;

    @Field(() => RecipeUpdateWithoutCategoriesInput, {nullable:false})
    @Type(() => RecipeUpdateWithoutCategoriesInput)
    update!: RecipeUpdateWithoutCategoriesInput;

    @Field(() => RecipeCreateWithoutCategoriesInput, {nullable:false})
    @Type(() => RecipeCreateWithoutCategoriesInput)
    create!: RecipeCreateWithoutCategoriesInput;
}
