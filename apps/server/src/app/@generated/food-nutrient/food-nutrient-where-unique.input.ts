import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodNutrientWhereInput } from './food-nutrient-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { FloatNullableFilter } from '../prisma/float-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { FoodRelationFilter } from '../food/food-relation-filter.input';
import { NutrientRelationFilter } from '../nutrient/nutrient-relation-filter.input';
import { ImportInfoRelationFilter } from '../import-info/import-info-relation-filter.input';

@InputType()
export class FoodNutrientWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [FoodNutrientWhereInput], {nullable:true})
    AND?: Array<FoodNutrientWhereInput>;

    @Field(() => [FoodNutrientWhereInput], {nullable:true})
    OR?: Array<FoodNutrientWhereInput>;

    @Field(() => [FoodNutrientWhereInput], {nullable:true})
    NOT?: Array<FoodNutrientWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    foodId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    nutrientId?: StringFilter;

    @Field(() => FloatFilter, {nullable:true})
    amount?: FloatFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    min?: FloatNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    median?: FloatNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    max?: FloatNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    confidenceCode?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    sourceId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    importInfoId?: StringFilter;

    @Field(() => FoodRelationFilter, {nullable:true})
    food?: FoodRelationFilter;

    @Field(() => NutrientRelationFilter, {nullable:true})
    nutrient?: NutrientRelationFilter;

    @Field(() => ImportInfoRelationFilter, {nullable:true})
    importInfo?: ImportInfoRelationFilter;
}
