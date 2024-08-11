import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class BrandedFoodCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    foodId?: true;

    @Field(() => Boolean, {nullable:true})
    brandOwner?: true;

    @Field(() => Boolean, {nullable:true})
    gtinUpc?: true;

    @Field(() => Boolean, {nullable:true})
    ingredients?: true;

    @Field(() => Boolean, {nullable:true})
    servingSize?: true;

    @Field(() => Boolean, {nullable:true})
    servingUnit?: true;

    @Field(() => Boolean, {nullable:true})
    sourceId?: true;

    @Field(() => Boolean, {nullable:true})
    importInfoId?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
