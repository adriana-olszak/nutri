import { Injectable, Inject } from '@nestjs/common';
import { IMailer } from '../interfaces/mailer.interface';
import { IEmailSender } from '../interfaces/email-sender.interface';
import { SendOptions } from '../interfaces/sendgrid.interface';
import { I_EMAIL_SENDER } from '../conts';

@Injectable()
export class MailerService implements IMailer {
  constructor(
    @Inject(I_EMAIL_SENDER) private emailSender: IEmailSender
  ) {
  }

  async send(to: string | string[], subject: string, html: string, options?: SendOptions): Promise<void> {
    await this.emailSender.send(to, subject, html, options);
  }
}
