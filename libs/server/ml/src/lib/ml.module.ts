import { Module } from '@nestjs/common';
import { MLService } from './services/ml.service';

@Module({
  providers: [MLService],
  exports: [MLService],
})
export class MLModule {}
