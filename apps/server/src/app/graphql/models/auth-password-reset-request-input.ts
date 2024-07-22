import { MaxLength } from 'class-validator';

const LONGEST = 254;

export class AuthPasswordResetRequestInput {
  @MaxLength(LONGEST)
  readonly email: string;
}
