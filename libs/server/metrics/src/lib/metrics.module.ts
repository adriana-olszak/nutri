import { StatsDProvider } from './stats-d.provider';
import { DynamicModule, Global, Module } from '@nestjs/common';
import { ContextModule } from '@nutri/server-context';
import { StatsDService } from './stats-d.service';

@Global()
@Module({})
export class MetricsModule {
  static forRoot(): DynamicModule {
    return {
      module: MetricsModule,
      imports: [ContextModule],
      providers: [StatsDProvider, StatsDService],
      exports: [StatsDProvider, StatsDService],
    };
  }
}
