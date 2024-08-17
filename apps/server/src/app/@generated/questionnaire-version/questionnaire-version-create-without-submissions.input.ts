import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { QuestionnaireCreateNestedOneWithoutVersionsInput } from '../questionnaire/questionnaire-create-nested-one-without-versions.input';
import { SectionCreateNestedManyWithoutQuestionnaireVersionInput } from '../section/section-create-nested-many-without-questionnaire-version.input';

@InputType()
export class QuestionnaireVersionCreateWithoutSubmissionsInput {

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

    @Field(() => QuestionnaireCreateNestedOneWithoutVersionsInput, {nullable:false})
    questionnaire!: QuestionnaireCreateNestedOneWithoutVersionsInput;

    @Field(() => SectionCreateNestedManyWithoutQuestionnaireVersionInput, {nullable:true})
    sections?: SectionCreateNestedManyWithoutQuestionnaireVersionInput;
}
