import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NutritionLabelUpdateInput } from './nutrition-label-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { NutritionLabelWhereUniqueInput } from './nutrition-label-where-unique.input';

@ArgsType()
export class UpdateOneNutritionLabelArgs {

    @Field(() => NutritionLabelUpdateInput, {nullable:false})
    @Type(() => NutritionLabelUpdateInput)
    data!: NutritionLabelUpdateInput;

    @Field(() => NutritionLabelWhereUniqueInput, {nullable:false})
    @Type(() => NutritionLabelWhereUniqueInput)
    where!: Prisma.AtLeast<NutritionLabelWhereUniqueInput, 'id' | 'brandedFoodId'>;
}
