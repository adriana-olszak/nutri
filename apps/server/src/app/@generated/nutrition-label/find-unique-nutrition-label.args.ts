import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NutritionLabelWhereUniqueInput } from './nutrition-label-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueNutritionLabelArgs {

    @Field(() => NutritionLabelWhereUniqueInput, {nullable:false})
    @Type(() => NutritionLabelWhereUniqueInput)
    where!: Prisma.AtLeast<NutritionLabelWhereUniqueInput, 'id' | 'brandedFoodId'>;
}
