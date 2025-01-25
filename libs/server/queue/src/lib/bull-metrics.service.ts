import { TOKEN_AVAILABLE_QUEUES } from './available-queues.provider';
import { Inject, Injectable } from '@nestjs/common';
import { Queue } from 'bullmq';
import { StatsD } from 'hot-shots';
import { AGGREGATED_METRICS } from '@nutri/server-metrics';

@Injectable()
export class BullMetricsService {
  constructor(
    private readonly metrics: StatsD,
    @Inject(TOKEN_AVAILABLE_QUEUES) private readonly queues: Queue[],
  ) {
  }

  async collectMetrics() {
    return await Promise.all(
      this.queues.map(async (queue) => {
        this.metrics.gauge(
          AGGREGATED_METRICS.QUEUE_STATS_METRICS,
          await queue.getActiveCount(),
          { queue: queue.name, state: 'active' },
        );
        this.metrics.gauge(
          AGGREGATED_METRICS.QUEUE_STATS_METRICS,
          await queue.getDelayedCount(),
          { queue: queue.name, state: 'delayed' },
        );
        this.metrics.gauge(
          AGGREGATED_METRICS.QUEUE_STATS_METRICS,
          await queue.getCompletedCount(),
          { queue: queue.name, state: 'completed' },
        );
        this.metrics.gauge(
          AGGREGATED_METRICS.QUEUE_STATS_METRICS,
          await queue.getWaitingCount(),
          { queue: queue.name, state: 'waiting' },
        );
        this.metrics.gauge(
          AGGREGATED_METRICS.QUEUE_STATS_METRICS,
          await queue.getFailedCount(),
          { queue: queue.name, state: 'failed' },
        );
      }),
    );
  }
}
