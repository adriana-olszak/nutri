import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodNutrientScalarWhereInput } from './food-nutrient-scalar-where.input';
import { Type } from 'class-transformer';
import { FoodNutrientUpdateManyMutationInput } from './food-nutrient-update-many-mutation.input';

@InputType()
export class FoodNutrientUpdateManyWithWhereWithoutNutrientInput {

    @Field(() => FoodNutrientScalarWhereInput, {nullable:false})
    @Type(() => FoodNutrientScalarWhereInput)
    where!: FoodNutrientScalarWhereInput;

    @Field(() => FoodNutrientUpdateManyMutationInput, {nullable:false})
    @Type(() => FoodNutrientUpdateManyMutationInput)
    data!: FoodNutrientUpdateManyMutationInput;
}
