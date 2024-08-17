import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { QuestionnaireCountAggregate } from './questionnaire-count-aggregate.output';
import { QuestionnaireMinAggregate } from './questionnaire-min-aggregate.output';
import { QuestionnaireMaxAggregate } from './questionnaire-max-aggregate.output';

@ObjectType()
export class AggregateQuestionnaire {

    @Field(() => QuestionnaireCountAggregate, {nullable:true})
    _count?: QuestionnaireCountAggregate;

    @Field(() => QuestionnaireMinAggregate, {nullable:true})
    _min?: QuestionnaireMinAggregate;

    @Field(() => QuestionnaireMaxAggregate, {nullable:true})
    _max?: QuestionnaireMaxAggregate;
}
