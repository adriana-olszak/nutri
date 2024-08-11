import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeCreateWithoutPartsInput } from './recipe-create-without-parts.input';
import { Type } from 'class-transformer';
import { RecipeCreateOrConnectWithoutPartsInput } from './recipe-create-or-connect-without-parts.input';
import { Prisma } from '@prisma/client';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';

@InputType()
export class RecipeCreateNestedOneWithoutPartsInput {

    @Field(() => RecipeCreateWithoutPartsInput, {nullable:true})
    @Type(() => RecipeCreateWithoutPartsInput)
    create?: RecipeCreateWithoutPartsInput;

    @Field(() => RecipeCreateOrConnectWithoutPartsInput, {nullable:true})
    @Type(() => RecipeCreateOrConnectWithoutPartsInput)
    connectOrCreate?: RecipeCreateOrConnectWithoutPartsInput;

    @Field(() => RecipeWhereUniqueInput, {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    connect?: Prisma.AtLeast<RecipeWhereUniqueInput, 'id' | 'title'>;
}
