import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';
import { Type } from 'class-transformer';
import { RecipeCreateWithoutCategoriesInput } from './recipe-create-without-categories.input';

@InputType()
export class RecipeCreateOrConnectWithoutCategoriesInput {

    @Field(() => RecipeWhereUniqueInput, {nullable:false})
    @Type(() => RecipeWhereUniqueInput)
    where!: Prisma.AtLeast<RecipeWhereUniqueInput, 'id' | 'title'>;

    @Field(() => RecipeCreateWithoutCategoriesInput, {nullable:false})
    @Type(() => RecipeCreateWithoutCategoriesInput)
    create!: RecipeCreateWithoutCategoriesInput;
}
