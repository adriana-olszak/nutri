import { Field, ID, ObjectType } from '@nestjs/graphql';
import { AuthSession } from '@nutri/server-auth';

@ObjectType()
export class AuthSessionModel implements AuthSession {
  @Field(() => ID)
  userId: string;
  accessToken: string;
  roles: string[];
  accessTokenExpiresAt: Date;
}
