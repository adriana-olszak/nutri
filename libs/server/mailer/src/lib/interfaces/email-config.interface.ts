export type EmailConfig = {
  provider: 'sendgrid', options: SendGridEmailConfig
} | {
  provider: 'mailhog', options: MailHogEmailConfig
}

export interface SendGridEmailConfig {
  apiKey: string;
  fromEmail: string;
}

export interface MailHogEmailConfig {
  host: string;
  port: number;
}
