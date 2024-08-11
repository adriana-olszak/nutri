import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class BrandedFoodMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    foodId?: string;

    @Field(() => String, {nullable:true})
    brandOwner?: string;

    @Field(() => String, {nullable:true})
    gtinUpc?: string;

    @Field(() => String, {nullable:true})
    ingredients?: string;

    @Field(() => Float, {nullable:true})
    servingSize?: number;

    @Field(() => String, {nullable:true})
    servingUnit?: string;

    @Field(() => String, {nullable:true})
    sourceId?: string;

    @Field(() => String, {nullable:true})
    importInfoId?: string;
}
