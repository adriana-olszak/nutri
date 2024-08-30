import { Injectable } from '@nestjs/common';
import { SendOptions } from './interfaces/mailer.interface';
import { IEmailSender } from './interfaces/email-sender.interface';
import * as SendGrid from '@sendgrid/mail';

@Injectable()
export class SendGridService implements IEmailSender {
  constructor() {
    SendGrid.setApiKey(process.env['SENDGRID_API_KEY'] as string);
  }

  async send(to: string | string[], subject: string, html: string, options?: SendOptions): Promise<void> {
    const msg: SendGrid.MailDataRequired = {
      to,
      subject,
      html,
      from: process.env['SENDGRID_FROM_EMAIL'] as string,
      ...options
    };

    await SendGrid.send(msg);
  }
}
