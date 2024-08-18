import { Field, ObjectType } from '@nestjs/graphql';
import { AccountInfoInterface } from '../interfaces';
import { AuthGoogleProfile } from './auth-google-profile.model';


@ObjectType()
export class AuthAccountInfoModel implements Omit<AccountInfoInterface, 'googleProfile'> {
  email: string;

  hasPassword: boolean;

  @Field(() => AuthGoogleProfile, { nullable: true })
  googleProfile?: AuthGoogleProfile;
}
