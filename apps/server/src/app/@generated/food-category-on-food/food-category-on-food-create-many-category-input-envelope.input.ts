import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodCategoryOnFoodCreateManyCategoryInput } from './food-category-on-food-create-many-category.input';
import { Type } from 'class-transformer';

@InputType()
export class FoodCategoryOnFoodCreateManyCategoryInputEnvelope {

    @Field(() => [FoodCategoryOnFoodCreateManyCategoryInput], {nullable:false})
    @Type(() => FoodCategoryOnFoodCreateManyCategoryInput)
    data!: Array<FoodCategoryOnFoodCreateManyCategoryInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
