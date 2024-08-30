import { Injectable } from '@nestjs/common';
import { IEmailSender } from '../interfaces/email-sender.interface';
import SendGrid, {} from '@sendgrid/mail';

import { SendOptions } from '../interfaces/sendgrid.interface';
import { SendGridEmailConfig } from '../interfaces/email-config.interface';

@Injectable()
export class SendgridDestination implements IEmailSender {
  private readonly fromEmail: string;

  constructor(config: SendGridEmailConfig) {
    this.fromEmail = config.fromEmail;
    SendGrid.setApiKey(config.apiKey);
  }

  async send(to: string | string[], subject: string, html: string, options?: SendOptions): Promise<void> {
    const msg: SendGrid.MailDataRequired = {
      to,
      subject,
      html,
      from: this.fromEmail,
      ...options
    };

    await SendGrid.send(msg);
  }
}
