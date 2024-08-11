import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NutrientCreateManyInput } from './nutrient-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyNutrientArgs {

    @Field(() => [NutrientCreateManyInput], {nullable:false})
    @Type(() => NutrientCreateManyInput)
    data!: Array<NutrientCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
