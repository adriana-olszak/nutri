import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubmissionCreateWithoutAnswersInput } from './submission-create-without-answers.input';
import { Type } from 'class-transformer';
import { SubmissionCreateOrConnectWithoutAnswersInput } from './submission-create-or-connect-without-answers.input';
import { SubmissionUpsertWithoutAnswersInput } from './submission-upsert-without-answers.input';
import { Prisma } from '@prisma/client';
import { SubmissionWhereUniqueInput } from './submission-where-unique.input';
import { SubmissionUpdateToOneWithWhereWithoutAnswersInput } from './submission-update-to-one-with-where-without-answers.input';

@InputType()
export class SubmissionUpdateOneRequiredWithoutAnswersNestedInput {

    @Field(() => SubmissionCreateWithoutAnswersInput, {nullable:true})
    @Type(() => SubmissionCreateWithoutAnswersInput)
    create?: SubmissionCreateWithoutAnswersInput;

    @Field(() => SubmissionCreateOrConnectWithoutAnswersInput, {nullable:true})
    @Type(() => SubmissionCreateOrConnectWithoutAnswersInput)
    connectOrCreate?: SubmissionCreateOrConnectWithoutAnswersInput;

    @Field(() => SubmissionUpsertWithoutAnswersInput, {nullable:true})
    @Type(() => SubmissionUpsertWithoutAnswersInput)
    upsert?: SubmissionUpsertWithoutAnswersInput;

    @Field(() => SubmissionWhereUniqueInput, {nullable:true})
    @Type(() => SubmissionWhereUniqueInput)
    connect?: Prisma.AtLeast<SubmissionWhereUniqueInput, 'id'>;

    @Field(() => SubmissionUpdateToOneWithWhereWithoutAnswersInput, {nullable:true})
    @Type(() => SubmissionUpdateToOneWithWhereWithoutAnswersInput)
    update?: SubmissionUpdateToOneWithWhereWithoutAnswersInput;
}
