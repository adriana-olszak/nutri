import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class RecipeAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    servingsMin?: true;

    @Field(() => Boolean, {nullable:true})
    servingsMax?: true;
}
