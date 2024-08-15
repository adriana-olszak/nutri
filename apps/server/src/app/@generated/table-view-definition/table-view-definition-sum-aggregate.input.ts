import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class TableViewDefinitionSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    order?: true;
}
