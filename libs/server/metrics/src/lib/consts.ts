export const METRIC_PREFIX = 'nutri';

export const AGGREGATED_METRICS = {
  QUEUE_METRICS: `${METRIC_PREFIX}.queue`,
  QUEUE_METRICS_DURATION: `${METRIC_PREFIX}.queue.duration`,
  QUEUE_STATS_METRICS: `${METRIC_PREFIX}.queue_stats`,
  SLA_HEALTH_SCORE: `${METRIC_PREFIX}.sla.health_score`,
  SLA_PROCESSED_COUNT: `${METRIC_PREFIX}.sla.processed_count`,
};
