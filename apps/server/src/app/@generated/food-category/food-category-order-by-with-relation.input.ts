import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { FoodCategoryOnFoodOrderByRelationAggregateInput } from '../food-category-on-food/food-category-on-food-order-by-relation-aggregate.input';
import { ImportInfoOrderByWithRelationInput } from '../import-info/import-info-order-by-with-relation.input';
import { FoodCategoryOrderByRelationAggregateInput } from './food-category-order-by-relation-aggregate.input';

@InputType()
export class FoodCategoryOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    code?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    parentCategoryId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    level?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sourceId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    importInfoId?: keyof typeof SortOrder;

    @Field(() => FoodCategoryOnFoodOrderByRelationAggregateInput, {nullable:true})
    foods?: FoodCategoryOnFoodOrderByRelationAggregateInput;

    @Field(() => ImportInfoOrderByWithRelationInput, {nullable:true})
    importInfo?: ImportInfoOrderByWithRelationInput;

    @Field(() => FoodCategoryOrderByWithRelationInput, {nullable:true})
    parentCategory?: FoodCategoryOrderByWithRelationInput;

    @Field(() => FoodCategoryOrderByRelationAggregateInput, {nullable:true})
    childCategories?: FoodCategoryOrderByRelationAggregateInput;
}
