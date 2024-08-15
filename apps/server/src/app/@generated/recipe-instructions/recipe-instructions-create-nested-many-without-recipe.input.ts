import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeInstructionsCreateWithoutRecipeInput } from './recipe-instructions-create-without-recipe.input';
import { Type } from 'class-transformer';
import { RecipeInstructionsCreateOrConnectWithoutRecipeInput } from './recipe-instructions-create-or-connect-without-recipe.input';
import { RecipeInstructionsCreateManyRecipeInputEnvelope } from './recipe-instructions-create-many-recipe-input-envelope.input';
import { Prisma } from '@prisma/client';
import { RecipeInstructionsWhereUniqueInput } from './recipe-instructions-where-unique.input';

@InputType()
export class RecipeInstructionsCreateNestedManyWithoutRecipeInput {

    @Field(() => [RecipeInstructionsCreateWithoutRecipeInput], {nullable:true})
    @Type(() => RecipeInstructionsCreateWithoutRecipeInput)
    create?: Array<RecipeInstructionsCreateWithoutRecipeInput>;

    @Field(() => [RecipeInstructionsCreateOrConnectWithoutRecipeInput], {nullable:true})
    @Type(() => RecipeInstructionsCreateOrConnectWithoutRecipeInput)
    connectOrCreate?: Array<RecipeInstructionsCreateOrConnectWithoutRecipeInput>;

    @Field(() => RecipeInstructionsCreateManyRecipeInputEnvelope, {nullable:true})
    @Type(() => RecipeInstructionsCreateManyRecipeInputEnvelope)
    createMany?: RecipeInstructionsCreateManyRecipeInputEnvelope;

    @Field(() => [RecipeInstructionsWhereUniqueInput], {nullable:true})
    @Type(() => RecipeInstructionsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RecipeInstructionsWhereUniqueInput, 'id'>>;
}
