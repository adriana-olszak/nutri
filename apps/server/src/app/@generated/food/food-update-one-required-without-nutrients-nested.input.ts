import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodCreateWithoutNutrientsInput } from './food-create-without-nutrients.input';
import { Type } from 'class-transformer';
import { FoodCreateOrConnectWithoutNutrientsInput } from './food-create-or-connect-without-nutrients.input';
import { FoodUpsertWithoutNutrientsInput } from './food-upsert-without-nutrients.input';
import { Prisma } from '@prisma/client';
import { FoodWhereUniqueInput } from './food-where-unique.input';
import { FoodUpdateToOneWithWhereWithoutNutrientsInput } from './food-update-to-one-with-where-without-nutrients.input';

@InputType()
export class FoodUpdateOneRequiredWithoutNutrientsNestedInput {

    @Field(() => FoodCreateWithoutNutrientsInput, {nullable:true})
    @Type(() => FoodCreateWithoutNutrientsInput)
    create?: FoodCreateWithoutNutrientsInput;

    @Field(() => FoodCreateOrConnectWithoutNutrientsInput, {nullable:true})
    @Type(() => FoodCreateOrConnectWithoutNutrientsInput)
    connectOrCreate?: FoodCreateOrConnectWithoutNutrientsInput;

    @Field(() => FoodUpsertWithoutNutrientsInput, {nullable:true})
    @Type(() => FoodUpsertWithoutNutrientsInput)
    upsert?: FoodUpsertWithoutNutrientsInput;

    @Field(() => FoodWhereUniqueInput, {nullable:true})
    @Type(() => FoodWhereUniqueInput)
    connect?: Prisma.AtLeast<FoodWhereUniqueInput, 'id' | 'sourceId'>;

    @Field(() => FoodUpdateToOneWithWhereWithoutNutrientsInput, {nullable:true})
    @Type(() => FoodUpdateToOneWithWhereWithoutNutrientsInput)
    update?: FoodUpdateToOneWithWhereWithoutNutrientsInput;
}
