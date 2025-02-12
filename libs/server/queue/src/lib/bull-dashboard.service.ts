import { createBullBoard } from '@bull-board/api';
import { BullMQAdapter } from '@bull-board/api/bullMQAdapter';
import { IServerAdapter } from '@bull-board/api/dist/typings/app';
import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nutri/server-config';
import { RedisService } from '@nutri/server-redis';
import { Queue } from 'bullmq';
import { TOKEN_AVAILABLE_QUEUES } from './available-queues.provider';

@Injectable()
export class BullDashboardService {
  constructor(
    @Inject(TOKEN_AVAILABLE_QUEUES) private readonly queues: Queue[],
    private readonly configService: ConfigService,
    private readonly redisService: RedisService,
  ) {}

  createDashboard(serverAdapter: IServerAdapter) {

    createBullBoard({
      queues: this.queues.map((queue) =>  new BullMQAdapter(new Queue(queue.name, {
                connection: this.configService.redisConfig,
             }))),
      serverAdapter,
    });
  }
}
