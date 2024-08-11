import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { FoodRelationFilter } from '../food/food-relation-filter.input';
import { MeasureUnitRelationFilter } from '../measure-unit/measure-unit-relation-filter.input';
import { ImportInfoRelationFilter } from '../import-info/import-info-relation-filter.input';

@InputType()
export class FoodPortionWhereInput {

    @Field(() => [FoodPortionWhereInput], {nullable:true})
    AND?: Array<FoodPortionWhereInput>;

    @Field(() => [FoodPortionWhereInput], {nullable:true})
    OR?: Array<FoodPortionWhereInput>;

    @Field(() => [FoodPortionWhereInput], {nullable:true})
    NOT?: Array<FoodPortionWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => FloatFilter, {nullable:true})
    amount?: FloatFilter;

    @Field(() => FloatFilter, {nullable:true})
    gramWeight?: FloatFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    portionDescription?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    sourceId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    foodId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    measureUnitName?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    importInfoId?: StringFilter;

    @Field(() => FoodRelationFilter, {nullable:true})
    food?: FoodRelationFilter;

    @Field(() => MeasureUnitRelationFilter, {nullable:true})
    measureUnit?: MeasureUnitRelationFilter;

    @Field(() => ImportInfoRelationFilter, {nullable:true})
    importInfo?: ImportInfoRelationFilter;
}
