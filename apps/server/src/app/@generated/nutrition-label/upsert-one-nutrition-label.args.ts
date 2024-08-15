import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NutritionLabelWhereUniqueInput } from './nutrition-label-where-unique.input';
import { Type } from 'class-transformer';
import { NutritionLabelCreateInput } from './nutrition-label-create.input';
import { NutritionLabelUpdateInput } from './nutrition-label-update.input';

@ArgsType()
export class UpsertOneNutritionLabelArgs {

    @Field(() => NutritionLabelWhereUniqueInput, {nullable:false})
    @Type(() => NutritionLabelWhereUniqueInput)
    where!: Prisma.AtLeast<NutritionLabelWhereUniqueInput, 'id' | 'brandedFoodId'>;

    @Field(() => NutritionLabelCreateInput, {nullable:false})
    @Type(() => NutritionLabelCreateInput)
    create!: NutritionLabelCreateInput;

    @Field(() => NutritionLabelUpdateInput, {nullable:false})
    @Type(() => NutritionLabelUpdateInput)
    update!: NutritionLabelUpdateInput;
}
