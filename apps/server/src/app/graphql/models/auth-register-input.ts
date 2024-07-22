import { IsEmail, Length } from 'class-validator';
import { ApiConstants } from '@nutri/common-consts';

export class AuthRegisterInput {
  @IsEmail()
  @Length(3, 254)
  readonly email: string;

  @Length(ApiConstants.PASSWORD_MIN_LENGTH, ApiConstants.PASSWORD_MAX_LENGTH)
  readonly password: string;
}
