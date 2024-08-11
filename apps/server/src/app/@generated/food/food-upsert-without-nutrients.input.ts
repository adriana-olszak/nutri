import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodUpdateWithoutNutrientsInput } from './food-update-without-nutrients.input';
import { Type } from 'class-transformer';
import { FoodCreateWithoutNutrientsInput } from './food-create-without-nutrients.input';
import { FoodWhereInput } from './food-where.input';

@InputType()
export class FoodUpsertWithoutNutrientsInput {

    @Field(() => FoodUpdateWithoutNutrientsInput, {nullable:false})
    @Type(() => FoodUpdateWithoutNutrientsInput)
    update!: FoodUpdateWithoutNutrientsInput;

    @Field(() => FoodCreateWithoutNutrientsInput, {nullable:false})
    @Type(() => FoodCreateWithoutNutrientsInput)
    create!: FoodCreateWithoutNutrientsInput;

    @Field(() => FoodWhereInput, {nullable:true})
    @Type(() => FoodWhereInput)
    where?: FoodWhereInput;
}
