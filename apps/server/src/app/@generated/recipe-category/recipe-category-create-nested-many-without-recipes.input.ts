import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeCategoryCreateWithoutRecipesInput } from './recipe-category-create-without-recipes.input';
import { Type } from 'class-transformer';
import { RecipeCategoryCreateOrConnectWithoutRecipesInput } from './recipe-category-create-or-connect-without-recipes.input';
import { Prisma } from '@prisma/client';
import { RecipeCategoryWhereUniqueInput } from './recipe-category-where-unique.input';

@InputType()
export class RecipeCategoryCreateNestedManyWithoutRecipesInput {

    @Field(() => [RecipeCategoryCreateWithoutRecipesInput], {nullable:true})
    @Type(() => RecipeCategoryCreateWithoutRecipesInput)
    create?: Array<RecipeCategoryCreateWithoutRecipesInput>;

    @Field(() => [RecipeCategoryCreateOrConnectWithoutRecipesInput], {nullable:true})
    @Type(() => RecipeCategoryCreateOrConnectWithoutRecipesInput)
    connectOrCreate?: Array<RecipeCategoryCreateOrConnectWithoutRecipesInput>;

    @Field(() => [RecipeCategoryWhereUniqueInput], {nullable:true})
    @Type(() => RecipeCategoryWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RecipeCategoryWhereUniqueInput, 'id' | 'name'>>;
}
