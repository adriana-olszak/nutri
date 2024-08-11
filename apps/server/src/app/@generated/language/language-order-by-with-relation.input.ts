import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { TranslationOrderByRelationAggregateInput } from '../translation/translation-order-by-relation-aggregate.input';
import { FoodSearchVectorOrderByRelationAggregateInput } from '../food-search-vector/food-search-vector-order-by-relation-aggregate.input';

@InputType()
export class LanguageOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => TranslationOrderByRelationAggregateInput, {nullable:true})
    translations?: TranslationOrderByRelationAggregateInput;

    @Field(() => FoodSearchVectorOrderByRelationAggregateInput, {nullable:true})
    searchVectors?: FoodSearchVectorOrderByRelationAggregateInput;
}
