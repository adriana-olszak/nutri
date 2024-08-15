import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class RecipeMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    title?: true;

    @Field(() => Boolean, {nullable:true})
    sourceId?: true;

    @Field(() => Boolean, {nullable:true})
    sourceUrl?: true;

    @Field(() => Boolean, {nullable:true})
    description?: true;

    @Field(() => Boolean, {nullable:true})
    cookingTime?: true;

    @Field(() => Boolean, {nullable:true})
    prepTime?: true;

    @Field(() => Boolean, {nullable:true})
    servingsText?: true;

    @Field(() => Boolean, {nullable:true})
    servingsMin?: true;

    @Field(() => Boolean, {nullable:true})
    servingsMax?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}
