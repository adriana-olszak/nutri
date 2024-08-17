import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { SectionUncheckedCreateNestedManyWithoutQuestionnaireVersionInput } from '../section/section-unchecked-create-nested-many-without-questionnaire-version.input';

@InputType()
export class QuestionnaireVersionUncheckedCreateWithoutSubmissionsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    questionnaireId!: string;

    @Field(() => Int, {nullable:false})
    versionNumber!: number;

    @Field(() => Boolean, {nullable:true})
    isActive?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => SectionUncheckedCreateNestedManyWithoutQuestionnaireVersionInput, {nullable:true})
    sections?: SectionUncheckedCreateNestedManyWithoutQuestionnaireVersionInput;
}
