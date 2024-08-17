import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { QuestionnaireVersionCountAggregate } from './questionnaire-version-count-aggregate.output';
import { QuestionnaireVersionAvgAggregate } from './questionnaire-version-avg-aggregate.output';
import { QuestionnaireVersionSumAggregate } from './questionnaire-version-sum-aggregate.output';
import { QuestionnaireVersionMinAggregate } from './questionnaire-version-min-aggregate.output';
import { QuestionnaireVersionMaxAggregate } from './questionnaire-version-max-aggregate.output';

@ObjectType()
export class AggregateQuestionnaireVersion {

    @Field(() => QuestionnaireVersionCountAggregate, {nullable:true})
    _count?: QuestionnaireVersionCountAggregate;

    @Field(() => QuestionnaireVersionAvgAggregate, {nullable:true})
    _avg?: QuestionnaireVersionAvgAggregate;

    @Field(() => QuestionnaireVersionSumAggregate, {nullable:true})
    _sum?: QuestionnaireVersionSumAggregate;

    @Field(() => QuestionnaireVersionMinAggregate, {nullable:true})
    _min?: QuestionnaireVersionMinAggregate;

    @Field(() => QuestionnaireVersionMaxAggregate, {nullable:true})
    _max?: QuestionnaireVersionMaxAggregate;
}
