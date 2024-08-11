import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BrandedFoodWhereUniqueInput } from './branded-food-where-unique.input';
import { Type } from 'class-transformer';
import { BrandedFoodUpdateWithoutImportInfoInput } from './branded-food-update-without-import-info.input';

@InputType()
export class BrandedFoodUpdateWithWhereUniqueWithoutImportInfoInput {

    @Field(() => BrandedFoodWhereUniqueInput, {nullable:false})
    @Type(() => BrandedFoodWhereUniqueInput)
    where!: Prisma.AtLeast<BrandedFoodWhereUniqueInput, 'id' | 'foodId'>;

    @Field(() => BrandedFoodUpdateWithoutImportInfoInput, {nullable:false})
    @Type(() => BrandedFoodUpdateWithoutImportInfoInput)
    data!: BrandedFoodUpdateWithoutImportInfoInput;
}
