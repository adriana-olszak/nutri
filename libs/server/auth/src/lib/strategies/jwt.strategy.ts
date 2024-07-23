import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Request } from 'express';
import { Strategy } from 'passport-jwt';

import { JwtDto } from '../dto/jwt.dto';
import { RequestUserDto } from '../dto/request-user.dto';
import { ConfigService } from '@nutri/server-config';
import { TokenBlacklistService } from '../token-blacklist.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    private readonly config: ConfigService,
    private readonly tokenBlacklistService: TokenBlacklistService,
  ) {
    super({
      /** @see [passport-jwt docs](http://www.passportjs.org/packages/passport-jwt/) */
      secretOrKey: config.jwtOptions.publicKey
        ? config.jwtOptions.publicKey
        : config.jwtOptions.secret,
      jwtFromRequest: JwtStrategy.extractJWT,
      passReqToCallback: true,
    });
  }

  private static extractJWT(req: Request & { token?: string }): string | null {
    // Websocket connection
    if (req.token) return req.token;
    // HTTP request
    let authHeader = req.header('Authorization');
    if (!authHeader) authHeader = req.header('authorization');

    console.log(authHeader);
    if (!authHeader)
      throw new UnauthorizedException('No Authorization header found');

    // Strips `'Bearer '` and returns only the token
    return authHeader.substring(7);
  }

  async validate(
    req: Request,
    payload: JwtDto,
  ): Promise<RequestUserDto | null> {
    const token = req.get('Authorization'); // Validate the audience as the site URL
    if (!token) return null;

    const isTokenBlacklisted =
      await this.tokenBlacklistService.isTokenBlacklisted({
        token: token.substring(7),
      });
    console.log(isTokenBlacklisted);
    if (isTokenBlacklisted) return null;

    if (this.config.isProd && payload.aud !== this.config.clientUrl)
      return null;

    return {
      id: payload.sub,
      roles: payload.roles,
    };
  }
}
