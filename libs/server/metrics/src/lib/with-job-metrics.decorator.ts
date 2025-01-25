import { StatsDService } from './stats-d.service';
import { AGGREGATED_METRICS } from './consts';

/**
 * Records metrics about the job processing
 *
 * It will get job name, queue name, user_id and job_id
 * from the context using StatsDService. Those values will be set as tags in the metrics.
 */
export function WithJobMetrics() {
  return function(
    _: { metrics: StatsDService },
    __: string,
    descriptor: PropertyDescriptor,
  ) {
    const originalMethod = descriptor.value;
    descriptor.value = async function withJobMetricsCb(
      this: { metrics: StatsDService },
      ...args: any[]
    ) {
      const metrics: StatsDService = this.metrics;

      if (!metrics) {
        throw new Error(
          'StatsDService not injected in the class',
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
