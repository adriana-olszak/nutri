import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { FoodCategoryOnFood } from '../food-category-on-food/food-category-on-food.model';
import { ImportInfo } from '../import-info/import-info.model';
import { FoodCategoryCount } from './food-category-count.output';

@ObjectType()
export class FoodCategory {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    code!: string | null;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => String, {nullable:true})
    parentCategoryId!: string | null;

    @Field(() => Int, {nullable:false})
    level!: number;

    @Field(() => String, {nullable:false})
    sourceId!: string;

    @Field(() => String, {nullable:false})
    importInfoId!: string;

    @Field(() => [FoodCategoryOnFood], {nullable:true})
    foods?: Array<FoodCategoryOnFood>;

    @Field(() => ImportInfo, {nullable:false})
    importInfo?: ImportInfo;

    @Field(() => FoodCategory, {nullable:true})
    parentCategory?: FoodCategory | null;

    @Field(() => [FoodCategory], {nullable:true})
    childCategories?: Array<FoodCategory>;

    @Field(() => FoodCategoryCount, {nullable:false})
    _count?: FoodCategoryCount;
}
