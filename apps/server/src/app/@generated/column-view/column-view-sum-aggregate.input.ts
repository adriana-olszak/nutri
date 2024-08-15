import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ColumnViewSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    columnId?: true;

    @Field(() => Boolean, {nullable:true})
    width?: true;
}
