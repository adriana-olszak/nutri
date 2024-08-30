import { DynamicModule, Module } from '@nestjs/common';
import { MailerService } from './mailer.service';
import { SendGridService } from './sendgrid.service';

export interface MailerModuleOptions {
  rendererProvider: any; // This should be the provider for IRenderer
  emailSenderProvider?: any; // Optional, defaults to SendGridService
}

@Module({})
export class MailerModule {
  static forRoot(options: MailerModuleOptions): DynamicModule {
    return {
      module: MailerModule,
      providers: [
        {
          provide: 'IMailer',
          useClass: MailerService,
        },
        options.rendererProvider,
        options.emailSenderProvider || {
          provide: 'IEmailSender',
          useClass: SendGridService,
        },
      ],
      exports: ['IMailer'],
    };
  }
}
