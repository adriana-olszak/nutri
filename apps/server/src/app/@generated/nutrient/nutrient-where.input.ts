import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { FoodNutrientListRelationFilter } from '../food-nutrient/food-nutrient-list-relation-filter.input';
import { ImportInfoNullableRelationFilter } from '../import-info/import-info-nullable-relation-filter.input';

@InputType()
export class NutrientWhereInput {

    @Field(() => [NutrientWhereInput], {nullable:true})
    AND?: Array<NutrientWhereInput>;

    @Field(() => [NutrientWhereInput], {nullable:true})
    OR?: Array<NutrientWhereInput>;

    @Field(() => [NutrientWhereInput], {nullable:true})
    NOT?: Array<NutrientWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    unitName?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    sourceId?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    importInfoId?: StringNullableFilter;

    @Field(() => FoodNutrientListRelationFilter, {nullable:true})
    foodNutrients?: FoodNutrientListRelationFilter;

    @Field(() => ImportInfoNullableRelationFilter, {nullable:true})
    importInfo?: ImportInfoNullableRelationFilter;
}
