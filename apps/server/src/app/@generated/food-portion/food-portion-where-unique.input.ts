import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodPortionWhereInput } from './food-portion-where.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { FoodRelationFilter } from '../food/food-relation-filter.input';
import { MeasureUnitRelationFilter } from '../measure-unit/measure-unit-relation-filter.input';
import { ImportInfoNullableRelationFilter } from '../import-info/import-info-nullable-relation-filter.input';

@InputType()
export class FoodPortionWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [FoodPortionWhereInput], {nullable:true})
    AND?: Array<FoodPortionWhereInput>;

    @Field(() => [FoodPortionWhereInput], {nullable:true})
    OR?: Array<FoodPortionWhereInput>;

    @Field(() => [FoodPortionWhereInput], {nullable:true})
    NOT?: Array<FoodPortionWhereInput>;

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

    @Field(() => StringNullableFilter, {nullable:true})
    importInfoId?: StringNullableFilter;

    @Field(() => FoodRelationFilter, {nullable:true})
    food?: FoodRelationFilter;

    @Field(() => MeasureUnitRelationFilter, {nullable:true})
    measureUnit?: MeasureUnitRelationFilter;

    @Field(() => ImportInfoNullableRelationFilter, {nullable:true})
    importInfo?: ImportInfoNullableRelationFilter;
}
