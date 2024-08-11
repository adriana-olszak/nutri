import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FoodNutrientWhereInput } from './food-nutrient-where.input';
import { Type } from 'class-transformer';
import { FoodNutrientOrderByWithRelationInput } from './food-nutrient-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { FoodNutrientWhereUniqueInput } from './food-nutrient-where-unique.input';
import { Int } from '@nestjs/graphql';
import { FoodNutrientScalarFieldEnum } from './food-nutrient-scalar-field.enum';

@ArgsType()
export class FindManyFoodNutrientArgs {

    @Field(() => FoodNutrientWhereInput, {nullable:true})
    @Type(() => FoodNutrientWhereInput)
    where?: FoodNutrientWhereInput;

    @Field(() => [FoodNutrientOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<FoodNutrientOrderByWithRelationInput>;

    @Field(() => FoodNutrientWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<FoodNutrientWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [FoodNutrientScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof FoodNutrientScalarFieldEnum>;
}
