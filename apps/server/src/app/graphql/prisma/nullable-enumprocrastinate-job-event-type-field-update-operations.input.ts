import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { procrastinate_job_event_type } from './procrastinate-job-event-type.enum';

@InputType()
export class NullableEnumprocrastinate_job_event_typeFieldUpdateOperationsInput {

    @Field(() => procrastinate_job_event_type, {nullable:true})
    set?: keyof typeof procrastinate_job_event_type;
}
