import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BrandedFoodCreateWithoutFoodInput } from './branded-food-create-without-food.input';
import { Type } from 'class-transformer';
import { BrandedFoodCreateOrConnectWithoutFoodInput } from './branded-food-create-or-connect-without-food.input';
import { Prisma } from '@prisma/client';
import { BrandedFoodWhereUniqueInput } from './branded-food-where-unique.input';

@InputType()
export class BrandedFoodUncheckedCreateNestedOneWithoutFoodInput {

    @Field(() => BrandedFoodCreateWithoutFoodInput, {nullable:true})
    @Type(() => BrandedFoodCreateWithoutFoodInput)
    create?: BrandedFoodCreateWithoutFoodInput;

    @Field(() => BrandedFoodCreateOrConnectWithoutFoodInput, {nullable:true})
    @Type(() => BrandedFoodCreateOrConnectWithoutFoodInput)
    connectOrCreate?: BrandedFoodCreateOrConnectWithoutFoodInput;

    @Field(() => BrandedFoodWhereUniqueInput, {nullable:true})
    @Type(() => BrandedFoodWhereUniqueInput)
    connect?: Prisma.AtLeast<BrandedFoodWhereUniqueInput, 'id' | 'foodId'>;
}
