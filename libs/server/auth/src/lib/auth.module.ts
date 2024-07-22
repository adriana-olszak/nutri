import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from './jwt';
import { DbClientModule } from '@nutri/server-db-client';
import { JwtStrategy } from './strategies/jwt.strategy';
import { AuthService } from './auth.service';
import { GoogleOAuthStrategy } from './strategies/google-oauth.strategy';
import { AccessTokenService } from './access-token.service';
import { RefreshTokenService } from './refresh-token.service';
import { AuthAuditLogService } from './auth-audit-log.service';
import { SessionService } from './session.service';
import { TokenBlacklistService } from './token-blacklist.service';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule,
    DbClientModule,
  ],
  providers: [
    AccessTokenService,
    RefreshTokenService,
    AuthAuditLogService,
    SessionService,
    TokenBlacklistService,
    JwtStrategy,
    AuthService,
    GoogleOAuthStrategy,
  ],
  exports: [AuthService],
})
export class NestAuthModule {}
