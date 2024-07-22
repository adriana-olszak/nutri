import { Profile } from 'passport-google-oauth20';

export interface AccountInfo {
  email: string;
  hasPassword: boolean;
  googleProfile?: Profile['_json'] | null;
}
