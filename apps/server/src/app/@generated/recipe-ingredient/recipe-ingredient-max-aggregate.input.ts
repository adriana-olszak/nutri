import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class RecipeIngredientMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    recipeId?: true;

    @Field(() => Boolean, {nullable:true})
    partId?: true;

    @Field(() => Boolean, {nullable:true})
    foodId?: true;

    @Field(() => Boolean, {nullable:true})
    quantity?: true;

    @Field(() => Boolean, {nullable:true})
    quantityText?: true;

    @Field(() => Boolean, {nullable:true})
    minQuantity?: true;

    @Field(() => Boolean, {nullable:true})
    maxQuantity?: true;

    @Field(() => Boolean, {nullable:true})
    unit?: true;

    @Field(() => Boolean, {nullable:true})
    unitText?: true;

    @Field(() => Boolean, {nullable:true})
    ingredientText?: true;

    @Field(() => Boolean, {nullable:true})
    extraInfo?: true;
}
