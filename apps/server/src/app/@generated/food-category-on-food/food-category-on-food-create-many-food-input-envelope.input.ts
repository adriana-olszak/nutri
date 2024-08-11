import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodCategoryOnFoodCreateManyFoodInput } from './food-category-on-food-create-many-food.input';
import { Type } from 'class-transformer';

@InputType()
export class FoodCategoryOnFoodCreateManyFoodInputEnvelope {

    @Field(() => [FoodCategoryOnFoodCreateManyFoodInput], {nullable:false})
    @Type(() => FoodCategoryOnFoodCreateManyFoodInput)
    data!: Array<FoodCategoryOnFoodCreateManyFoodInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
