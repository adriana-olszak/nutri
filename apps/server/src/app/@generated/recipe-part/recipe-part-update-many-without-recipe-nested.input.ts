import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipePartCreateWithoutRecipeInput } from './recipe-part-create-without-recipe.input';
import { Type } from 'class-transformer';
import { RecipePartCreateOrConnectWithoutRecipeInput } from './recipe-part-create-or-connect-without-recipe.input';
import { RecipePartUpsertWithWhereUniqueWithoutRecipeInput } from './recipe-part-upsert-with-where-unique-without-recipe.input';
import { RecipePartCreateManyRecipeInputEnvelope } from './recipe-part-create-many-recipe-input-envelope.input';
import { Prisma } from '@prisma/client';
import { RecipePartWhereUniqueInput } from './recipe-part-where-unique.input';
import { RecipePartUpdateWithWhereUniqueWithoutRecipeInput } from './recipe-part-update-with-where-unique-without-recipe.input';
import { RecipePartUpdateManyWithWhereWithoutRecipeInput } from './recipe-part-update-many-with-where-without-recipe.input';
import { RecipePartScalarWhereInput } from './recipe-part-scalar-where.input';

@InputType()
export class RecipePartUpdateManyWithoutRecipeNestedInput {

    @Field(() => [RecipePartCreateWithoutRecipeInput], {nullable:true})
    @Type(() => RecipePartCreateWithoutRecipeInput)
    create?: Array<RecipePartCreateWithoutRecipeInput>;

    @Field(() => [RecipePartCreateOrConnectWithoutRecipeInput], {nullable:true})
    @Type(() => RecipePartCreateOrConnectWithoutRecipeInput)
    connectOrCreate?: Array<RecipePartCreateOrConnectWithoutRecipeInput>;

    @Field(() => [RecipePartUpsertWithWhereUniqueWithoutRecipeInput], {nullable:true})
    @Type(() => RecipePartUpsertWithWhereUniqueWithoutRecipeInput)
    upsert?: Array<RecipePartUpsertWithWhereUniqueWithoutRecipeInput>;

    @Field(() => RecipePartCreateManyRecipeInputEnvelope, {nullable:true})
    @Type(() => RecipePartCreateManyRecipeInputEnvelope)
    createMany?: RecipePartCreateManyRecipeInputEnvelope;

    @Field(() => [RecipePartWhereUniqueInput], {nullable:true})
    @Type(() => RecipePartWhereUniqueInput)
    set?: Array<Prisma.AtLeast<RecipePartWhereUniqueInput, 'id'>>;

    @Field(() => [RecipePartWhereUniqueInput], {nullable:true})
    @Type(() => RecipePartWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<RecipePartWhereUniqueInput, 'id'>>;

    @Field(() => [RecipePartWhereUniqueInput], {nullable:true})
    @Type(() => RecipePartWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<RecipePartWhereUniqueInput, 'id'>>;

    @Field(() => [RecipePartWhereUniqueInput], {nullable:true})
    @Type(() => RecipePartWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RecipePartWhereUniqueInput, 'id'>>;

    @Field(() => [RecipePartUpdateWithWhereUniqueWithoutRecipeInput], {nullable:true})
    @Type(() => RecipePartUpdateWithWhereUniqueWithoutRecipeInput)
    update?: Array<RecipePartUpdateWithWhereUniqueWithoutRecipeInput>;

    @Field(() => [RecipePartUpdateManyWithWhereWithoutRecipeInput], {nullable:true})
    @Type(() => RecipePartUpdateManyWithWhereWithoutRecipeInput)
    updateMany?: Array<RecipePartUpdateManyWithWhereWithoutRecipeInput>;

    @Field(() => [RecipePartScalarWhereInput], {nullable:true})
    @Type(() => RecipePartScalarWhereInput)
    deleteMany?: Array<RecipePartScalarWhereInput>;
}
