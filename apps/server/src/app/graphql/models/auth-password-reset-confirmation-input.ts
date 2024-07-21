import { IsNotEmpty, Length } from 'class-validator';
import { ApiConstants } from '@nutri/common-consts';

export class AuthPasswordResetConfirmationInput {
  @Length(ApiConstants.PASSWORD_MIN_LENGTH, ApiConstants.PASSWORD_MAX_LENGTH)
  readonly newPassword: string;

  @IsNotEmpty()
  readonly token: string;
}
