import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodDataSource } from './food-data-source.enum';
import { NestedEnumFoodDataSourceFilter } from './nested-enum-food-data-source-filter.input';

@InputType()
export class EnumFoodDataSourceFilter {

    @Field(() => FoodDataSource, {nullable:true})
    equals?: keyof typeof FoodDataSource;

    @Field(() => [FoodDataSource], {nullable:true})
    in?: Array<keyof typeof FoodDataSource>;

    @Field(() => [FoodDataSource], {nullable:true})
    notIn?: Array<keyof typeof FoodDataSource>;

    @Field(() => NestedEnumFoodDataSourceFilter, {nullable:true})
    not?: NestedEnumFoodDataSourceFilter;
}
