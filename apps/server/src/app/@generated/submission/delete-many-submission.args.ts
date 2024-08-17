import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubmissionWhereInput } from './submission-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManySubmissionArgs {

    @Field(() => SubmissionWhereInput, {nullable:true})
    @Type(() => SubmissionWhereInput)
    where?: SubmissionWhereInput;
}
