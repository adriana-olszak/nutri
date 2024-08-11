import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodDataSource } from './food-data-source.enum';
import { NestedEnumFoodDataSourceWithAggregatesFilter } from './nested-enum-food-data-source-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumFoodDataSourceFilter } from './nested-enum-food-data-source-filter.input';

@InputType()
export class EnumFoodDataSourceWithAggregatesFilter {

    @Field(() => FoodDataSource, {nullable:true})
    equals?: keyof typeof FoodDataSource;

    @Field(() => [FoodDataSource], {nullable:true})
    in?: Array<keyof typeof FoodDataSource>;

    @Field(() => [FoodDataSource], {nullable:true})
    notIn?: Array<keyof typeof FoodDataSource>;

    @Field(() => NestedEnumFoodDataSourceWithAggregatesFilter, {nullable:true})
    not?: NestedEnumFoodDataSourceWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumFoodDataSourceFilter, {nullable:true})
    _min?: NestedEnumFoodDataSourceFilter;

    @Field(() => NestedEnumFoodDataSourceFilter, {nullable:true})
    _max?: NestedEnumFoodDataSourceFilter;
}
