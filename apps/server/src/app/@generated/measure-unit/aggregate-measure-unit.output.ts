import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { MeasureUnitCountAggregate } from './measure-unit-count-aggregate.output';
import { MeasureUnitMinAggregate } from './measure-unit-min-aggregate.output';
import { MeasureUnitMaxAggregate } from './measure-unit-max-aggregate.output';

@ObjectType()
export class AggregateMeasureUnit {

    @Field(() => MeasureUnitCountAggregate, {nullable:true})
    _count?: MeasureUnitCountAggregate;

    @Field(() => MeasureUnitMinAggregate, {nullable:true})
    _min?: MeasureUnitMinAggregate;

    @Field(() => MeasureUnitMaxAggregate, {nullable:true})
    _max?: MeasureUnitMaxAggregate;
}
