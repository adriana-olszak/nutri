import { Injectable } from '@nestjs/common';

@Injectable()
export class PushNotificationService {
  async sendPushNotification(userId: string, message: string) {
    console.log(`Sending push notification to user ${userId}: ${message}`);
  }
}
