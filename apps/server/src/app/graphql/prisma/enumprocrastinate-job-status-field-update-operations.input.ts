import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { procrastinate_job_status } from './procrastinate-job-status.enum';

@InputType()
export class Enumprocrastinate_job_statusFieldUpdateOperationsInput {

    @Field(() => procrastinate_job_status, {nullable:true})
    set?: keyof typeof procrastinate_job_status;
}
