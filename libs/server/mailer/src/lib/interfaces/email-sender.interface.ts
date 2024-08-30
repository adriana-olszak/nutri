import { SendOptions } from './sendgrid.interface';

export interface IEmailSender {
  send(to: string | string[], subject: string, html: string, options?: SendOptions): Promise<void>;
}

