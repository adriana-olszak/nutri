import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ImportInfoCountAggregate } from './import-info-count-aggregate.output';
import { ImportInfoMinAggregate } from './import-info-min-aggregate.output';
import { ImportInfoMaxAggregate } from './import-info-max-aggregate.output';

@ObjectType()
export class AggregateImportInfo {

    @Field(() => ImportInfoCountAggregate, {nullable:true})
    _count?: ImportInfoCountAggregate;

    @Field(() => ImportInfoMinAggregate, {nullable:true})
    _min?: ImportInfoMinAggregate;

    @Field(() => ImportInfoMaxAggregate, {nullable:true})
    _max?: ImportInfoMaxAggregate;
}
