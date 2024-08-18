import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { TableViewDefinitionService } from './table-view-definition.service';
import { CreateTableViewDefinitionInput } from '../../graphql/inputs/create-table-view-definition.input';
import { UpdateTableViewDefinitionInput } from '../../graphql/inputs/update-table-view-definition.input';
import { PaginationArgs } from '../../graphql/args/pagination.args';
import { TableViewDefinitionPaginated } from '../../graphql/models/table-view-definition-paginated.model';
import { TableViewDefinition } from '../../@generated/table-view-definition/table-view-definition.model';
import {
  TableViewDefinitionOrderByWithRelationInput
} from '../../@generated/table-view-definition/table-view-definition-order-by-with-relation.input';
import {
  TableViewDefinitionWhereInput
} from '../../@generated/table-view-definition/table-view-definition-where.input';

@Resolver(() => TableViewDefinition)
export class TableViewDefinitionResolver {
  constructor(private readonly tableViewDefinitionService: TableViewDefinitionService) {
  }

  @Mutation(() => TableViewDefinition)
  createTableViewDefinition(@Args('input') createTableViewDefinitionInput: CreateTableViewDefinitionInput) {
    return this.tableViewDefinitionService.create(createTableViewDefinitionInput);
  }

  @Query(() => TableViewDefinitionPaginated, { name: 'paginatedTableViewDefinitions' })
  async paginatedFindAll(@Args({ nullable: true }) options?: PaginationArgs,
                         @Args('sortInput', { nullable: true }) sortInput?: TableViewDefinitionOrderByWithRelationInput,
                         @Args('filterInput', { nullable: true }) filterInput?: TableViewDefinitionWhereInput
  ) {
    return this.tableViewDefinitionService.paginatedFindAll(options, sortInput, filterInput);
  }


  @Query(() => TableViewDefinition, { name: 'tableViewDefinition' })
  findOne(@Args('id', { type: () => ID }) id: string) {
    return this.tableViewDefinitionService.findOne({ id });
  }

  @Mutation(() => TableViewDefinition)
  updateTableViewDefinition(@Args('updateTableViewDefinitionInput') updateTableViewDefinitionInput: UpdateTableViewDefinitionInput) {
    return this.tableViewDefinitionService.update({
      where: { id: updateTableViewDefinitionInput.id },
      data: updateTableViewDefinitionInput
    });
  }

  @Mutation(() => TableViewDefinition)
  removeTableViewDefinition(@Args('id', { type: () => ID }) id: string) {
    return this.tableViewDefinitionService.remove({ id });
  }
}
