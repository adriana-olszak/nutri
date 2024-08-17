import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { SectionCreateNestedManyWithoutQuestionnaireVersionInput } from '../section/section-create-nested-many-without-questionnaire-version.input';
import { SubmissionCreateNestedManyWithoutQuestionnaireVersionInput } from '../submission/submission-create-nested-many-without-questionnaire-version.input';

@InputType()
export class QuestionnaireVersionCreateWithoutQuestionnaireInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Int, {nullable:false})
    versionNumber!: number;

    @Field(() => Boolean, {nullable:true})
    isActive?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => SectionCreateNestedManyWithoutQuestionnaireVersionInput, {nullable:true})
    sections?: SectionCreateNestedManyWithoutQuestionnaireVersionInput;

    @Field(() => SubmissionCreateNestedManyWithoutQuestionnaireVersionInput, {nullable:true})
    submissions?: SubmissionCreateNestedManyWithoutQuestionnaireVersionInput;
}
