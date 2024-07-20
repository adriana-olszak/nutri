import { StatsDProvider } from './stats-d.provider';
import { Global, Module } from '@nestjs/common';

@Global()
@Module({
  providers: [StatsDProvider],
  exports: [StatsDProvider],
})
export class MetricsModule {}
