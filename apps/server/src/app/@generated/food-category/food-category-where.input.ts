import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { FoodCategoryOnFoodListRelationFilter } from '../food-category-on-food/food-category-on-food-list-relation-filter.input';
import { ImportInfoRelationFilter } from '../import-info/import-info-relation-filter.input';
import { FoodCategoryNullableRelationFilter } from './food-category-nullable-relation-filter.input';
import { FoodCategoryListRelationFilter } from './food-category-list-relation-filter.input';

@InputType()
export class FoodCategoryWhereInput {

    @Field(() => [FoodCategoryWhereInput], {nullable:true})
    AND?: Array<FoodCategoryWhereInput>;

    @Field(() => [FoodCategoryWhereInput], {nullable:true})
    OR?: Array<FoodCategoryWhereInput>;

    @Field(() => [FoodCategoryWhereInput], {nullable:true})
    NOT?: Array<FoodCategoryWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    code?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    parentCategoryId?: StringNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    level?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    sourceId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    importInfoId?: StringFilter;

    @Field(() => FoodCategoryOnFoodListRelationFilter, {nullable:true})
    foods?: FoodCategoryOnFoodListRelationFilter;

    @Field(() => ImportInfoRelationFilter, {nullable:true})
    importInfo?: ImportInfoRelationFilter;

    @Field(() => FoodCategoryNullableRelationFilter, {nullable:true})
    parentCategory?: FoodCategoryNullableRelationFilter;

    @Field(() => FoodCategoryListRelationFilter, {nullable:true})
    childCategories?: FoodCategoryListRelationFilter;
}
