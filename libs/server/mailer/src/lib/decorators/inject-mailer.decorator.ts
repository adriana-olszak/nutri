import { Inject } from '@nestjs/common';
import { I_MAILER } from '../conts';

export const InjectMailer = () => Inject(I_MAILER);
