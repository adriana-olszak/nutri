import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { procrastinate_job_status } from './procrastinate-job-status.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumprocrastinate_job_statusFilter } from './nested-enumprocrastinate-job-status-filter.input';

@InputType()
export class NestedEnumprocrastinate_job_statusWithAggregatesFilter {

    @Field(() => procrastinate_job_status, {nullable:true})
    equals?: keyof typeof procrastinate_job_status;

    @Field(() => [procrastinate_job_status], {nullable:true})
    in?: Array<keyof typeof procrastinate_job_status>;

    @Field(() => [procrastinate_job_status], {nullable:true})
    notIn?: Array<keyof typeof procrastinate_job_status>;

    @Field(() => NestedEnumprocrastinate_job_statusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumprocrastinate_job_statusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumprocrastinate_job_statusFilter, {nullable:true})
    _min?: NestedEnumprocrastinate_job_statusFilter;

    @Field(() => NestedEnumprocrastinate_job_statusFilter, {nullable:true})
    _max?: NestedEnumprocrastinate_job_statusFilter;
}
