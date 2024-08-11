import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';
import { Type } from 'class-transformer';
import { RecipeUpdateWithoutCategoriesInput } from './recipe-update-without-categories.input';

@InputType()
export class RecipeUpdateWithWhereUniqueWithoutCategoriesInput {

    @Field(() => RecipeWhereUniqueInput, {nullable:false})
    @Type(() => RecipeWhereUniqueInput)
    where!: Prisma.AtLeast<RecipeWhereUniqueInput, 'id' | 'title'>;

    @Field(() => RecipeUpdateWithoutCategoriesInput, {nullable:false})
    @Type(() => RecipeUpdateWithoutCategoriesInput)
    data!: RecipeUpdateWithoutCategoriesInput;
}
