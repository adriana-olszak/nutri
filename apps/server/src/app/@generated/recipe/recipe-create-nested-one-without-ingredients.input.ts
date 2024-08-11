import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeCreateWithoutIngredientsInput } from './recipe-create-without-ingredients.input';
import { Type } from 'class-transformer';
import { RecipeCreateOrConnectWithoutIngredientsInput } from './recipe-create-or-connect-without-ingredients.input';
import { Prisma } from '@prisma/client';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';

@InputType()
export class RecipeCreateNestedOneWithoutIngredientsInput {

    @Field(() => RecipeCreateWithoutIngredientsInput, {nullable:true})
    @Type(() => RecipeCreateWithoutIngredientsInput)
    create?: RecipeCreateWithoutIngredientsInput;

    @Field(() => RecipeCreateOrConnectWithoutIngredientsInput, {nullable:true})
    @Type(() => RecipeCreateOrConnectWithoutIngredientsInput)
    connectOrCreate?: RecipeCreateOrConnectWithoutIngredientsInput;

    @Field(() => RecipeWhereUniqueInput, {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    connect?: Prisma.AtLeast<RecipeWhereUniqueInput, 'id' | 'title'>;
}
