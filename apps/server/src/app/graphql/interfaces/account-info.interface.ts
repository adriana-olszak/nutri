import { Profile } from 'passport-google-oauth20';

export interface AccountInfoInterface {
  email: string;
  hasPassword: boolean;
  googleProfile?: Profile['_json'] | null;
}
