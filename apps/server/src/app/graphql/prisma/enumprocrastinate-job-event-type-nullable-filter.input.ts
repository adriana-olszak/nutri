import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { procrastinate_job_event_type } from './procrastinate-job-event-type.enum';
import { NestedEnumprocrastinate_job_event_typeNullableFilter } from './nested-enumprocrastinate-job-event-type-nullable-filter.input';

@InputType()
export class Enumprocrastinate_job_event_typeNullableFilter {

    @Field(() => procrastinate_job_event_type, {nullable:true})
    equals?: keyof typeof procrastinate_job_event_type;

    @Field(() => [procrastinate_job_event_type], {nullable:true})
    in?: Array<keyof typeof procrastinate_job_event_type>;

    @Field(() => [procrastinate_job_event_type], {nullable:true})
    notIn?: Array<keyof typeof procrastinate_job_event_type>;

    @Field(() => NestedEnumprocrastinate_job_event_typeNullableFilter, {nullable:true})
    not?: NestedEnumprocrastinate_job_event_typeNullableFilter;
}
