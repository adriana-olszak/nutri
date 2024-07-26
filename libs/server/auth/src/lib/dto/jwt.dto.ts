import { RequestUserDto } from './request-user.dto';

export interface JwtDto {
  readonly sub: RequestUserDto['id'];
  readonly roles: RequestUserDto['roles'];
  readonly sessionId: RequestUserDto['sessionId'];
  readonly iat?: number;
  readonly exp?: number;
}
