import { TOKEN_AVAILABLE_QUEUES } from './available-queues.provider';
import { createBullBoard } from '@bull-board/api';
import { BullMQAdapter } from '@bull-board/api/bullMQAdapter';
import { IServerAdapter } from '@bull-board/api/dist/typings/app';
import { Inject, Injectable } from '@nestjs/common';
import { Queue } from 'bullmq';

@Injectable()
export class BullDashboardService {
  constructor(
    @Inject(TOKEN_AVAILABLE_QUEUES) private readonly queues: Queue[],
  ) {}

  createDashboard(serverAdapter: IServerAdapter) {
    createBullBoard({
      queues: this.queues.map((queue) => new BullMQAdapter(queue)),
      serverAdapter,
    });
  }
}
