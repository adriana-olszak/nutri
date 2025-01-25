import { WorkerHost } from '@nestjs/bullmq';
import { Injectable } from '@nestjs/common';
import { StatsDService } from '@nutri/server-metrics';
import { Job } from 'bullmq';
import { ClsService } from 'nestjs-cls';
import { IJobProcessor } from './background-job-processor.interface';

@Injectable()
export abstract class BackgroundJobProcessorBase<JobType extends Job>
  extends WorkerHost
  implements IJobProcessor {
  protected constructor(
    /**
     * [Applies to metrics, cls]
     *
     * Public to fulfill interface requirements and enable type-safe usage in decorators.
     * This violates encapsulation, but is necessary for our current architecture.
     * Please respect the intended usage and avoid direct access outside of decorators.
     */
    public readonly metrics: StatsDService,
    public readonly cls: ClsService,
  ) {
    super();
  }

  abstract override process(job: JobType): Promise<any>;
}
