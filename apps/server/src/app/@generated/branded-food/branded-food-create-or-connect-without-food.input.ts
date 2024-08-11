import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BrandedFoodWhereUniqueInput } from './branded-food-where-unique.input';
import { Type } from 'class-transformer';
import { BrandedFoodCreateWithoutFoodInput } from './branded-food-create-without-food.input';

@InputType()
export class BrandedFoodCreateOrConnectWithoutFoodInput {

    @Field(() => BrandedFoodWhereUniqueInput, {nullable:false})
    @Type(() => BrandedFoodWhereUniqueInput)
    where!: Prisma.AtLeast<BrandedFoodWhereUniqueInput, 'id' | 'foodId'>;

    @Field(() => BrandedFoodCreateWithoutFoodInput, {nullable:false})
    @Type(() => BrandedFoodCreateWithoutFoodInput)
    create!: BrandedFoodCreateWithoutFoodInput;
}
