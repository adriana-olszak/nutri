import { SendOptions } from './mailer.interface';

export interface IEmailSender {
  send(to: string | string[], subject: string, html: string, options?: SendOptions): Promise<void>;
}

