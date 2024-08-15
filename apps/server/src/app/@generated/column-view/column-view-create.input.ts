import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { TableViewDefinitionCreateNestedOneWithoutColumnViewInput } from '../table-view-definition/table-view-definition-create-nested-one-without-column-view.input';

@InputType()
export class ColumnViewCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

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
    filter?: string;

    @Field(() => TableViewDefinitionCreateNestedOneWithoutColumnViewInput, {nullable:false})
    tableViewDefinition!: TableViewDefinitionCreateNestedOneWithoutColumnViewInput;
}
