import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BrandedFoodUpdateInput } from './branded-food-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { BrandedFoodWhereUniqueInput } from './branded-food-where-unique.input';

@ArgsType()
export class UpdateOneBrandedFoodArgs {

    @Field(() => BrandedFoodUpdateInput, {nullable:false})
    @Type(() => BrandedFoodUpdateInput)
    data!: BrandedFoodUpdateInput;

    @Field(() => BrandedFoodWhereUniqueInput, {nullable:false})
    @Type(() => BrandedFoodWhereUniqueInput)
    where!: Prisma.AtLeast<BrandedFoodWhereUniqueInput, 'id' | 'foodId'>;
}
