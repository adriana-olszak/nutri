import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class TableViewDefinitionCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    userId?: true;

    @Field(() => Boolean, {nullable:true})
    tableId?: true;

    @Field(() => Boolean, {nullable:true})
    tableType?: true;

    @Field(() => Boolean, {nullable:true})
    name?: true;

    @Field(() => Boolean, {nullable:true})
    order?: true;

    @Field(() => Boolean, {nullable:true})
    icon?: true;

    @Field(() => Boolean, {nullable:true})
    filters?: true;

    @Field(() => Boolean, {nullable:true})
    sorting?: true;

    @Field(() => Boolean, {nullable:true})
    isPreset?: true;

    @Field(() => Boolean, {nullable:true})
    isShared?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
