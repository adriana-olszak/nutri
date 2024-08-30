import { DynamicModule, Module, Provider } from '@nestjs/common';
import { MailerService } from './services/mailer.service';
import { I_EMAIL_SENDER, I_MAILER, MAILER_MODULE_OPTIONS } from './conts';
import { IEmailSender } from './interfaces/email-sender.interface';
import { EmailConfig } from './interfaces/email-config.interface';
import { SendgridDestination } from './destinations/sendgrid.destination';
import { MailHogDestination } from './destinations/mail-hog.destination';

export interface MailerModuleOptions {
  config: EmailConfig;
}

export interface MailerModuleAsyncOptions {
  useFactory: (...args: any[]) => Promise<MailerModuleOptions> | MailerModuleOptions;
  inject?: any[];
  imports?: any[];
}

@Module({})
export class MailerModule {
  static forRoot(options: MailerModuleOptions): DynamicModule {
    const emailSenderProvider: Provider<IEmailSender> = {
      provide: I_EMAIL_SENDER,
      useFactory: () => {
        switch (options.config.provider) {
          case 'sendgrid':
            return new SendgridDestination(options.config.options);

          case 'mailhog':
            return new MailHogDestination(options.config.options);

          default:
            throw new Error('Not supported destination');
        }
      }
    };

    return {
      module: MailerModule,
      providers: [
        {
          provide: I_MAILER,
          useClass: MailerService
        },
        emailSenderProvider
      ],
      exports: [I_MAILER]
    };
  }

  static forRootAsync(options: MailerModuleAsyncOptions): DynamicModule {
    return {
      module: MailerModule,
      imports: options.imports || [],
      providers: [
        {
          provide: I_MAILER,
          useClass: MailerService
        },
        {
          provide: MAILER_MODULE_OPTIONS,
          useFactory: options.useFactory,
          inject: options.inject || []
        },
        {
          provide: I_EMAIL_SENDER,
          useFactory: (options: MailerModuleOptions) => {
            switch (options.config.provider) {
              case 'sendgrid':
                return new SendgridDestination(options.config.options);

              case 'mailhog':
                return new MailHogDestination(options.config.options);

              default:
                throw new Error('Not supported destination');
            }
          },
          inject: [MAILER_MODULE_OPTIONS]
        }
      ],
      exports: [I_MAILER]
    };
  }
}
