import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ColumnViewAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    columnId?: true;

    @Field(() => Boolean, {nullable:true})
    width?: true;
}
