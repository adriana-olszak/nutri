import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class TableViewDefinitionCreateManyInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    userId?: string;

    @Field(() => String, {nullable:false})
    tableId!: string;

    @Field(() => String, {nullable:false})
    tableType!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Int, {nullable:false})
    order!: number;

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
