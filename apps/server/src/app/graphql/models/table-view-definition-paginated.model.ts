import { ObjectType } from '@nestjs/graphql';
import { Paginated } from './paginated.model';
import { TableViewDefinition } from './table-view-definition.model';

@ObjectType()
export class TableViewDefinitionPaginated extends Paginated(TableViewDefinition) {}
