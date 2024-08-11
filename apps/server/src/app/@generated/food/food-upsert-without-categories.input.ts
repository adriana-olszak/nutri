import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodUpdateWithoutCategoriesInput } from './food-update-without-categories.input';
import { Type } from 'class-transformer';
import { FoodCreateWithoutCategoriesInput } from './food-create-without-categories.input';
import { FoodWhereInput } from './food-where.input';

@InputType()
export class FoodUpsertWithoutCategoriesInput {

    @Field(() => FoodUpdateWithoutCategoriesInput, {nullable:false})
    @Type(() => FoodUpdateWithoutCategoriesInput)
    update!: FoodUpdateWithoutCategoriesInput;

    @Field(() => FoodCreateWithoutCategoriesInput, {nullable:false})
    @Type(() => FoodCreateWithoutCategoriesInput)
    create!: FoodCreateWithoutCategoriesInput;

    @Field(() => FoodWhereInput, {nullable:true})
    @Type(() => FoodWhereInput)
    where?: FoodWhereInput;
}
