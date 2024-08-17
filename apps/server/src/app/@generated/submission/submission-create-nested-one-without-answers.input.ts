import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubmissionCreateWithoutAnswersInput } from './submission-create-without-answers.input';
import { Type } from 'class-transformer';
import { SubmissionCreateOrConnectWithoutAnswersInput } from './submission-create-or-connect-without-answers.input';
import { Prisma } from '@prisma/client';
import { SubmissionWhereUniqueInput } from './submission-where-unique.input';

@InputType()
export class SubmissionCreateNestedOneWithoutAnswersInput {

    @Field(() => SubmissionCreateWithoutAnswersInput, {nullable:true})
    @Type(() => SubmissionCreateWithoutAnswersInput)
    create?: SubmissionCreateWithoutAnswersInput;

    @Field(() => SubmissionCreateOrConnectWithoutAnswersInput, {nullable:true})
    @Type(() => SubmissionCreateOrConnectWithoutAnswersInput)
    connectOrCreate?: SubmissionCreateOrConnectWithoutAnswersInput;

    @Field(() => SubmissionWhereUniqueInput, {nullable:true})
    @Type(() => SubmissionWhereUniqueInput)
    connect?: Prisma.AtLeast<SubmissionWhereUniqueInput, 'id'>;
}
