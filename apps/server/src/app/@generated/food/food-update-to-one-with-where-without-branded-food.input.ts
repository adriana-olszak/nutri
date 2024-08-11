import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodWhereInput } from './food-where.input';
import { Type } from 'class-transformer';
import { FoodUpdateWithoutBrandedFoodInput } from './food-update-without-branded-food.input';

@InputType()
export class FoodUpdateToOneWithWhereWithoutBrandedFoodInput {

    @Field(() => FoodWhereInput, {nullable:true})
    @Type(() => FoodWhereInput)
    where?: FoodWhereInput;

    @Field(() => FoodUpdateWithoutBrandedFoodInput, {nullable:false})
    @Type(() => FoodUpdateWithoutBrandedFoodInput)
    data!: FoodUpdateWithoutBrandedFoodInput;
}
