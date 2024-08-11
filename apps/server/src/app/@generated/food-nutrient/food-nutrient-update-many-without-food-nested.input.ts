import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodNutrientCreateWithoutFoodInput } from './food-nutrient-create-without-food.input';
import { Type } from 'class-transformer';
import { FoodNutrientCreateOrConnectWithoutFoodInput } from './food-nutrient-create-or-connect-without-food.input';
import { FoodNutrientUpsertWithWhereUniqueWithoutFoodInput } from './food-nutrient-upsert-with-where-unique-without-food.input';
import { FoodNutrientCreateManyFoodInputEnvelope } from './food-nutrient-create-many-food-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FoodNutrientWhereUniqueInput } from './food-nutrient-where-unique.input';
import { FoodNutrientUpdateWithWhereUniqueWithoutFoodInput } from './food-nutrient-update-with-where-unique-without-food.input';
import { FoodNutrientUpdateManyWithWhereWithoutFoodInput } from './food-nutrient-update-many-with-where-without-food.input';
import { FoodNutrientScalarWhereInput } from './food-nutrient-scalar-where.input';

@InputType()
export class FoodNutrientUpdateManyWithoutFoodNestedInput {

    @Field(() => [FoodNutrientCreateWithoutFoodInput], {nullable:true})
    @Type(() => FoodNutrientCreateWithoutFoodInput)
    create?: Array<FoodNutrientCreateWithoutFoodInput>;

    @Field(() => [FoodNutrientCreateOrConnectWithoutFoodInput], {nullable:true})
    @Type(() => FoodNutrientCreateOrConnectWithoutFoodInput)
    connectOrCreate?: Array<FoodNutrientCreateOrConnectWithoutFoodInput>;

    @Field(() => [FoodNutrientUpsertWithWhereUniqueWithoutFoodInput], {nullable:true})
    @Type(() => FoodNutrientUpsertWithWhereUniqueWithoutFoodInput)
    upsert?: Array<FoodNutrientUpsertWithWhereUniqueWithoutFoodInput>;

    @Field(() => FoodNutrientCreateManyFoodInputEnvelope, {nullable:true})
    @Type(() => FoodNutrientCreateManyFoodInputEnvelope)
    createMany?: FoodNutrientCreateManyFoodInputEnvelope;

    @Field(() => [FoodNutrientWhereUniqueInput], {nullable:true})
    @Type(() => FoodNutrientWhereUniqueInput)
    set?: Array<Prisma.AtLeast<FoodNutrientWhereUniqueInput, 'id'>>;

    @Field(() => [FoodNutrientWhereUniqueInput], {nullable:true})
    @Type(() => FoodNutrientWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<FoodNutrientWhereUniqueInput, 'id'>>;

    @Field(() => [FoodNutrientWhereUniqueInput], {nullable:true})
    @Type(() => FoodNutrientWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<FoodNutrientWhereUniqueInput, 'id'>>;

    @Field(() => [FoodNutrientWhereUniqueInput], {nullable:true})
    @Type(() => FoodNutrientWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<FoodNutrientWhereUniqueInput, 'id'>>;

    @Field(() => [FoodNutrientUpdateWithWhereUniqueWithoutFoodInput], {nullable:true})
    @Type(() => FoodNutrientUpdateWithWhereUniqueWithoutFoodInput)
    update?: Array<FoodNutrientUpdateWithWhereUniqueWithoutFoodInput>;

    @Field(() => [FoodNutrientUpdateManyWithWhereWithoutFoodInput], {nullable:true})
    @Type(() => FoodNutrientUpdateManyWithWhereWithoutFoodInput)
    updateMany?: Array<FoodNutrientUpdateManyWithWhereWithoutFoodInput>;

    @Field(() => [FoodNutrientScalarWhereInput], {nullable:true})
    @Type(() => FoodNutrientScalarWhereInput)
    deleteMany?: Array<FoodNutrientScalarWhereInput>;
}
