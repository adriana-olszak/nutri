import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubmissionWhereInput } from './submission-where.input';

@InputType()
export class SubmissionListRelationFilter {

    @Field(() => SubmissionWhereInput, {nullable:true})
    every?: SubmissionWhereInput;

    @Field(() => SubmissionWhereInput, {nullable:true})
    some?: SubmissionWhereInput;

    @Field(() => SubmissionWhereInput, {nullable:true})
    none?: SubmissionWhereInput;
}
