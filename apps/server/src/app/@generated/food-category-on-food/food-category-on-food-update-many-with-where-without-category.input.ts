import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodCategoryOnFoodScalarWhereInput } from './food-category-on-food-scalar-where.input';
import { Type } from 'class-transformer';
import { FoodCategoryOnFoodUpdateManyMutationInput } from './food-category-on-food-update-many-mutation.input';

@InputType()
export class FoodCategoryOnFoodUpdateManyWithWhereWithoutCategoryInput {

    @Field(() => FoodCategoryOnFoodScalarWhereInput, {nullable:false})
    @Type(() => FoodCategoryOnFoodScalarWhereInput)
    where!: FoodCategoryOnFoodScalarWhereInput;

    @Field(() => FoodCategoryOnFoodUpdateManyMutationInput, {nullable:false})
    @Type(() => FoodCategoryOnFoodUpdateManyMutationInput)
    data!: FoodCategoryOnFoodUpdateManyMutationInput;
}
