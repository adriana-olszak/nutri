import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NutritionLabelCreateInput } from './nutrition-label-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneNutritionLabelArgs {

    @Field(() => NutritionLabelCreateInput, {nullable:false})
    @Type(() => NutritionLabelCreateInput)
    data!: NutritionLabelCreateInput;
}
