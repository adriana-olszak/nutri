import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { TranslationCountAggregate } from './translation-count-aggregate.output';
import { TranslationMinAggregate } from './translation-min-aggregate.output';
import { TranslationMaxAggregate } from './translation-max-aggregate.output';

@ObjectType()
export class TranslationGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    entityType!: string;

    @Field(() => String, {nullable:false})
    entityId!: string;

    @Field(() => String, {nullable:false})
    field!: string;

    @Field(() => String, {nullable:false})
    value!: string;

    @Field(() => String, {nullable:false})
    languageCode!: string;

    @Field(() => TranslationCountAggregate, {nullable:true})
    _count?: TranslationCountAggregate;

    @Field(() => TranslationMinAggregate, {nullable:true})
    _min?: TranslationMinAggregate;

    @Field(() => TranslationMaxAggregate, {nullable:true})
    _max?: TranslationMaxAggregate;
}
