import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class SubmissionCreateManyUserInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    questionnaireId!: string;

    @Field(() => String, {nullable:false})
    questionnaireVersionId!: string;

    @Field(() => Boolean, {nullable:true})
    isComplete?: boolean;

    @Field(() => Date, {nullable:true})
    startedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    completedAt?: Date | string;
}
