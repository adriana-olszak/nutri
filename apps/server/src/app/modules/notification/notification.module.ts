import { Module } from '@nestjs/common';
import { MailerModule } from '@nutri/server-mailer';
import { EmailNotificationService } from './services/email-notification.service';
import { PushNotificationService } from './services/push-notification.service';
import { NotificationService } from './services/notification.service';
import { NotificationPreviewController } from './notification-preview.controller';
import { ConfigService } from '@nutri/server-config';
import { NotificationController } from './notification.controller';
import { ConfigModule } from '@nutri/server-config/config.module';

@Module({
  imports: [
    MailerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        config: configService.emailConfig
      }),
    })
  ],
  providers: [
    EmailNotificationService,
    PushNotificationService,
    NotificationService
  ],
  controllers: [NotificationPreviewController, NotificationController],
  exports: [NotificationService]
})
export class NotificationModule {
}
