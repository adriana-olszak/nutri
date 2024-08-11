import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class FoodCategoryMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    code?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:true})
    parentCategoryId?: string;

    @Field(() => Int, {nullable:true})
    level?: number;

    @Field(() => String, {nullable:true})
    sourceId?: string;

    @Field(() => String, {nullable:true})
    importInfoId?: string;
}
