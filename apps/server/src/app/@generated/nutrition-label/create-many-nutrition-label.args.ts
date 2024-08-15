import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NutritionLabelCreateManyInput } from './nutrition-label-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyNutritionLabelArgs {

    @Field(() => [NutritionLabelCreateManyInput], {nullable:false})
    @Type(() => NutritionLabelCreateManyInput)
    data!: Array<NutritionLabelCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
