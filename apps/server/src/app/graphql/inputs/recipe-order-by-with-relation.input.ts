import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';

@InputType()
export class RecipeOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    sourceId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    sourceUrl?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    cookingTime?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    prepTime?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    servingsText?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    servingsMin?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    servingsMax?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}
