import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FoodNutrientUpdateManyMutationInput } from './food-nutrient-update-many-mutation.input';
import { Type } from 'class-transformer';
import { FoodNutrientWhereInput } from './food-nutrient-where.input';

@ArgsType()
export class UpdateManyFoodNutrientArgs {

    @Field(() => FoodNutrientUpdateManyMutationInput, {nullable:false})
    @Type(() => FoodNutrientUpdateManyMutationInput)
    data!: FoodNutrientUpdateManyMutationInput;

    @Field(() => FoodNutrientWhereInput, {nullable:true})
    @Type(() => FoodNutrientWhereInput)
    where?: FoodNutrientWhereInput;
}
