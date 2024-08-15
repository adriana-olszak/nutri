import { Module } from '@nestjs/common';
import { DbClientModule } from '@nutri/server-db-client';
import { ALL_SERVICES } from './index';


@Module({
  imports: [
    DbClientModule
  ],
  providers: ALL_SERVICES,
  exports: ALL_SERVICES
})
export class ServicesModule {
}
