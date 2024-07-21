import { Injectable } from '@nestjs/common';
import { JwtService } from '../jwt';
import { JwtStrategy } from './strategies/jwt.strategy';
import { ConfigService } from '@nutri/server-config';
import { JwtDto, RequestUserDto } from '@nutri/server-auth';
import { User } from '@nutri/server-db-client';

export interface AuthSession {
  userId: User['id'];
  token: string;
  roles: string[];
  rememberMe: boolean;
  expiresIn: number;
}


@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly jwtStrategy: JwtStrategy,
    private readonly config: ConfigService
  ) {
  }

  async getAuthSession(user: RequestUserDto, rememberMe = false): Promise<AuthSession> {
    const jwtPayload: JwtDto = {
      aud: this.config.clientUrl,
      sub: user.id,
      roles: user.roles
    };

    const expiresIn = rememberMe
      ? this.config.authRememberMeExpiresIn
      : (this.config.jwtOptions.signOptions!.expiresIn as number);

    const token = this.jwtService.sign(jwtPayload, { expiresIn });

    return {
      userId: user.id,
      roles: user.roles,
      token,
      rememberMe,
      expiresIn
    };
  }

  /**
   * @returns `RequestUserDto` if valid and `null` otherwise
   */
  async authorizeJwt(token: string): Promise<RequestUserDto | null> {
    const jwtPayload = this.jwtService.decode(token) as JwtDto;
    return this.jwtStrategy.validate(jwtPayload);
  }
}
