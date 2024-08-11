import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { TranslationCountAggregate } from './translation-count-aggregate.output';
import { TranslationMinAggregate } from './translation-min-aggregate.output';
import { TranslationMaxAggregate } from './translation-max-aggregate.output';

@ObjectType()
export class AggregateTranslation {

    @Field(() => TranslationCountAggregate, {nullable:true})
    _count?: TranslationCountAggregate;

    @Field(() => TranslationMinAggregate, {nullable:true})
    _min?: TranslationMinAggregate;

    @Field(() => TranslationMaxAggregate, {nullable:true})
    _max?: TranslationMaxAggregate;
}
