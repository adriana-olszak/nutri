import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { RecipeOrderByWithRelationInput } from '../recipe/recipe-order-by-with-relation.input';

@InputType()
export class RecipeInstructionsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    recipeId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    content?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    order?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    listIndex?: SortOrderInput;

    @Field(() => RecipeOrderByWithRelationInput, {nullable:true})
    recipe?: RecipeOrderByWithRelationInput;
}
