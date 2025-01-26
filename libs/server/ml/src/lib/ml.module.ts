import { Module } from '@nestjs/common';
import { EmbeddingService } from './services/embedding.service';
import { LLMService } from './services/llm.service';

@Module({
  providers: [LLMService, EmbeddingService],
  exports: [LLMService, EmbeddingService],
})
export class MLModule {}
