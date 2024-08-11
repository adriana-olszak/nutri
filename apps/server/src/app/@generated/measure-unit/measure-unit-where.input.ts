import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { FoodPortionListRelationFilter } from '../food-portion/food-portion-list-relation-filter.input';
import { ImportInfoRelationFilter } from '../import-info/import-info-relation-filter.input';

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

    @Field(() => StringFilter, {nullable:true})
    importInfoId?: StringFilter;

    @Field(() => FoodPortionListRelationFilter, {nullable:true})
    FoodPortion?: FoodPortionListRelationFilter;

    @Field(() => ImportInfoRelationFilter, {nullable:true})
    importInfo?: ImportInfoRelationFilter;
}
