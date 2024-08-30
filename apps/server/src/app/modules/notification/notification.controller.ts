import { Controller, Logger, Post } from '@nestjs/common';
import { NotificationService } from './services/notification.service';
import { v4 as uuid } from 'uuid';

@Controller('notification')
export class NotificationController {
  private readonly logger = new Logger(NotificationController.name);

  constructor(private readonly notificationService: NotificationService) {
  }

  @Post('welcome-to-mail')
  async sendWelcomeMail() {
    this.logger.log('sending welcome to-mail');
    await this.notificationService.sendWelcomeNotification({
      email: 'example2@example.com',
      id: uuid(),
      name: 'Tester'
    });
  }
}
