import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeInstructionsCreateWithoutRecipeInput } from './recipe-instructions-create-without-recipe.input';
import { Type } from 'class-transformer';
import { RecipeInstructionsCreateOrConnectWithoutRecipeInput } from './recipe-instructions-create-or-connect-without-recipe.input';
import { RecipeInstructionsUpsertWithWhereUniqueWithoutRecipeInput } from './recipe-instructions-upsert-with-where-unique-without-recipe.input';
import { RecipeInstructionsCreateManyRecipeInputEnvelope } from './recipe-instructions-create-many-recipe-input-envelope.input';
import { Prisma } from '@prisma/client';
import { RecipeInstructionsWhereUniqueInput } from './recipe-instructions-where-unique.input';
import { RecipeInstructionsUpdateWithWhereUniqueWithoutRecipeInput } from './recipe-instructions-update-with-where-unique-without-recipe.input';
import { RecipeInstructionsUpdateManyWithWhereWithoutRecipeInput } from './recipe-instructions-update-many-with-where-without-recipe.input';
import { RecipeInstructionsScalarWhereInput } from './recipe-instructions-scalar-where.input';

@InputType()
export class RecipeInstructionsUpdateManyWithoutRecipeNestedInput {

    @Field(() => [RecipeInstructionsCreateWithoutRecipeInput], {nullable:true})
    @Type(() => RecipeInstructionsCreateWithoutRecipeInput)
    create?: Array<RecipeInstructionsCreateWithoutRecipeInput>;

    @Field(() => [RecipeInstructionsCreateOrConnectWithoutRecipeInput], {nullable:true})
    @Type(() => RecipeInstructionsCreateOrConnectWithoutRecipeInput)
    connectOrCreate?: Array<RecipeInstructionsCreateOrConnectWithoutRecipeInput>;

    @Field(() => [RecipeInstructionsUpsertWithWhereUniqueWithoutRecipeInput], {nullable:true})
    @Type(() => RecipeInstructionsUpsertWithWhereUniqueWithoutRecipeInput)
    upsert?: Array<RecipeInstructionsUpsertWithWhereUniqueWithoutRecipeInput>;

    @Field(() => RecipeInstructionsCreateManyRecipeInputEnvelope, {nullable:true})
    @Type(() => RecipeInstructionsCreateManyRecipeInputEnvelope)
    createMany?: RecipeInstructionsCreateManyRecipeInputEnvelope;

    @Field(() => [RecipeInstructionsWhereUniqueInput], {nullable:true})
    @Type(() => RecipeInstructionsWhereUniqueInput)
    set?: Array<Prisma.AtLeast<RecipeInstructionsWhereUniqueInput, 'id'>>;

    @Field(() => [RecipeInstructionsWhereUniqueInput], {nullable:true})
    @Type(() => RecipeInstructionsWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<RecipeInstructionsWhereUniqueInput, 'id'>>;

    @Field(() => [RecipeInstructionsWhereUniqueInput], {nullable:true})
    @Type(() => RecipeInstructionsWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<RecipeInstructionsWhereUniqueInput, 'id'>>;

    @Field(() => [RecipeInstructionsWhereUniqueInput], {nullable:true})
    @Type(() => RecipeInstructionsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RecipeInstructionsWhereUniqueInput, 'id'>>;

    @Field(() => [RecipeInstructionsUpdateWithWhereUniqueWithoutRecipeInput], {nullable:true})
    @Type(() => RecipeInstructionsUpdateWithWhereUniqueWithoutRecipeInput)
    update?: Array<RecipeInstructionsUpdateWithWhereUniqueWithoutRecipeInput>;

    @Field(() => [RecipeInstructionsUpdateManyWithWhereWithoutRecipeInput], {nullable:true})
    @Type(() => RecipeInstructionsUpdateManyWithWhereWithoutRecipeInput)
    updateMany?: Array<RecipeInstructionsUpdateManyWithWhereWithoutRecipeInput>;

    @Field(() => [RecipeInstructionsScalarWhereInput], {nullable:true})
    @Type(() => RecipeInstructionsScalarWhereInput)
    deleteMany?: Array<RecipeInstructionsScalarWhereInput>;
}
