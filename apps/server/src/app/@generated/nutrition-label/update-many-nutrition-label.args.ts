import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NutritionLabelUpdateManyMutationInput } from './nutrition-label-update-many-mutation.input';
import { Type } from 'class-transformer';
import { NutritionLabelWhereInput } from './nutrition-label-where.input';

@ArgsType()
export class UpdateManyNutritionLabelArgs {

    @Field(() => NutritionLabelUpdateManyMutationInput, {nullable:false})
    @Type(() => NutritionLabelUpdateManyMutationInput)
    data!: NutritionLabelUpdateManyMutationInput;

    @Field(() => NutritionLabelWhereInput, {nullable:true})
    @Type(() => NutritionLabelWhereInput)
    where?: NutritionLabelWhereInput;
}
