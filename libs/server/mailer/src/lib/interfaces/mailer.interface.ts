import { SendOptions } from './sendgrid.interface';

export interface IMailer {
  send(to: string | string[], subject: string, html: string, options?: SendOptions): Promise<void>;
}
