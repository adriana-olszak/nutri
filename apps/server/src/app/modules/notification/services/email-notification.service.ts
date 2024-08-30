import { Injectable } from '@nestjs/common';
import { InjectMailer, IMailer } from '@nutri/server-mailer';
import { renderJobAcceptedMagicLink, renderStripeWelcomeEmail } from '@nutri/emails';

@Injectable()
export class EmailNotificationService {
  constructor(@InjectMailer() private mailer: IMailer) {
  }

  async sendWelcomeEmail(to: string, name: string) {
    const html = renderStripeWelcomeEmail();
    await this.mailer.send(
      to,
      'Welcome to Our App!',
      html,
    );
  }

  async sendPasswordResetEmail(to: string, resetToken: string) {
    const html = renderJobAcceptedMagicLink();

    await this.mailer.send(
      to,
      'Password Reset Request',
      html,
    );
  }
}
