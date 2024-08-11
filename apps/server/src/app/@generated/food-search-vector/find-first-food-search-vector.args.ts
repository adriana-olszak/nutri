import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FoodSearchVectorWhereInput } from './food-search-vector-where.input';
import { Type } from 'class-transformer';
import { FoodSearchVectorOrderByWithRelationInput } from './food-search-vector-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { FoodSearchVectorWhereUniqueInput } from './food-search-vector-where-unique.input';
import { Int } from '@nestjs/graphql';
import { FoodSearchVectorScalarFieldEnum } from './food-search-vector-scalar-field.enum';

@ArgsType()
export class FindFirstFoodSearchVectorArgs {

    @Field(() => FoodSearchVectorWhereInput, {nullable:true})
    @Type(() => FoodSearchVectorWhereInput)
    where?: FoodSearchVectorWhereInput;

    @Field(() => [FoodSearchVectorOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<FoodSearchVectorOrderByWithRelationInput>;

    @Field(() => FoodSearchVectorWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<FoodSearchVectorWhereUniqueInput, 'id' | 'foodId_languageCode'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [FoodSearchVectorScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof FoodSearchVectorScalarFieldEnum>;
}
