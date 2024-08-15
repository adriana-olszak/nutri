import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ColumnViewMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Int, {nullable:true})
    columnId?: number;

    @Field(() => String, {nullable:true})
    columnType?: string;

    @Field(() => Int, {nullable:true})
    width?: number;

    @Field(() => Boolean, {nullable:true})
    visible?: boolean;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    filter?: string;

    @Field(() => String, {nullable:true})
    tableViewDefinitionId?: string;
}
