import { Injectable } from '@nestjs/common';
import { EmailNotificationService } from './email-notification.service';
import { PushNotificationService } from './push-notification.service';

@Injectable()
export class NotificationService {
  constructor(
    private emailService: EmailNotificationService,
    private pushService: PushNotificationService
  ) {
  }

  async sendWelcomeNotification(user: { email: string; name: string; id: string }) {
    await this.emailService.sendWelcomeEmail(user.email, user.name);
    await this.pushService.sendPushNotification(user.id, 'Welcome to our app!');
  }

  async sendPasswordResetNotification(user: { email: string; id: string }, resetToken: string) {
    await this.emailService.sendPasswordResetEmail(user.email, resetToken);
    await this.pushService.sendPushNotification(user.id, 'Your password reset request has been processed.');
  }
}
