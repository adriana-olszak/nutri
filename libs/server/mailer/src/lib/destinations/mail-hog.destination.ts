import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { IEmailSender } from '../interfaces/email-sender.interface';
import { MailHogEmailConfig } from '../interfaces/email-config.interface';

@Injectable()
export class MailHogDestination implements IEmailSender {
  private transporter: nodemailer.Transporter;

  constructor(config: MailHogEmailConfig) {
    this.transporter = nodemailer.createTransport({
      host: config.host,
      port: config.port,
      secure: false,
      ignoreTLS: true
    });
  }

  async send(to: string, subject: string, content: string): Promise<void> {
    await this.transporter.sendMail({
      from: 'your-email@example.com',
      to,
      subject,
      html: content
    });
  }
}
