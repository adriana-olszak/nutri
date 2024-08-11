import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { SeasonCountAggregate } from './season-count-aggregate.output';
import { SeasonMinAggregate } from './season-min-aggregate.output';
import { SeasonMaxAggregate } from './season-max-aggregate.output';

@ObjectType()
export class SeasonGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => SeasonCountAggregate, {nullable:true})
    _count?: SeasonCountAggregate;

    @Field(() => SeasonMinAggregate, {nullable:true})
    _min?: SeasonMinAggregate;

    @Field(() => SeasonMaxAggregate, {nullable:true})
    _max?: SeasonMaxAggregate;
}
