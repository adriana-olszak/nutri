import { Inject, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { Queue } from 'bullmq';
import { TOKEN_AVAILABLE_QUEUES } from './available-queues.provider';
import { QUEUE_NAMES } from './consts';


@Injectable()
export class BullAdminService {
  private readonly logger = new Logger(BullAdminService.name);

  constructor(
    @Inject(TOKEN_AVAILABLE_QUEUES) private readonly queues: Queue[],
  ) {}

  async drainQueue(queueName: QUEUE_NAMES) {
    const queue = this.queues.find((queue) => queue.name === queueName);

    if (!queue) {
      throw new NotFoundException(`Queue with name ${queueName} was not found`);
    }
    await queue.drain();
  }

  async drainAllQueues(failedToDrainQueues: string[]) {
    failedToDrainQueues = this.queues.map((q) => q.name);
    await Promise.all(
      this.queues.map(async (queue) => {
        await queue.drain();
        failedToDrainQueues.filter((name) => name === queue.name);
      }),
    );
  }

  async cleanQueue(queueName: QUEUE_NAMES, dto: any) {
    const queue = this.queues.find((queue) => queue.name === queueName);

    if (!queue) {
      throw new NotFoundException(`Queue with name ${queueName} was not found`);
    }
    return await queue.clean(dto.afterInMs, dto.maxJobsToRemove, dto.type);
  }

  async stopQueue(queueName: QUEUE_NAMES) {
    const queue = this.queues.find((queue) => queue.name === queueName);

    if (!queue) {
      throw new NotFoundException(`Queue with name ${queueName} was not found`);
    }
    await queue.pause();
    this.logger.log(`Queue ${queueName} is paused`);
  }

  observeEvents() {
    this.queues.map((queue) => {
      queue.on('progress', (job) => {
        this.logger.log(`job ${job.id} is ${job.progress}% done`);
      });
    });
  }
}
