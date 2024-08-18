import { ObjectType } from '@nestjs/graphql';
import { Paginated } from './paginated.model';
import { TableViewDefinition } from '../../@generated/table-view-definition/table-view-definition.model';

@ObjectType()
export class TableViewDefinitionPaginated extends Paginated(TableViewDefinition) {}
