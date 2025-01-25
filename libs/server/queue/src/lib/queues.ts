import { RegisterQueueOptions } from '@nestjs/bullmq';
import { QUEUE_NAMES } from './consts';

type QueueOptions = {
  name: string;
} & Omit<RegisterQueueOptions, 'name'>;


const queueConfig: Record<
  QUEUE_NAMES,
  {
    config: QueueOptions;
  }
> = {
  [QUEUE_NAMES.INGREDIENT_MATCH]: {
    config: {
      name: QUEUE_NAMES.INGREDIENT_MATCH,
      defaultJobOptions: {
        attempts: 3,  // Number of attempts including the first try
        backoff: {
          type: 'exponential',
          delay: 1000, // Start with 1-second delay
        },
        removeOnComplete: 24 * 3600, // Remove successful jobs after 1 day
        removeOnFail: 7 * 24 * 3600, // Keep failed jobs for a week
      },
    },
  },
};

export const getByQueueNames = (queueNames: QUEUE_NAMES[]) => {
  const queueConfigs: RegisterQueueOptions[] = [];

  for (const queueName of queueNames) {
    const queue = queueConfig[queueName];
    queueConfigs.push(queue.config);
  }

  return {
    queueConfigs,
  };
};


export { queueConfig };
