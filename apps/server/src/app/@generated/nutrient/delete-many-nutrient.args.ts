import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NutrientWhereInput } from './nutrient-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyNutrientArgs {

    @Field(() => NutrientWhereInput, {nullable:true})
    @Type(() => NutrientWhereInput)
    where?: NutrientWhereInput;
}
