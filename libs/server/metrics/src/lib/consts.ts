const METRIC_PREFIX = 'billing_scheduler';

export const LOCK_SERVICE_METRICS = {
  NESTED_LOCK_ATTEMPTS: `${METRIC_PREFIX}.lock_service.nested_lock_attempts`,
  LOCKS_ACQUIRED: `${METRIC_PREFIX}.lock_service.locks_acquired`,
  LOCKS_EXTENDED: `${METRIC_PREFIX}.lock_service.locks_extended`,
  LOCKS_ABORTED: `${METRIC_PREFIX}.lock_service.locks_aborted`,
  EXECUTION_TIME: `${METRIC_PREFIX}.lock_service.execution_time`,
  EXTENSION_TIME: `${METRIC_PREFIX}.lock_service.extension_time`,
  ERRORS: `${METRIC_PREFIX}.lock_service.error`,
};

export const AGGREGATED_METRICS = {
  GROUPS_STUCK: `${METRIC_PREFIX}.groups_stuck`,
  MOVEMENTS_PLANNED: `${METRIC_PREFIX}.movements_planned`,
  QUEUE_METRICS: `${METRIC_PREFIX}.queue`,
  QUEUE_METRICS_DURATION: `${METRIC_PREFIX}.queue.processing_time`,
  SLA_HEALTH_SCORE: `${METRIC_PREFIX}.sla.health_score`,
  SLA_PROCESSED_COUNT: `${METRIC_PREFIX}.sla.processed_count`,
};

export const REAL_TIME_METRICS = {
  CONTRACT_EXTENSION: `${METRIC_PREFIX}.contract_extension`,
  CONTRACT_ACTIVATION: `${METRIC_PREFIX}.contract_lifecycle_activation`,
  CHARGES_REFUNDS: `${METRIC_PREFIX}.charges_refunds`,
};
