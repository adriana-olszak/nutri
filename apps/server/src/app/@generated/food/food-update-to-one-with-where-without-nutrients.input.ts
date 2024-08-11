import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodWhereInput } from './food-where.input';
import { Type } from 'class-transformer';
import { FoodUpdateWithoutNutrientsInput } from './food-update-without-nutrients.input';

@InputType()
export class FoodUpdateToOneWithWhereWithoutNutrientsInput {

    @Field(() => FoodWhereInput, {nullable:true})
    @Type(() => FoodWhereInput)
    where?: FoodWhereInput;

    @Field(() => FoodUpdateWithoutNutrientsInput, {nullable:false})
    @Type(() => FoodUpdateWithoutNutrientsInput)
    data!: FoodUpdateWithoutNutrientsInput;
}
