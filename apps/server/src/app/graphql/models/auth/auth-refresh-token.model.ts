import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AuthRefreshTokenModel {
  accessToken: string;
  accessTokenExpiresAt: Date;
}
