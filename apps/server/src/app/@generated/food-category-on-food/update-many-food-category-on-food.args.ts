import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FoodCategoryOnFoodUpdateManyMutationInput } from './food-category-on-food-update-many-mutation.input';
import { Type } from 'class-transformer';
import { FoodCategoryOnFoodWhereInput } from './food-category-on-food-where.input';

@ArgsType()
export class UpdateManyFoodCategoryOnFoodArgs {

    @Field(() => FoodCategoryOnFoodUpdateManyMutationInput, {nullable:false})
    @Type(() => FoodCategoryOnFoodUpdateManyMutationInput)
    data!: FoodCategoryOnFoodUpdateManyMutationInput;

    @Field(() => FoodCategoryOnFoodWhereInput, {nullable:true})
    @Type(() => FoodCategoryOnFoodWhereInput)
    where?: FoodCategoryOnFoodWhereInput;
}
