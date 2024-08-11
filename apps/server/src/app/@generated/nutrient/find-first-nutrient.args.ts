import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NutrientWhereInput } from './nutrient-where.input';
import { Type } from 'class-transformer';
import { NutrientOrderByWithRelationInput } from './nutrient-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { NutrientWhereUniqueInput } from './nutrient-where-unique.input';
import { Int } from '@nestjs/graphql';
import { NutrientScalarFieldEnum } from './nutrient-scalar-field.enum';

@ArgsType()
export class FindFirstNutrientArgs {

    @Field(() => NutrientWhereInput, {nullable:true})
    @Type(() => NutrientWhereInput)
    where?: NutrientWhereInput;

    @Field(() => [NutrientOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<NutrientOrderByWithRelationInput>;

    @Field(() => NutrientWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<NutrientWhereUniqueInput, 'id' | 'sourceId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [NutrientScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof NutrientScalarFieldEnum>;
}
