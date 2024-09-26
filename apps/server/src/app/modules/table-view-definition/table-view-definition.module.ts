import { Module } from '@nestjs/common';
import { NestAuthModule } from '@nutri/server-auth';
import { DbClientModule } from '@nutri/server-db-client';
import { TableViewDefinitionResolver } from './table-view-definition.resolver';
import { TableViewDefinitionService } from './table-view-definition.service';
import { FilterService } from './filters.service';

@Module({
  imports: [
    DbClientModule,
    NestAuthModule
  ],
  providers: [TableViewDefinitionResolver, TableViewDefinitionService, FilterService]
})
export class TableViewDefinitionModule {
}
