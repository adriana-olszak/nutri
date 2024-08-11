import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FoodPortionWhereInput } from './food-portion-where.input';
import { Type } from 'class-transformer';
import { FoodPortionOrderByWithRelationInput } from './food-portion-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { FoodPortionWhereUniqueInput } from './food-portion-where-unique.input';
import { Int } from '@nestjs/graphql';
import { FoodPortionScalarFieldEnum } from './food-portion-scalar-field.enum';

@ArgsType()
export class FindFirstFoodPortionOrThrowArgs {

    @Field(() => FoodPortionWhereInput, {nullable:true})
    @Type(() => FoodPortionWhereInput)
    where?: FoodPortionWhereInput;

    @Field(() => [FoodPortionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<FoodPortionOrderByWithRelationInput>;

    @Field(() => FoodPortionWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<FoodPortionWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [FoodPortionScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof FoodPortionScalarFieldEnum>;
}
