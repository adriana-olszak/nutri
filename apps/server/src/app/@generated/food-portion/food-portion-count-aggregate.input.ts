import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class FoodPortionCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    amount?: true;

    @Field(() => Boolean, {nullable:true})
    gramWeight?: true;

    @Field(() => Boolean, {nullable:true})
    portionDescription?: true;

    @Field(() => Boolean, {nullable:true})
    sourceId?: true;

    @Field(() => Boolean, {nullable:true})
    foodId?: true;

    @Field(() => Boolean, {nullable:true})
    measureUnitName?: true;

    @Field(() => Boolean, {nullable:true})
    importInfoId?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
