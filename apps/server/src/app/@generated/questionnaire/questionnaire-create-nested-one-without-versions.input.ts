import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionnaireCreateWithoutVersionsInput } from './questionnaire-create-without-versions.input';
import { Type } from 'class-transformer';
import { QuestionnaireCreateOrConnectWithoutVersionsInput } from './questionnaire-create-or-connect-without-versions.input';
import { Prisma } from '@prisma/client';
import { QuestionnaireWhereUniqueInput } from './questionnaire-where-unique.input';

@InputType()
export class QuestionnaireCreateNestedOneWithoutVersionsInput {

    @Field(() => QuestionnaireCreateWithoutVersionsInput, {nullable:true})
    @Type(() => QuestionnaireCreateWithoutVersionsInput)
    create?: QuestionnaireCreateWithoutVersionsInput;

    @Field(() => QuestionnaireCreateOrConnectWithoutVersionsInput, {nullable:true})
    @Type(() => QuestionnaireCreateOrConnectWithoutVersionsInput)
    connectOrCreate?: QuestionnaireCreateOrConnectWithoutVersionsInput;

    @Field(() => QuestionnaireWhereUniqueInput, {nullable:true})
    @Type(() => QuestionnaireWhereUniqueInput)
    connect?: Prisma.AtLeast<QuestionnaireWhereUniqueInput, 'id'>;
}
