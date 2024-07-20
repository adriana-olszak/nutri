import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { DataAccessUsersModule } from '@nutri/server-data-access-user';
import { ConfigModule } from '@nutri/server-config';

@Module({
  imports: [DataAccessUsersModule, ConfigModule],
  controllers: [AppController],
  providers: []
})
export class AppModule {
}
