import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { DataAccessUsersModule } from '@nutri/server-data-access-user';

@Module({
  imports: [DataAccessUsersModule],
  controllers: [AppController],
  providers: []
})
export class AppModule {
}
