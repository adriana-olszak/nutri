import { Length } from 'class-validator';
import { ApiConstants } from '@nutri/common-consts';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AuthPasswordChangeInput {
  @Length(1, ApiConstants.PASSWORD_MAX_LENGTH)
  readonly oldPassword: string;

  @Length(ApiConstants.PASSWORD_MIN_LENGTH, ApiConstants.PASSWORD_MAX_LENGTH)
  readonly newPassword: string;
}
