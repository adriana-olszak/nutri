import { Injectable, Logger } from '@nestjs/common';
import { StatsD } from 'hot-shots';
import { ClsService } from 'nestjs-cls';

/**
 * @class AsyncStatsDService
 * @description A service for asynchronous StatsD metric reporting with context-aware tagging.
 *
 * This service extends the functionality of the StatsD client by incorporating
 * asynchronous context information into metric tags. It uses the *`nest-cls`* package
 * to access context-specific data and automatically includes it in
 * the tags for each metric.
 *
 * Tags should only include low-cardinality values that represent categories or types,
 * not unique identifiers. Each unique combination of tags creates a new metric series.
 *
 * @requires @nestjs/common
 * @requires hot-shots
 * @requires nestjs-cls
 */
@Injectable()
export class AsyncStatsDService {
  private readonly logger = new Logger(AsyncStatsDService.name);
  private readonly enableStdoutLogging: boolean;

  constructor(
    private readonly statsD: StatsD,
    private readonly asyncContext: ClsService,
  ) {
    this.enableStdoutLogging = ['development', 'test'].includes(
      process.env['NODE_ENV'] || '',
    );
  }

  private logToStdout(
    method: string,
    stat: string,
    value: number | undefined,
    tags: object | undefined,
  ) {
    if (this.enableStdoutLogging) {
      this.logger.debug(
        `[Metrics] at: ${Date.now()} ${method}: ${stat}, Value: ${value}, Tags:`,
        tags,
      );
    }
  }

  /**
   * Increments a COUNT metric. COUNT metrics represent the total number of event
   * occurrences in one time interval. They can be used to track events that can
   * accumulate or decrease over time, such as the number of active connections
   * or requests to an endpoint.
   *
   * @param stat The name of the metric to increment.
   * @param value The value to increment by. Defaults to 1 if not specified.
   * @param sampleRate Optional. The sampling rate (between 0 and 1).
   * @param tags Optional. Additional tags to include with the metric.
   * Tags should only include low-cardinality values that represent categories or types,
   * not unique identifiers. Each unique combination of tags creates a new metric series.
   *
   * Do NOT include:
   * - job_id: Unique per execution
   * - user_id: Unique per user
   * - transaction_id: Unique per transaction
   * - timestamp: Unique per execution
   * - Any other high-cardinality values
   */
  increment(
    stat: string,
    value?: number,
    tags?: {
      [key: string]: string;
    },
    sampleRate?: number,
  ) {
    const contextTags = this.getContextTags();
    const allTags = { ...tags, ...contextTags };
    this.logToStdout('INCREMENT', stat, value, allTags);
    this.statsD.increment(stat, value ?? 1, sampleRate, allTags);
  }

  /**
   * Decrements a COUNT metric. COUNT metrics represent the total number of event
   * occurrences in one time interval.
   *
   * @param stat The name of the metric to decrement.
   * @param value The value to decrement by. Defaults to 1 if not specified.
   * @param sampleRate Optional. The sampling rate (between 0 and 1).
   * @param tags Optional. Additional tags to include with the metric.
   * Tags should only include low-cardinality values that represent categories or types,
   * not unique identifiers. Each unique combination of tags creates a new metric series.
   *
   * Do NOT include:
   * - job_id: Unique per execution
   * - user_id: Unique per user
   * - transaction_id: Unique per transaction
   * - timestamp: Unique per execution
   * - Any other high-cardinality values
   */
  decrement(
    stat: string,
    value?: number,
    tags?: {
      [key: string]: string;
    },
    sampleRate?: number,
  ) {
    const contextTags = this.getContextTags();
    const allTags = { ...tags, ...contextTags };
    this.logToStdout('DECREMENT', stat, value, allTags);
    this.statsD.decrement(stat, value ?? 1, sampleRate, allTags);
  }

  /**
   * The GAUGE metric submission type represents a snapshot of events in one
   * time interval. This representative snapshot value is the last value
   * submitted to the Agent during a time interval. A GAUGE can be used to take
   * a measure of something reporting continuously—like the available disk space
   * or memory used.
   *
   * @param stat
   * @param value
   * @param sampleRate
   * @param tags Optional. Additional tags to include with the metric.
   * Tags should only include low-cardinality values that represent categories or types,
   * not unique identifiers. Each unique combination of tags creates a new metric series.
   *
   * Do NOT include:
   * - job_id: Unique per execution
   * - user_id: Unique per user
   * - transaction_id: Unique per transaction
   * - timestamp: Unique per execution
   * - Any other high-cardinality values
   */
  gauge(
    stat: string,
    value: number,
    tags?: {
      [key: string]: string;
    },
    sampleRate?: number,
  ) {
    const contextTags = this.getContextTags();
    const allTags = { ...tags, ...contextTags };
    this.logToStdout('GAUGE', stat, value, allTags);
    this.statsD.gauge(stat, value, sampleRate, allTags);
  }

  /**
   * Records a value in a histogram metric.
   * @param stat The name of the histogram metric.
   * @param value The value to record in the histogram.
   * @param sampleRate Optional. The sampling rate (between 0 and 1).
   * @param tags Optional. Additional tags to include with the metric.
   * Tags should only include low-cardinality values that represent categories or types,
   * not unique identifiers. Each unique combination of tags creates a new metric series.
   *
   * Do NOT include:
   * - job_id: Unique per execution
   * - user_id: Unique per user
   * - transaction_id: Unique per transaction
   * - timestamp: Unique per execution
   * - Any other high-cardinality values
   */
  histogram(
    stat: string,
    value: number,
    tags?: {
      [key: string]: string;
    },
    sampleRate?: number,
  ) {
    const contextTags = this.getContextTags();
    const allTags = { ...tags, ...contextTags };
    this.logToStdout('HISTOGRAM', stat, value, allTags);
    this.statsD.histogram(stat, value, sampleRate, allTags);
  }

  private getContextTags(): { [key: string]: string } {
    const job = this.asyncContext.get('JOB');
    return {
      ...(job
        ? {
          job_name: job.name,
          queue_name: job.queueName,
        }
        : {}),
    };
  }
}
