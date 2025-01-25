import { QUEUE_NAMES } from './consts';
import { queuePrefix } from './queue_prefix';
import { Queue } from 'bullmq';

export const TOKEN_AVAILABLE_QUEUES = 'TOKEN_AVAILABLE_QUEUES';

/**
 * Dynamically builds and returns a list of ALL queues used by this instance of
 * a DynamicModule
 * @param queueNames
 */
export const availableQueuesProvider = (queueNames: QUEUE_NAMES[]) => {
  return {
    provide: TOKEN_AVAILABLE_QUEUES,
    useFactory: (...queues: Queue[]) => {
      return queues;
    },
    inject: queueNames.map((queueName) => `${queuePrefix}_${queueName}`),
  };
};
