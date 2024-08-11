import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NutrientCreateInput } from './nutrient-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneNutrientArgs {

    @Field(() => NutrientCreateInput, {nullable:false})
    @Type(() => NutrientCreateInput)
    data!: NutrientCreateInput;
}
