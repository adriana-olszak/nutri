import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { procrastinate_job_status } from './procrastinate-job-status.enum';
import { NestedEnumprocrastinate_job_statusFilter } from './nested-enumprocrastinate-job-status-filter.input';

@InputType()
export class Enumprocrastinate_job_statusFilter {

    @Field(() => procrastinate_job_status, {nullable:true})
    equals?: keyof typeof procrastinate_job_status;

    @Field(() => [procrastinate_job_status], {nullable:true})
    in?: Array<keyof typeof procrastinate_job_status>;

    @Field(() => [procrastinate_job_status], {nullable:true})
    notIn?: Array<keyof typeof procrastinate_job_status>;

    @Field(() => NestedEnumprocrastinate_job_statusFilter, {nullable:true})
    not?: NestedEnumprocrastinate_job_statusFilter;
}
