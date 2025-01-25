import { ArgumentInvalidException } from '@app/core/domain/exceptions';
import { AsyncStatsDService } from '@app/infra/metrics/async-stats-d.service';
import { AGGREGATED_METRICS } from '@app/infra/metrics/consts';
import { IJobProcessor } from '@app/infra/queue/background-job-processor.interface';

/**
 * Records metrics about the job processing
 *
 * It will get job name, queue name, user_id and job_id
 * from the context using AsyncStatsDService. Those values will be set as tags in the metrics.
 */
export function WithJobMetrics() {
  return function (
    _: IJobProcessor,
    __: string,
    descriptor: PropertyDescriptor,
  ) {
    const originalMethod = descriptor.value;
    descriptor.value = async function withJobMetricsCb(
      this: IJobProcessor,
      ...args: any[]
    ) {
      const metrics: AsyncStatsDService = this.metrics;

      if (!metrics) {
        throw new ArgumentInvalidException(
          'AsyncStatsDService not injected in the class',
        );
      }

      const startTime = Date.now();
      metrics.increment(AGGREGATED_METRICS.QUEUE_METRICS, 1, {
        operation_stage: 'started',
      });

      try {
        const result = await originalMethod.apply(this, args);
        metrics.increment(AGGREGATED_METRICS.QUEUE_METRICS, 1, {
          operation_stage: 'succeeded',
        });
        return result;
      } catch (error) {
        metrics.increment(AGGREGATED_METRICS.QUEUE_METRICS, 1, {
          operationStage: 'failed',
        });
        throw error;
      } finally {
        metrics.histogram(
          AGGREGATED_METRICS.QUEUE_METRICS_DURATION,
          Date.now() - startTime,
        );
      }
    };
    return descriptor;
  };
}
