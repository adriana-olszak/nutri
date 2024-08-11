import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FoodCategoryWhereInput } from './food-category-where.input';
import { Type } from 'class-transformer';
import { FoodCategoryOrderByWithRelationInput } from './food-category-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { FoodCategoryWhereUniqueInput } from './food-category-where-unique.input';
import { Int } from '@nestjs/graphql';
import { FoodCategoryScalarFieldEnum } from './food-category-scalar-field.enum';

@ArgsType()
export class FindFirstFoodCategoryOrThrowArgs {

    @Field(() => FoodCategoryWhereInput, {nullable:true})
    @Type(() => FoodCategoryWhereInput)
    where?: FoodCategoryWhereInput;

    @Field(() => [FoodCategoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<FoodCategoryOrderByWithRelationInput>;

    @Field(() => FoodCategoryWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<FoodCategoryWhereUniqueInput, 'id' | 'code' | 'description' | 'sourceId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [FoodCategoryScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof FoodCategoryScalarFieldEnum>;
}
