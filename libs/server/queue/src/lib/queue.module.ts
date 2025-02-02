import { BullModule } from '@nestjs/bullmq';
import { DynamicModule, Module } from '@nestjs/common';
import { ConfigService } from '@nutri/server-config';
import { ConfigModule } from '@nutri/server-config/config.module';
import { RedisModule, RedisService } from '@nutri/server-redis';
import { availableQueuesProvider } from './available-queues.provider';
import { BullAdminService } from './bull-admin.service';
import { BullDashboardService } from './bull-dashboard.service';
import { BullMetricsService } from './bull-metrics.service';
import { NUMBER_OF_QUEUE_RETRIES, QUEUE_NAMES } from './consts';
import { getByQueueNames } from './queues';

@Module({})
export class QueueModule {
  static register(queues: QUEUE_NAMES[]): DynamicModule {
    const {  queueConfigs } = getByQueueNames(queues);
    return {
      module: QueueModule,
      global: true,
      imports: [


        // Sets up the connection to redis as well as default configuration for job including connection
        BullModule.forRootAsync({
          imports: [ConfigModule,RedisModule,],
          useFactory: (configService: ConfigService, redisService: RedisService) => {
            return {
              connection: redisService.getClient(),
              defaultJobOptions: {
                removeOnComplete: 500,
                removeOnFail: false,
                attempts: configService.isDev ? 3 : NUMBER_OF_QUEUE_RETRIES,
                backoff: {
                  type: 'exponential',
                  /**
                   * FOR PROD
                   * 1st attempt - normal processing
                   * 2nd attempt - 2 * 45s = 1.5min
                   * 3rd attempt - 4 * 45s = 3min
                   * 4th attempt - 8 * 45s = 6min
                   * 5th attempt - 16 * 45s = 12min
                   * 6th attempt - 32 * 45s = 24min
                   * 7th attempt - 64 * 45s = 48min
                   * 8th attempt - 128 * 45s = 96min / 1.6h
                   * 9th attempt - 256 * 45s = 192min / 3.2h
                   */
                  delay: configService.isDev ? 200 : 45_000,
                },
              },
              prefix: configService.redisBullPrefix,
            };
          },
          inject: [ConfigService, RedisService],
        }),
        BullModule.registerQueue(...queueConfigs),
      ],
      providers: [
        availableQueuesProvider(queues),
        BullDashboardService,
        BullMetricsService,
        BullAdminService,
      ],
      exports: [
        BullDashboardService,
        BullMetricsService,
        BullAdminService,
      ],
    };
  }
}
