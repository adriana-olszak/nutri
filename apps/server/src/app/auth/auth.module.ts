import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { GoogleOAuthStrategy } from './strategies/google-oauth.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';
import { JwtModule } from '../jwt';
import { DbClientModule } from '@nutri/server-db-client';
import { NestAuthModule } from '@nutri/server-auth';

@Module({
  imports: [JwtModule, DbClientModule, NestAuthModule],
  providers: [JwtStrategy, AuthService, GoogleOAuthStrategy],
  exports: [JwtModule, AuthService, NestAuthModule],
  controllers: [AuthController]
})
export class AuthModule {
}
