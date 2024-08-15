import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TableViewDefinition } from '../models/table-view-definition/table-view-definition.model';
import { TableViewDefinitionService } from '../../services/table-view-definition.service';
import { CreateTableViewDefinitionInput } from '../inputs/table-view-definition/create-table-view-definition.input';
import { UpdateTableViewDefinitionInput } from '../inputs/table-view-definition/update-table-view-definition.input';

@Resolver(() => TableViewDefinition)
export class TableViewDefinitionResolver {
  constructor(private readonly tableViewDefinitionService: TableViewDefinitionService) {
  }

  @Mutation(() => TableViewDefinition)
  createTableViewDefinition(@Args('createTableViewDefinitionInput') createTableViewDefinitionInput: CreateTableViewDefinitionInput) {
    return this.tableViewDefinitionService.create(createTableViewDefinitionInput);
  }

  @Query(() => [TableViewDefinition], { name: 'tableViewDefinitions' })
  findAll() {
    return this.tableViewDefinitionService.findAll({});
  }

  @Query(() => TableViewDefinition, { name: 'tableViewDefinition' })
  findOne(@Args('id', { type: () => String }) id: string) {
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
  removeTableViewDefinition(@Args('id', { type: () => String }) id: string) {
    return this.tableViewDefinitionService.remove({ id });
  }
}
