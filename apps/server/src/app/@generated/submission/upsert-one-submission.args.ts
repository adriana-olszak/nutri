import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SubmissionWhereUniqueInput } from './submission-where-unique.input';
import { Type } from 'class-transformer';
import { SubmissionCreateInput } from './submission-create.input';
import { SubmissionUpdateInput } from './submission-update.input';

@ArgsType()
export class UpsertOneSubmissionArgs {

    @Field(() => SubmissionWhereUniqueInput, {nullable:false})
    @Type(() => SubmissionWhereUniqueInput)
    where!: Prisma.AtLeast<SubmissionWhereUniqueInput, 'id'>;

    @Field(() => SubmissionCreateInput, {nullable:false})
    @Type(() => SubmissionCreateInput)
    create!: SubmissionCreateInput;

    @Field(() => SubmissionUpdateInput, {nullable:false})
    @Type(() => SubmissionUpdateInput)
    update!: SubmissionUpdateInput;
}
