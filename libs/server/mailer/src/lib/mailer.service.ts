import { Injectable, Inject } from '@nestjs/common';
import { IMailer, SendOptions } from './interfaces/mailer.interface';
import { IEmailSender } from './interfaces/email-sender.interface';
import { IRenderer } from './interfaces/renderer.interface';
import { IEmailTemplate } from './interfaces/email-template.interface';

@Injectable()
export class MailerService implements IMailer {
  private templates: Map<string, IEmailTemplate>;

  constructor(
    @Inject('IRenderer') private renderer: IRenderer,
    @Inject('IEmailSender') private emailSender: IEmailSender,
    @Inject('EMAIL_TEMPLATES') templates: IEmailTemplate[]
  ) {
    this.templates = new Map(templates.map(t => [t.name, t]));
  }

  async sendEmail(to: string | string[], subject: string, templateName: string, data: any, options?: SendOptions): Promise<void> {
    const template = this.templates.get(templateName);
    if (!template) {
      throw new Error(`Email template "${templateName}" not found`);
    }

    const html = await this.renderer.render(template.component, data);
    await this.emailSender.send(to, subject, html, options);
  }
}
