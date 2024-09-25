import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { procrastinate_job_event_type } from './procrastinate-job-event-type.enum';
import { NestedEnumprocrastinate_job_event_typeNullableWithAggregatesFilter } from './nested-enumprocrastinate-job-event-type-nullable-with-aggregates-filter.input';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedEnumprocrastinate_job_event_typeNullableFilter } from './nested-enumprocrastinate-job-event-type-nullable-filter.input';

@InputType()
export class Enumprocrastinate_job_event_typeNullableWithAggregatesFilter {

    @Field(() => procrastinate_job_event_type, {nullable:true})
    equals?: keyof typeof procrastinate_job_event_type;

    @Field(() => [procrastinate_job_event_type], {nullable:true})
    in?: Array<keyof typeof procrastinate_job_event_type>;

    @Field(() => [procrastinate_job_event_type], {nullable:true})
    notIn?: Array<keyof typeof procrastinate_job_event_type>;

    @Field(() => NestedEnumprocrastinate_job_event_typeNullableWithAggregatesFilter, {nullable:true})
    not?: NestedEnumprocrastinate_job_event_typeNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: NestedIntNullableFilter;

    @Field(() => NestedEnumprocrastinate_job_event_typeNullableFilter, {nullable:true})
    _min?: NestedEnumprocrastinate_job_event_typeNullableFilter;

    @Field(() => NestedEnumprocrastinate_job_event_typeNullableFilter, {nullable:true})
    _max?: NestedEnumprocrastinate_job_event_typeNullableFilter;
}
