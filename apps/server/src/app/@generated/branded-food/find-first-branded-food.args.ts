import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BrandedFoodWhereInput } from './branded-food-where.input';
import { Type } from 'class-transformer';
import { BrandedFoodOrderByWithRelationInput } from './branded-food-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { BrandedFoodWhereUniqueInput } from './branded-food-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BrandedFoodScalarFieldEnum } from './branded-food-scalar-field.enum';

@ArgsType()
export class FindFirstBrandedFoodArgs {

    @Field(() => BrandedFoodWhereInput, {nullable:true})
    @Type(() => BrandedFoodWhereInput)
    where?: BrandedFoodWhereInput;

    @Field(() => [BrandedFoodOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BrandedFoodOrderByWithRelationInput>;

    @Field(() => BrandedFoodWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<BrandedFoodWhereUniqueInput, 'id' | 'foodId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [BrandedFoodScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof BrandedFoodScalarFieldEnum>;
}
