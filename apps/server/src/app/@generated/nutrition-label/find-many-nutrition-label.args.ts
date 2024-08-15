import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NutritionLabelWhereInput } from './nutrition-label-where.input';
import { Type } from 'class-transformer';
import { NutritionLabelOrderByWithRelationInput } from './nutrition-label-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { NutritionLabelWhereUniqueInput } from './nutrition-label-where-unique.input';
import { Int } from '@nestjs/graphql';
import { NutritionLabelScalarFieldEnum } from './nutrition-label-scalar-field.enum';

@ArgsType()
export class FindManyNutritionLabelArgs {

    @Field(() => NutritionLabelWhereInput, {nullable:true})
    @Type(() => NutritionLabelWhereInput)
    where?: NutritionLabelWhereInput;

    @Field(() => [NutritionLabelOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<NutritionLabelOrderByWithRelationInput>;

    @Field(() => NutritionLabelWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<NutritionLabelWhereUniqueInput, 'id' | 'brandedFoodId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [NutritionLabelScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof NutritionLabelScalarFieldEnum>;
}
