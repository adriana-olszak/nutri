import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BrandedFoodWhereUniqueInput } from './branded-food-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneBrandedFoodArgs {

    @Field(() => BrandedFoodWhereUniqueInput, {nullable:false})
    @Type(() => BrandedFoodWhereUniqueInput)
    where!: Prisma.AtLeast<BrandedFoodWhereUniqueInput, 'id' | 'foodId'>;
}
