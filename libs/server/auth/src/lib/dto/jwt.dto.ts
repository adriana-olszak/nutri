import { RequestUserDto } from './request-user.dto';

export interface JwtDto {
  readonly aud: string;
  readonly sub: RequestUserDto['id'];
  readonly roles: RequestUserDto['roles'];
  readonly iat?: number;
  readonly exp?: number;
}
