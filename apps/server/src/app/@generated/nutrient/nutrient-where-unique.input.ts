import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NutrientWhereInput } from './nutrient-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { FoodNutrientListRelationFilter } from '../food-nutrient/food-nutrient-list-relation-filter.input';
import { ImportInfoRelationFilter } from '../import-info/import-info-relation-filter.input';

@InputType()
export class NutrientWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    sourceId?: string;

    @Field(() => [NutrientWhereInput], {nullable:true})
    AND?: Array<NutrientWhereInput>;

    @Field(() => [NutrientWhereInput], {nullable:true})
    OR?: Array<NutrientWhereInput>;

    @Field(() => [NutrientWhereInput], {nullable:true})
    NOT?: Array<NutrientWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    unitName?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    importInfoId?: StringFilter;

    @Field(() => FoodNutrientListRelationFilter, {nullable:true})
    foodNutrients?: FoodNutrientListRelationFilter;

    @Field(() => ImportInfoRelationFilter, {nullable:true})
    importInfo?: ImportInfoRelationFilter;
}
