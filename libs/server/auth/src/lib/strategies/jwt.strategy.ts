import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Request } from 'express';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { JwtDto } from '../dto/jwt.dto';
import { RequestUserDto } from '../dto/request-user.dto';
import { ConfigService } from '@nutri/server-config';
import { TokenBlacklistService } from '../token-blacklist.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    private readonly config: ConfigService,
    private readonly tokenBlacklistService: TokenBlacklistService
  ) {
    super({
      /** @see [passport-jwt docs](http://www.passportjs.org/packages/passport-jwt/) */
      secretOrKey: config.jwtOptions.publicKey
        ? config.jwtOptions.publicKey
        : config.jwtOptions.secret,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      passReqToCallback: true,
      audience: config.isProd ? config.clientUrl : undefined
    });
  }

  async validate(
    req: Request,
    payload: JwtDto
  ): Promise<RequestUserDto | null> {
    const token = req.get('Authorization'); // Validate the audience as the site URL
    if (!token) return null;

    if (await this.tokenBlacklistService.isTokenBlacklisted({
      token: token.substring(7)
    })) return null;

    return {
      id: payload.sub,
      roles: payload.roles,
      sessionId: payload.sessionId,
    };
  }
}
