import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NutrientUpdateManyMutationInput } from './nutrient-update-many-mutation.input';
import { Type } from 'class-transformer';
import { NutrientWhereInput } from './nutrient-where.input';

@ArgsType()
export class UpdateManyNutrientArgs {

    @Field(() => NutrientUpdateManyMutationInput, {nullable:false})
    @Type(() => NutrientUpdateManyMutationInput)
    data!: NutrientUpdateManyMutationInput;

    @Field(() => NutrientWhereInput, {nullable:true})
    @Type(() => NutrientWhereInput)
    where?: NutrientWhereInput;
}
