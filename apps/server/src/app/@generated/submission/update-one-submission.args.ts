import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubmissionUpdateInput } from './submission-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { SubmissionWhereUniqueInput } from './submission-where-unique.input';

@ArgsType()
export class UpdateOneSubmissionArgs {

    @Field(() => SubmissionUpdateInput, {nullable:false})
    @Type(() => SubmissionUpdateInput)
    data!: SubmissionUpdateInput;

    @Field(() => SubmissionWhereUniqueInput, {nullable:false})
    @Type(() => SubmissionWhereUniqueInput)
    where!: Prisma.AtLeast<SubmissionWhereUniqueInput, 'id'>;
}
