import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { FoodPortionListRelationFilter } from '../food-portion/food-portion-list-relation-filter.input';
import { ImportInfoNullableRelationFilter } from '../import-info/import-info-nullable-relation-filter.input';

@InputType()
export class MeasureUnitWhereInput {

    @Field(() => [MeasureUnitWhereInput], {nullable:true})
    AND?: Array<MeasureUnitWhereInput>;

    @Field(() => [MeasureUnitWhereInput], {nullable:true})
    OR?: Array<MeasureUnitWhereInput>;

    @Field(() => [MeasureUnitWhereInput], {nullable:true})
    NOT?: Array<MeasureUnitWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    importInfoId?: StringNullableFilter;

    @Field(() => FoodPortionListRelationFilter, {nullable:true})
    FoodPortion?: FoodPortionListRelationFilter;

    @Field(() => ImportInfoNullableRelationFilter, {nullable:true})
    importInfo?: ImportInfoNullableRelationFilter;
}
