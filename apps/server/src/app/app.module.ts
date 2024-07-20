import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { DataAccessUsersModule } from '@nutri/server-data-access-user';
import { ConfigModule } from '@nutri/server-config';
import { JwtModule } from './jwt';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [DataAccessUsersModule, ConfigModule, JwtModule, AuthModule],
  controllers: [AppController],
  providers: []
})
export class AppModule {
}
