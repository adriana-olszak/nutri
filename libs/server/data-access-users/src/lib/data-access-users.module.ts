import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { DbClientModule } from '@nutri/server-db-client';

@Module({
  controllers: [],
  providers: [UserService],
  exports: [UserService],
  imports: [DbClientModule]
})
export class DataAccessUsersModule {
}
