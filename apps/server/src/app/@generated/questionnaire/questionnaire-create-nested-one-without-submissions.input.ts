import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionnaireCreateWithoutSubmissionsInput } from './questionnaire-create-without-submissions.input';
import { Type } from 'class-transformer';
import { QuestionnaireCreateOrConnectWithoutSubmissionsInput } from './questionnaire-create-or-connect-without-submissions.input';
import { Prisma } from '@prisma/client';
import { QuestionnaireWhereUniqueInput } from './questionnaire-where-unique.input';

@InputType()
export class QuestionnaireCreateNestedOneWithoutSubmissionsInput {

    @Field(() => QuestionnaireCreateWithoutSubmissionsInput, {nullable:true})
    @Type(() => QuestionnaireCreateWithoutSubmissionsInput)
    create?: QuestionnaireCreateWithoutSubmissionsInput;

    @Field(() => QuestionnaireCreateOrConnectWithoutSubmissionsInput, {nullable:true})
    @Type(() => QuestionnaireCreateOrConnectWithoutSubmissionsInput)
    connectOrCreate?: QuestionnaireCreateOrConnectWithoutSubmissionsInput;

    @Field(() => QuestionnaireWhereUniqueInput, {nullable:true})
    @Type(() => QuestionnaireWhereUniqueInput)
    connect?: Prisma.AtLeast<QuestionnaireWhereUniqueInput, 'id'>;
}
