import { Module } from '@nestjs/common';
import { RendererService } from './mailer-renderer.service';

@Module({
  providers: [
    {
      provide: 'IRenderer',
      useClass: RendererService,
    },
  ],
  exports: ['IRenderer'],
})
export class MailerRendererModule {}
