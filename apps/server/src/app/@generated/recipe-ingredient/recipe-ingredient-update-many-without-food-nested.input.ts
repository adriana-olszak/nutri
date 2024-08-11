import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeIngredientCreateWithoutFoodInput } from './recipe-ingredient-create-without-food.input';
import { Type } from 'class-transformer';
import { RecipeIngredientCreateOrConnectWithoutFoodInput } from './recipe-ingredient-create-or-connect-without-food.input';
import { RecipeIngredientUpsertWithWhereUniqueWithoutFoodInput } from './recipe-ingredient-upsert-with-where-unique-without-food.input';
import { RecipeIngredientCreateManyFoodInputEnvelope } from './recipe-ingredient-create-many-food-input-envelope.input';
import { Prisma } from '@prisma/client';
import { RecipeIngredientWhereUniqueInput } from './recipe-ingredient-where-unique.input';
import { RecipeIngredientUpdateWithWhereUniqueWithoutFoodInput } from './recipe-ingredient-update-with-where-unique-without-food.input';
import { RecipeIngredientUpdateManyWithWhereWithoutFoodInput } from './recipe-ingredient-update-many-with-where-without-food.input';
import { RecipeIngredientScalarWhereInput } from './recipe-ingredient-scalar-where.input';

@InputType()
export class RecipeIngredientUpdateManyWithoutFoodNestedInput {

    @Field(() => [RecipeIngredientCreateWithoutFoodInput], {nullable:true})
    @Type(() => RecipeIngredientCreateWithoutFoodInput)
    create?: Array<RecipeIngredientCreateWithoutFoodInput>;

    @Field(() => [RecipeIngredientCreateOrConnectWithoutFoodInput], {nullable:true})
    @Type(() => RecipeIngredientCreateOrConnectWithoutFoodInput)
    connectOrCreate?: Array<RecipeIngredientCreateOrConnectWithoutFoodInput>;

    @Field(() => [RecipeIngredientUpsertWithWhereUniqueWithoutFoodInput], {nullable:true})
    @Type(() => RecipeIngredientUpsertWithWhereUniqueWithoutFoodInput)
    upsert?: Array<RecipeIngredientUpsertWithWhereUniqueWithoutFoodInput>;

    @Field(() => RecipeIngredientCreateManyFoodInputEnvelope, {nullable:true})
    @Type(() => RecipeIngredientCreateManyFoodInputEnvelope)
    createMany?: RecipeIngredientCreateManyFoodInputEnvelope;

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

    @Field(() => [RecipeIngredientUpdateWithWhereUniqueWithoutFoodInput], {nullable:true})
    @Type(() => RecipeIngredientUpdateWithWhereUniqueWithoutFoodInput)
    update?: Array<RecipeIngredientUpdateWithWhereUniqueWithoutFoodInput>;

    @Field(() => [RecipeIngredientUpdateManyWithWhereWithoutFoodInput], {nullable:true})
    @Type(() => RecipeIngredientUpdateManyWithWhereWithoutFoodInput)
    updateMany?: Array<RecipeIngredientUpdateManyWithWhereWithoutFoodInput>;

    @Field(() => [RecipeIngredientScalarWhereInput], {nullable:true})
    @Type(() => RecipeIngredientScalarWhereInput)
    deleteMany?: Array<RecipeIngredientScalarWhereInput>;
}
