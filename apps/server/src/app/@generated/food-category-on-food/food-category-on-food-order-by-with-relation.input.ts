import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { FoodOrderByWithRelationInput } from '../food/food-order-by-with-relation.input';
import { FoodCategoryOrderByWithRelationInput } from '../food-category/food-category-order-by-with-relation.input';

@InputType()
export class FoodCategoryOnFoodOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    foodId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    categoryId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isPrimaryCategory?: keyof typeof SortOrder;

    @Field(() => FoodOrderByWithRelationInput, {nullable:true})
    food?: FoodOrderByWithRelationInput;

    @Field(() => FoodCategoryOrderByWithRelationInput, {nullable:true})
    category?: FoodCategoryOrderByWithRelationInput;
}
