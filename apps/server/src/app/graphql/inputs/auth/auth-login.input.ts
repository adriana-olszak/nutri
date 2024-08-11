import { IsEmail, Length, MaxLength } from 'class-validator';
import { ApiConstants } from '@nutri/common-consts';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AuthLoginInput {
  @IsEmail()
  @MaxLength(ApiConstants.EMAIL_MAX_LENGTH)
  readonly email: string;

  @Length(1, ApiConstants.PASSWORD_MAX_LENGTH)
  readonly password: string;
}
