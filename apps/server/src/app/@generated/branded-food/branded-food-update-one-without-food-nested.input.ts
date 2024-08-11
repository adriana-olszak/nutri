import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BrandedFoodCreateWithoutFoodInput } from './branded-food-create-without-food.input';
import { Type } from 'class-transformer';
import { BrandedFoodCreateOrConnectWithoutFoodInput } from './branded-food-create-or-connect-without-food.input';
import { BrandedFoodUpsertWithoutFoodInput } from './branded-food-upsert-without-food.input';
import { BrandedFoodWhereInput } from './branded-food-where.input';
import { Prisma } from '@prisma/client';
import { BrandedFoodWhereUniqueInput } from './branded-food-where-unique.input';
import { BrandedFoodUpdateToOneWithWhereWithoutFoodInput } from './branded-food-update-to-one-with-where-without-food.input';

@InputType()
export class BrandedFoodUpdateOneWithoutFoodNestedInput {

    @Field(() => BrandedFoodCreateWithoutFoodInput, {nullable:true})
    @Type(() => BrandedFoodCreateWithoutFoodInput)
    create?: BrandedFoodCreateWithoutFoodInput;

    @Field(() => BrandedFoodCreateOrConnectWithoutFoodInput, {nullable:true})
    @Type(() => BrandedFoodCreateOrConnectWithoutFoodInput)
    connectOrCreate?: BrandedFoodCreateOrConnectWithoutFoodInput;

    @Field(() => BrandedFoodUpsertWithoutFoodInput, {nullable:true})
    @Type(() => BrandedFoodUpsertWithoutFoodInput)
    upsert?: BrandedFoodUpsertWithoutFoodInput;

    @Field(() => BrandedFoodWhereInput, {nullable:true})
    @Type(() => BrandedFoodWhereInput)
    disconnect?: BrandedFoodWhereInput;

    @Field(() => BrandedFoodWhereInput, {nullable:true})
    @Type(() => BrandedFoodWhereInput)
    delete?: BrandedFoodWhereInput;

    @Field(() => BrandedFoodWhereUniqueInput, {nullable:true})
    @Type(() => BrandedFoodWhereUniqueInput)
    connect?: Prisma.AtLeast<BrandedFoodWhereUniqueInput, 'id' | 'foodId'>;

    @Field(() => BrandedFoodUpdateToOneWithWhereWithoutFoodInput, {nullable:true})
    @Type(() => BrandedFoodUpdateToOneWithWhereWithoutFoodInput)
    update?: BrandedFoodUpdateToOneWithWhereWithoutFoodInput;
}
