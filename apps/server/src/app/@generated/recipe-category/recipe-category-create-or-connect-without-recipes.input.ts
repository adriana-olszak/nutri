import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RecipeCategoryWhereUniqueInput } from './recipe-category-where-unique.input';
import { Type } from 'class-transformer';
import { RecipeCategoryCreateWithoutRecipesInput } from './recipe-category-create-without-recipes.input';

@InputType()
export class RecipeCategoryCreateOrConnectWithoutRecipesInput {

    @Field(() => RecipeCategoryWhereUniqueInput, {nullable:false})
    @Type(() => RecipeCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<RecipeCategoryWhereUniqueInput, 'id' | 'name'>;

    @Field(() => RecipeCategoryCreateWithoutRecipesInput, {nullable:false})
    @Type(() => RecipeCategoryCreateWithoutRecipesInput)
    create!: RecipeCategoryCreateWithoutRecipesInput;
}
