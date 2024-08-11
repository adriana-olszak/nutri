import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodWhereInput } from './food-where.input';
import { Type } from 'class-transformer';
import { FoodUpdateWithoutCategoriesInput } from './food-update-without-categories.input';

@InputType()
export class FoodUpdateToOneWithWhereWithoutCategoriesInput {

    @Field(() => FoodWhereInput, {nullable:true})
    @Type(() => FoodWhereInput)
    where?: FoodWhereInput;

    @Field(() => FoodUpdateWithoutCategoriesInput, {nullable:false})
    @Type(() => FoodUpdateWithoutCategoriesInput)
    data!: FoodUpdateWithoutCategoriesInput;
}
