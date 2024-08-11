import { MaxLength } from 'class-validator';
import { InputType } from '@nestjs/graphql';

const LONGEST = 254;


@InputType()export class AuthPasswordResetRequestInput {
  @MaxLength(LONGEST)
  readonly email: string;
}
