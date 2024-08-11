import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodUpdateWithoutBrandedFoodInput } from './food-update-without-branded-food.input';
import { Type } from 'class-transformer';
import { FoodCreateWithoutBrandedFoodInput } from './food-create-without-branded-food.input';
import { FoodWhereInput } from './food-where.input';

@InputType()
export class FoodUpsertWithoutBrandedFoodInput {

    @Field(() => FoodUpdateWithoutBrandedFoodInput, {nullable:false})
    @Type(() => FoodUpdateWithoutBrandedFoodInput)
    update!: FoodUpdateWithoutBrandedFoodInput;

    @Field(() => FoodCreateWithoutBrandedFoodInput, {nullable:false})
    @Type(() => FoodCreateWithoutBrandedFoodInput)
    create!: FoodCreateWithoutBrandedFoodInput;

    @Field(() => FoodWhereInput, {nullable:true})
    @Type(() => FoodWhereInput)
    where?: FoodWhereInput;
}
