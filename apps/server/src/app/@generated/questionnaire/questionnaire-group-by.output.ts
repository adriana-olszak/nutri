import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { QuestionnaireCountAggregate } from './questionnaire-count-aggregate.output';
import { QuestionnaireMinAggregate } from './questionnaire-min-aggregate.output';
import { QuestionnaireMaxAggregate } from './questionnaire-max-aggregate.output';

@ObjectType()
export class QuestionnaireGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    tenantId?: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Boolean, {nullable:false})
    isPublic!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => QuestionnaireCountAggregate, {nullable:true})
    _count?: QuestionnaireCountAggregate;

    @Field(() => QuestionnaireMinAggregate, {nullable:true})
    _min?: QuestionnaireMinAggregate;

    @Field(() => QuestionnaireMaxAggregate, {nullable:true})
    _max?: QuestionnaireMaxAggregate;
}
