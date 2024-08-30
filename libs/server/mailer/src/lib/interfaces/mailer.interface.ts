import * as SendGrid from '@sendgrid/mail';

export interface IMailer {
  sendEmail(to: string | string[], subject: string, template: any, data: any, options?: SendOptions): Promise<void>;
}

export type SendOptions = Partial<SendGrid.MailDataRequired>

