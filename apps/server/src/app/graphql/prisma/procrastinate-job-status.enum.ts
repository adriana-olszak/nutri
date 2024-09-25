import { registerEnumType } from '@nestjs/graphql';

export enum procrastinate_job_status {
    todo = "todo",
    doing = "doing",
    succeeded = "succeeded",
    failed = "failed",
    cancelled = "cancelled",
    aborting = "aborting",
    aborted = "aborted"
}


registerEnumType(procrastinate_job_status, { name: 'procrastinate_job_status', description: undefined })
