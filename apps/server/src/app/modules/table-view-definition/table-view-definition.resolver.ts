import { UseGuards } from '@nestjs/common';
import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { TableViewDefinitionService } from './table-view-definition.service';
import { CreateTableViewDefinitionInput } from '../../graphql/inputs/create-table-view-definition.input';
import { UpdateTableViewDefinitionInput } from '../../graphql/inputs/update-table-view-definition.input';

import { TableViewDefinition } from '../../graphql/models/table-view-definition.model';
import { ActionResponseModel } from '../../graphql/models/action-response.model';
import { CurrentUser, RequestUserDto, RolesGuard } from '@nutri/server-auth';
import { FilterService } from './filters.service';

@UseGuards(RolesGuard())
@Resolver(() => TableViewDefinition)
export class TableViewDefinitionResolver {
  constructor(private readonly tableViewDefinitionService: TableViewDefinitionService, private readonly filterService: FilterService) {
  }

  @Mutation(() => TableViewDefinition)
  async createTableViewDefinition(@Args('input') createTableViewDefinitionInput: CreateTableViewDefinitionInput,
                                  @CurrentUser() reqUser: RequestUserDto,
  ) {
    const tableViewDefinition = await this.tableViewDefinitionService.create({
      ...createTableViewDefinitionInput,
    }, reqUser.id);

    tableViewDefinition.possibleFilters = this.filterService.getPossibleFilters(tableViewDefinition.tableId);

    return tableViewDefinition;
  }

  @Query(() => [TableViewDefinition], { name: 'tableViewDefinitions' })
  async findAll(
    @CurrentUser() reqUser: RequestUserDto,
  ) {
    const tableViewDefinitions = await this.tableViewDefinitionService.findAll(reqUser.id);

    return tableViewDefinitions.map(definition => ({
      ...definition,
      possibleFilters: this.filterService.getPossibleFilters(definition.tableId),
    }));
  }


  @Query(() => TableViewDefinition, { name: 'tableViewDefinition' })
  async findOne(@Args('id', { type: () => ID }) id: string,
                @CurrentUser() reqUser: RequestUserDto,
  ) {
    const tableViewDefinition = await this.tableViewDefinitionService.findOne({ id, userId: reqUser.id });
    tableViewDefinition.possibleFilters = this.filterService.getPossibleFilters(tableViewDefinition.tableId);

    return tableViewDefinition;
  }

  @Mutation(() => TableViewDefinition)
  async updateTableViewDefinition(@Args('updateTableViewDefinitionInput') updateTableViewDefinitionInput: UpdateTableViewDefinitionInput,
                                  @CurrentUser() reqUser: RequestUserDto,
  ) {
    const tableViewDefinition = await this.tableViewDefinitionService.update({
      where: { id: updateTableViewDefinitionInput.id },
      data: {
        ...updateTableViewDefinitionInput,
        userId: reqUser.id,
      },
    });

    tableViewDefinition.possibleFilters = this.filterService.getPossibleFilters(tableViewDefinition.tableId);

    return tableViewDefinition;
  }

  @Mutation(() => ActionResponseModel)
  async archiveTableViewDefinition(@Args('id', { type: () => ID }) id: string) {
    const result = await this.tableViewDefinitionService.archive(id);
    return {
      accepted: result,
    };
  }
}
