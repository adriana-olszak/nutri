import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { FoodOrderByWithRelationInput } from '../food/food-order-by-with-relation.input';
import { LanguageOrderByWithRelationInput } from '../language/language-order-by-with-relation.input';

@InputType()
export class FoodSearchVectorOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    foodId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    languageCode?: keyof typeof SortOrder;

    @Field(() => FoodOrderByWithRelationInput, {nullable:true})
    food?: FoodOrderByWithRelationInput;

    @Field(() => LanguageOrderByWithRelationInput, {nullable:true})
    language?: LanguageOrderByWithRelationInput;
}
