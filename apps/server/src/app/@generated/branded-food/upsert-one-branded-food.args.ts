import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BrandedFoodWhereUniqueInput } from './branded-food-where-unique.input';
import { Type } from 'class-transformer';
import { BrandedFoodCreateInput } from './branded-food-create.input';
import { BrandedFoodUpdateInput } from './branded-food-update.input';

@ArgsType()
export class UpsertOneBrandedFoodArgs {

    @Field(() => BrandedFoodWhereUniqueInput, {nullable:false})
    @Type(() => BrandedFoodWhereUniqueInput)
    where!: Prisma.AtLeast<BrandedFoodWhereUniqueInput, 'id' | 'foodId'>;

    @Field(() => BrandedFoodCreateInput, {nullable:false})
    @Type(() => BrandedFoodCreateInput)
    create!: BrandedFoodCreateInput;

    @Field(() => BrandedFoodUpdateInput, {nullable:false})
    @Type(() => BrandedFoodUpdateInput)
    update!: BrandedFoodUpdateInput;
}
