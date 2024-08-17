import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubmissionCreateInput } from './submission-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneSubmissionArgs {

    @Field(() => SubmissionCreateInput, {nullable:false})
    @Type(() => SubmissionCreateInput)
    data!: SubmissionCreateInput;
}
