import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class SubmissionMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    questionnaireId?: true;

    @Field(() => Boolean, {nullable:true})
    questionnaireVersionId?: true;

    @Field(() => Boolean, {nullable:true})
    userId?: true;

    @Field(() => Boolean, {nullable:true})
    isComplete?: true;

    @Field(() => Boolean, {nullable:true})
    startedAt?: true;

    @Field(() => Boolean, {nullable:true})
    completedAt?: true;
}
