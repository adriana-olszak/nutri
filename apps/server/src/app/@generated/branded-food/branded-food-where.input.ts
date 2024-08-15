import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { FloatNullableFilter } from '../prisma/float-nullable-filter.input';
import { FoodRelationFilter } from '../food/food-relation-filter.input';
import { ImportInfoRelationFilter } from '../import-info/import-info-relation-filter.input';
import { NutritionLabelNullableRelationFilter } from '../nutrition-label/nutrition-label-nullable-relation-filter.input';

@InputType()
export class BrandedFoodWhereInput {

    @Field(() => [BrandedFoodWhereInput], {nullable:true})
    AND?: Array<BrandedFoodWhereInput>;

    @Field(() => [BrandedFoodWhereInput], {nullable:true})
    OR?: Array<BrandedFoodWhereInput>;

    @Field(() => [BrandedFoodWhereInput], {nullable:true})
    NOT?: Array<BrandedFoodWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    foodId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    brandOwner?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    gtinUpc?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    ingredients?: StringNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    servingSize?: FloatNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    servingUnit?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    sourceId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    importInfoId?: StringFilter;

    @Field(() => FoodRelationFilter, {nullable:true})
    food?: FoodRelationFilter;

    @Field(() => ImportInfoRelationFilter, {nullable:true})
    importInfo?: ImportInfoRelationFilter;

    @Field(() => NutritionLabelNullableRelationFilter, {nullable:true})
    nutritionLabel?: NutritionLabelNullableRelationFilter;
}
