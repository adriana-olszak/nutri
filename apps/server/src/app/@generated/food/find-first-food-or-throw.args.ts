import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FoodWhereInput } from './food-where.input';
import { Type } from 'class-transformer';
import { FoodOrderByWithRelationInput } from './food-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { FoodWhereUniqueInput } from './food-where-unique.input';
import { Int } from '@nestjs/graphql';
import { FoodScalarFieldEnum } from './food-scalar-field.enum';

@ArgsType()
export class FindFirstFoodOrThrowArgs {

    @Field(() => FoodWhereInput, {nullable:true})
    @Type(() => FoodWhereInput)
    where?: FoodWhereInput;

    @Field(() => [FoodOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<FoodOrderByWithRelationInput>;

    @Field(() => FoodWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<FoodWhereUniqueInput, 'id' | 'sourceId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [FoodScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof FoodScalarFieldEnum>;
}
