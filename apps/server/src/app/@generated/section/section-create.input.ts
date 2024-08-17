import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { QuestionnaireVersionCreateNestedOneWithoutSectionsInput } from '../questionnaire-version/questionnaire-version-create-nested-one-without-sections.input';
import { QuestionCreateNestedManyWithoutSectionInput } from '../question/question-create-nested-many-without-section.input';

@InputType()
export class SectionCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Int, {nullable:false})
    order!: number;

    @Field(() => QuestionnaireVersionCreateNestedOneWithoutSectionsInput, {nullable:false})
    questionnaireVersion!: QuestionnaireVersionCreateNestedOneWithoutSectionsInput;

    @Field(() => QuestionCreateNestedManyWithoutSectionInput, {nullable:true})
    questions?: QuestionCreateNestedManyWithoutSectionInput;
}
