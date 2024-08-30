import { Injectable } from '@nestjs/common';

@Injectable()
export class SmsNotificationService {
  async sendSMSNotification(userId: string, message: string) {
    console.log(`Sending sms notification to user ${userId}: ${message}`);
  }
}
