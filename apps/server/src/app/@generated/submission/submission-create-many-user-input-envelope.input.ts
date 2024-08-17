import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubmissionCreateManyUserInput } from './submission-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class SubmissionCreateManyUserInputEnvelope {

    @Field(() => [SubmissionCreateManyUserInput], {nullable:false})
    @Type(() => SubmissionCreateManyUserInput)
    data!: Array<SubmissionCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
