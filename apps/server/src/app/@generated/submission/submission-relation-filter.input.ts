import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubmissionWhereInput } from './submission-where.input';

@InputType()
export class SubmissionRelationFilter {

    @Field(() => SubmissionWhereInput, {nullable:true})
    is?: SubmissionWhereInput;

    @Field(() => SubmissionWhereInput, {nullable:true})
    isNot?: SubmissionWhereInput;
}
