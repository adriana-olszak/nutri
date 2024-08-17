import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionnaireVersionCreateWithoutSubmissionsInput } from './questionnaire-version-create-without-submissions.input';
import { Type } from 'class-transformer';
import { QuestionnaireVersionCreateOrConnectWithoutSubmissionsInput } from './questionnaire-version-create-or-connect-without-submissions.input';
import { Prisma } from '@prisma/client';
import { QuestionnaireVersionWhereUniqueInput } from './questionnaire-version-where-unique.input';

@InputType()
export class QuestionnaireVersionCreateNestedOneWithoutSubmissionsInput {

    @Field(() => QuestionnaireVersionCreateWithoutSubmissionsInput, {nullable:true})
    @Type(() => QuestionnaireVersionCreateWithoutSubmissionsInput)
    create?: QuestionnaireVersionCreateWithoutSubmissionsInput;

    @Field(() => QuestionnaireVersionCreateOrConnectWithoutSubmissionsInput, {nullable:true})
    @Type(() => QuestionnaireVersionCreateOrConnectWithoutSubmissionsInput)
    connectOrCreate?: QuestionnaireVersionCreateOrConnectWithoutSubmissionsInput;

    @Field(() => QuestionnaireVersionWhereUniqueInput, {nullable:true})
    @Type(() => QuestionnaireVersionWhereUniqueInput)
    connect?: Prisma.AtLeast<QuestionnaireVersionWhereUniqueInput, 'id' | 'questionnaireId_versionNumber'>;
}
