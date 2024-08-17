import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubmissionCreateManyInput } from './submission-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManySubmissionArgs {

    @Field(() => [SubmissionCreateManyInput], {nullable:false})
    @Type(() => SubmissionCreateManyInput)
    data!: Array<SubmissionCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
