import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class QuestionSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    order?: true;
}
