import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class TableViewDefinitionMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    userId?: string;

    @Field(() => String, {nullable:true})
    tableId?: string;

    @Field(() => String, {nullable:true})
    tableType?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => Int, {nullable:true})
    order?: number;

    @Field(() => String, {nullable:true})
    icon?: string;

    @Field(() => String, {nullable:true})
    filters?: string;

    @Field(() => String, {nullable:true})
    sorting?: string;

    @Field(() => Boolean, {nullable:true})
    isPreset?: boolean;

    @Field(() => Boolean, {nullable:true})
    isShared?: boolean;
}
