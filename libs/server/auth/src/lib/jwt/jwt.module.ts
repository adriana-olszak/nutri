import { Module } from '@nestjs/common';
import { JwtModule as NestJwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nutri/server-config';

@Module({
  imports: [
    NestJwtModule.registerAsync({
      useFactory: (config: ConfigService) => config.jwtOptions,
      inject: [ConfigService],
    }),
  ],
  exports: [NestJwtModule],
})
export class JwtModule {}
