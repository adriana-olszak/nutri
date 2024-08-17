import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { QuestionnaireVersionCreateNestedOneWithoutSectionsInput } from '../questionnaire-version/questionnaire-version-create-nested-one-without-sections.input';

@InputType()
export class SectionCreateWithoutQuestionsInput {

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
}
