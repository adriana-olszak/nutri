import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NutritionLabelWhereInput } from './nutrition-label-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyNutritionLabelArgs {

    @Field(() => NutritionLabelWhereInput, {nullable:true})
    @Type(() => NutritionLabelWhereInput)
    where?: NutritionLabelWhereInput;
}
