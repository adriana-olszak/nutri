import { ObjectType } from "@nestjs/graphql";

@ObjectType()
export class AuthGoogleProfile {
  name: string;
  given_name: string;
  family_name: string;
  locale: string;
  email: string;
  picture: string;
}
