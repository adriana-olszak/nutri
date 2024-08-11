import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeIngredientCreateWithoutPartInput } from './recipe-ingredient-create-without-part.input';
import { Type } from 'class-transformer';
import { RecipeIngredientCreateOrConnectWithoutPartInput } from './recipe-ingredient-create-or-connect-without-part.input';
import { RecipeIngredientUpsertWithWhereUniqueWithoutPartInput } from './recipe-ingredient-upsert-with-where-unique-without-part.input';
import { RecipeIngredientCreateManyPartInputEnvelope } from './recipe-ingredient-create-many-part-input-envelope.input';
import { Prisma } from '@prisma/client';
import { RecipeIngredientWhereUniqueInput } from './recipe-ingredient-where-unique.input';
import { RecipeIngredientUpdateWithWhereUniqueWithoutPartInput } from './recipe-ingredient-update-with-where-unique-without-part.input';
import { RecipeIngredientUpdateManyWithWhereWithoutPartInput } from './recipe-ingredient-update-many-with-where-without-part.input';
import { RecipeIngredientScalarWhereInput } from './recipe-ingredient-scalar-where.input';

@InputType()
export class RecipeIngredientUncheckedUpdateManyWithoutPartNestedInput {

    @Field(() => [RecipeIngredientCreateWithoutPartInput], {nullable:true})
    @Type(() => RecipeIngredientCreateWithoutPartInput)
    create?: Array<RecipeIngredientCreateWithoutPartInput>;

    @Field(() => [RecipeIngredientCreateOrConnectWithoutPartInput], {nullable:true})
    @Type(() => RecipeIngredientCreateOrConnectWithoutPartInput)
    connectOrCreate?: Array<RecipeIngredientCreateOrConnectWithoutPartInput>;

    @Field(() => [RecipeIngredientUpsertWithWhereUniqueWithoutPartInput], {nullable:true})
    @Type(() => RecipeIngredientUpsertWithWhereUniqueWithoutPartInput)
    upsert?: Array<RecipeIngredientUpsertWithWhereUniqueWithoutPartInput>;

    @Field(() => RecipeIngredientCreateManyPartInputEnvelope, {nullable:true})
    @Type(() => RecipeIngredientCreateManyPartInputEnvelope)
    createMany?: RecipeIngredientCreateManyPartInputEnvelope;

    @Field(() => [RecipeIngredientWhereUniqueInput], {nullable:true})
    @Type(() => RecipeIngredientWhereUniqueInput)
    set?: Array<Prisma.AtLeast<RecipeIngredientWhereUniqueInput, 'id'>>;

    @Field(() => [RecipeIngredientWhereUniqueInput], {nullable:true})
    @Type(() => RecipeIngredientWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<RecipeIngredientWhereUniqueInput, 'id'>>;

    @Field(() => [RecipeIngredientWhereUniqueInput], {nullable:true})
    @Type(() => RecipeIngredientWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<RecipeIngredientWhereUniqueInput, 'id'>>;

    @Field(() => [RecipeIngredientWhereUniqueInput], {nullable:true})
    @Type(() => RecipeIngredientWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RecipeIngredientWhereUniqueInput, 'id'>>;

    @Field(() => [RecipeIngredientUpdateWithWhereUniqueWithoutPartInput], {nullable:true})
    @Type(() => RecipeIngredientUpdateWithWhereUniqueWithoutPartInput)
    update?: Array<RecipeIngredientUpdateWithWhereUniqueWithoutPartInput>;

    @Field(() => [RecipeIngredientUpdateManyWithWhereWithoutPartInput], {nullable:true})
    @Type(() => RecipeIngredientUpdateManyWithWhereWithoutPartInput)
    updateMany?: Array<RecipeIngredientUpdateManyWithWhereWithoutPartInput>;

    @Field(() => [RecipeIngredientScalarWhereInput], {nullable:true})
    @Type(() => RecipeIngredientScalarWhereInput)
    deleteMany?: Array<RecipeIngredientScalarWhereInput>;
}
