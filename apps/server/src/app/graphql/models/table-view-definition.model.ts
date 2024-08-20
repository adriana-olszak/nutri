import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ColumnView } from './column-view.model';

@ObjectType()
export class TableViewDefinition {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:true})
    userId!: string | null;

    @Field(() => String, {nullable:false})
    tableId!: string;

    @Field(() => String, {nullable:false})
    tableType!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Int, {nullable:false})
    order!: number;

    @Field(() => String, {nullable:true})
    icon!: string | null;

    @Field(() => String, {nullable:true})
    filters!: string | null;

    @Field(() => String, {nullable:true})
    sorting!: string | null;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    isPreset!: boolean;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    isShared!: boolean;

    @Field(() => [ColumnView], {nullable:true})
    columnView?: Array<ColumnView>;
}
