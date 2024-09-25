import { registerEnumType } from '@nestjs/graphql';

export enum procrastinate_job_event_type {
    deferred = "deferred",
    started = "started",
    deferred_for_retry = "deferred_for_retry",
    failed = "failed",
    succeeded = "succeeded",
    cancelled = "cancelled",
    abort_requested = "abort_requested",
    aborted = "aborted",
    scheduled = "scheduled"
}


registerEnumType(procrastinate_job_event_type, { name: 'procrastinate_job_event_type', description: undefined })
