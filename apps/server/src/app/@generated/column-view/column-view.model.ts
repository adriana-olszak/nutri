import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { TableViewDefinition } from '../table-view-definition/table-view-definition.model';

@ObjectType()
export class ColumnView {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Int, {nullable:false})
    columnId!: number;

    @Field(() => String, {nullable:false})
    columnType!: string;

    @Field(() => Int, {nullable:false})
    width!: number;

    @Field(() => Boolean, {nullable:false})
    visible!: boolean;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    filter!: string | null;

    @Field(() => String, {nullable:false})
    tableViewDefinitionId!: string;

    @Field(() => TableViewDefinition, {nullable:false})
    tableViewDefinition?: TableViewDefinition;
}
