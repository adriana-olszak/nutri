import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeCreateWithoutCategoriesInput } from './recipe-create-without-categories.input';
import { Type } from 'class-transformer';
import { RecipeCreateOrConnectWithoutCategoriesInput } from './recipe-create-or-connect-without-categories.input';
import { Prisma } from '@prisma/client';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';

@InputType()
export class RecipeUncheckedCreateNestedManyWithoutCategoriesInput {

    @Field(() => [RecipeCreateWithoutCategoriesInput], {nullable:true})
    @Type(() => RecipeCreateWithoutCategoriesInput)
    create?: Array<RecipeCreateWithoutCategoriesInput>;

    @Field(() => [RecipeCreateOrConnectWithoutCategoriesInput], {nullable:true})
    @Type(() => RecipeCreateOrConnectWithoutCategoriesInput)
    connectOrCreate?: Array<RecipeCreateOrConnectWithoutCategoriesInput>;

    @Field(() => [RecipeWhereUniqueInput], {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RecipeWhereUniqueInput, 'id' | 'title'>>;
}
