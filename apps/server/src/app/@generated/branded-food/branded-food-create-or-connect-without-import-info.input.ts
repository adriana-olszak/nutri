import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BrandedFoodWhereUniqueInput } from './branded-food-where-unique.input';
import { Type } from 'class-transformer';
import { BrandedFoodCreateWithoutImportInfoInput } from './branded-food-create-without-import-info.input';

@InputType()
export class BrandedFoodCreateOrConnectWithoutImportInfoInput {

    @Field(() => BrandedFoodWhereUniqueInput, {nullable:false})
    @Type(() => BrandedFoodWhereUniqueInput)
    where!: Prisma.AtLeast<BrandedFoodWhereUniqueInput, 'id' | 'foodId'>;

    @Field(() => BrandedFoodCreateWithoutImportInfoInput, {nullable:false})
    @Type(() => BrandedFoodCreateWithoutImportInfoInput)
    create!: BrandedFoodCreateWithoutImportInfoInput;
}
