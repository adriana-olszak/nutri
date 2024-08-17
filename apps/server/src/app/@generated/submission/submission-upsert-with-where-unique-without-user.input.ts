import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SubmissionWhereUniqueInput } from './submission-where-unique.input';
import { Type } from 'class-transformer';
import { SubmissionUpdateWithoutUserInput } from './submission-update-without-user.input';
import { SubmissionCreateWithoutUserInput } from './submission-create-without-user.input';

@InputType()
export class SubmissionUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => SubmissionWhereUniqueInput, {nullable:false})
    @Type(() => SubmissionWhereUniqueInput)
    where!: Prisma.AtLeast<SubmissionWhereUniqueInput, 'id'>;

    @Field(() => SubmissionUpdateWithoutUserInput, {nullable:false})
    @Type(() => SubmissionUpdateWithoutUserInput)
    update!: SubmissionUpdateWithoutUserInput;

    @Field(() => SubmissionCreateWithoutUserInput, {nullable:false})
    @Type(() => SubmissionCreateWithoutUserInput)
    create!: SubmissionCreateWithoutUserInput;
}
