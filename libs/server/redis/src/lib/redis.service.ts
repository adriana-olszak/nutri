import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ConfigService } from '@nutri/server-config';
import { Redis } from 'ioredis';

@Injectable()
export class RedisService implements OnModuleDestroy {
  private readonly redisClient: Redis;

  constructor(private configService: ConfigService) {
    this.redisClient = new Redis(this.configService.redisConfig);
  }

  getClient(): Redis {
    return this.redisClient;
  }

  async onModuleDestroy() {
    await this.redisClient.quit();
  }
}
