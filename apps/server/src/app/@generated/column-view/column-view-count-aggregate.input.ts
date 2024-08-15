import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ColumnViewCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    columnId?: true;

    @Field(() => Boolean, {nullable:true})
    columnType?: true;

    @Field(() => Boolean, {nullable:true})
    width?: true;

    @Field(() => Boolean, {nullable:true})
    visible?: true;

    @Field(() => Boolean, {nullable:true})
    name?: true;

    @Field(() => Boolean, {nullable:true})
    filter?: true;

    @Field(() => Boolean, {nullable:true})
    tableViewDefinitionId?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
