import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class FoodSearchVectorScalarWhereWithAggregatesInput {

    @Field(() => [FoodSearchVectorScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<FoodSearchVectorScalarWhereWithAggregatesInput>;

    @Field(() => [FoodSearchVectorScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<FoodSearchVectorScalarWhereWithAggregatesInput>;

    @Field(() => [FoodSearchVectorScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<FoodSearchVectorScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    foodId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    languageCode?: StringWithAggregatesFilter;
}
