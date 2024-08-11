import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeImageCreateWithoutRecipeInput } from './recipe-image-create-without-recipe.input';
import { Type } from 'class-transformer';
import { RecipeImageCreateOrConnectWithoutRecipeInput } from './recipe-image-create-or-connect-without-recipe.input';
import { RecipeImageUpsertWithWhereUniqueWithoutRecipeInput } from './recipe-image-upsert-with-where-unique-without-recipe.input';
import { RecipeImageCreateManyRecipeInputEnvelope } from './recipe-image-create-many-recipe-input-envelope.input';
import { Prisma } from '@prisma/client';
import { RecipeImageWhereUniqueInput } from './recipe-image-where-unique.input';
import { RecipeImageUpdateWithWhereUniqueWithoutRecipeInput } from './recipe-image-update-with-where-unique-without-recipe.input';
import { RecipeImageUpdateManyWithWhereWithoutRecipeInput } from './recipe-image-update-many-with-where-without-recipe.input';
import { RecipeImageScalarWhereInput } from './recipe-image-scalar-where.input';

@InputType()
export class RecipeImageUpdateManyWithoutRecipeNestedInput {

    @Field(() => [RecipeImageCreateWithoutRecipeInput], {nullable:true})
    @Type(() => RecipeImageCreateWithoutRecipeInput)
    create?: Array<RecipeImageCreateWithoutRecipeInput>;

    @Field(() => [RecipeImageCreateOrConnectWithoutRecipeInput], {nullable:true})
    @Type(() => RecipeImageCreateOrConnectWithoutRecipeInput)
    connectOrCreate?: Array<RecipeImageCreateOrConnectWithoutRecipeInput>;

    @Field(() => [RecipeImageUpsertWithWhereUniqueWithoutRecipeInput], {nullable:true})
    @Type(() => RecipeImageUpsertWithWhereUniqueWithoutRecipeInput)
    upsert?: Array<RecipeImageUpsertWithWhereUniqueWithoutRecipeInput>;

    @Field(() => RecipeImageCreateManyRecipeInputEnvelope, {nullable:true})
    @Type(() => RecipeImageCreateManyRecipeInputEnvelope)
    createMany?: RecipeImageCreateManyRecipeInputEnvelope;

    @Field(() => [RecipeImageWhereUniqueInput], {nullable:true})
    @Type(() => RecipeImageWhereUniqueInput)
    set?: Array<Prisma.AtLeast<RecipeImageWhereUniqueInput, 'id'>>;

    @Field(() => [RecipeImageWhereUniqueInput], {nullable:true})
    @Type(() => RecipeImageWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<RecipeImageWhereUniqueInput, 'id'>>;

    @Field(() => [RecipeImageWhereUniqueInput], {nullable:true})
    @Type(() => RecipeImageWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<RecipeImageWhereUniqueInput, 'id'>>;

    @Field(() => [RecipeImageWhereUniqueInput], {nullable:true})
    @Type(() => RecipeImageWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RecipeImageWhereUniqueInput, 'id'>>;

    @Field(() => [RecipeImageUpdateWithWhereUniqueWithoutRecipeInput], {nullable:true})
    @Type(() => RecipeImageUpdateWithWhereUniqueWithoutRecipeInput)
    update?: Array<RecipeImageUpdateWithWhereUniqueWithoutRecipeInput>;

    @Field(() => [RecipeImageUpdateManyWithWhereWithoutRecipeInput], {nullable:true})
    @Type(() => RecipeImageUpdateManyWithWhereWithoutRecipeInput)
    updateMany?: Array<RecipeImageUpdateManyWithWhereWithoutRecipeInput>;

    @Field(() => [RecipeImageScalarWhereInput], {nullable:true})
    @Type(() => RecipeImageScalarWhereInput)
    deleteMany?: Array<RecipeImageScalarWhereInput>;
}
