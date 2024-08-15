import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeCreateWithoutInstructionsInput } from './recipe-create-without-instructions.input';
import { Type } from 'class-transformer';
import { RecipeCreateOrConnectWithoutInstructionsInput } from './recipe-create-or-connect-without-instructions.input';
import { RecipeUpsertWithoutInstructionsInput } from './recipe-upsert-without-instructions.input';
import { Prisma } from '@prisma/client';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';
import { RecipeUpdateToOneWithWhereWithoutInstructionsInput } from './recipe-update-to-one-with-where-without-instructions.input';

@InputType()
export class RecipeUpdateOneRequiredWithoutInstructionsNestedInput {

    @Field(() => RecipeCreateWithoutInstructionsInput, {nullable:true})
    @Type(() => RecipeCreateWithoutInstructionsInput)
    create?: RecipeCreateWithoutInstructionsInput;

    @Field(() => RecipeCreateOrConnectWithoutInstructionsInput, {nullable:true})
    @Type(() => RecipeCreateOrConnectWithoutInstructionsInput)
    connectOrCreate?: RecipeCreateOrConnectWithoutInstructionsInput;

    @Field(() => RecipeUpsertWithoutInstructionsInput, {nullable:true})
    @Type(() => RecipeUpsertWithoutInstructionsInput)
    upsert?: RecipeUpsertWithoutInstructionsInput;

    @Field(() => RecipeWhereUniqueInput, {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    connect?: Prisma.AtLeast<RecipeWhereUniqueInput, 'id' | 'title'>;

    @Field(() => RecipeUpdateToOneWithWhereWithoutInstructionsInput, {nullable:true})
    @Type(() => RecipeUpdateToOneWithWhereWithoutInstructionsInput)
    update?: RecipeUpdateToOneWithWhereWithoutInstructionsInput;
}
