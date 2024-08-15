import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeCreateWithoutInstructionsInput } from './recipe-create-without-instructions.input';
import { Type } from 'class-transformer';
import { RecipeCreateOrConnectWithoutInstructionsInput } from './recipe-create-or-connect-without-instructions.input';
import { Prisma } from '@prisma/client';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';

@InputType()
export class RecipeCreateNestedOneWithoutInstructionsInput {

    @Field(() => RecipeCreateWithoutInstructionsInput, {nullable:true})
    @Type(() => RecipeCreateWithoutInstructionsInput)
    create?: RecipeCreateWithoutInstructionsInput;

    @Field(() => RecipeCreateOrConnectWithoutInstructionsInput, {nullable:true})
    @Type(() => RecipeCreateOrConnectWithoutInstructionsInput)
    connectOrCreate?: RecipeCreateOrConnectWithoutInstructionsInput;

    @Field(() => RecipeWhereUniqueInput, {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    connect?: Prisma.AtLeast<RecipeWhereUniqueInput, 'id' | 'title'>;
}
