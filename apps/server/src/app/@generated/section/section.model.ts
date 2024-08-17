import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { QuestionnaireVersion } from '../questionnaire-version/questionnaire-version.model';
import { Question } from '../question/question.model';
import { SectionCount } from './section-count.output';

@ObjectType()
export class Section {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    questionnaireVersionId!: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => Int, {nullable:false})
    order!: number;

    @Field(() => QuestionnaireVersion, {nullable:false})
    questionnaireVersion?: QuestionnaireVersion;

    @Field(() => [Question], {nullable:true})
    questions?: Array<Question>;

    @Field(() => SectionCount, {nullable:false})
    _count?: SectionCount;
}
