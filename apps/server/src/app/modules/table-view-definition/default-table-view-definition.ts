import { TableIdTypeEnum } from '../../graphql/enums/table-id-type.enum';
import { TableViewTypeEnum } from '../../graphql/enums/table-view-type.enum';
import { ColumnViewTypeEnum } from '../../graphql/enums/column-view-type.enum';
import { Prisma } from '@nutri/server-db-client';

export function createDefaultTableViewDefinitions(userId: string): Prisma.TableViewDefinitionCreateInput[] {
  return [
    createRecipesTableViewDefinition(userId),
    createManualReviewMatchesTableViewDefinition(userId),
  ];
}

function createManualReviewMatchesTableViewDefinition(userId: string): Prisma.TableViewDefinitionCreateInput {
  return {
    createdAt: new Date(),
    updatedAt: new Date(),
    userId,
    tableId: TableIdTypeEnum.MANUAL_REVIEW_MATCHES,
    tableType: TableViewTypeEnum.MANUAL_REVIEWS,
    name: 'Manual Review Matches',
    order: 4,
    icon: 'ManualReviewMatches',
    filters: '',
    sorting: '',
    isPreset: true,
    isShared: false,
    columnView: {
      createMany: {
        data: [
          {
            columnId: 1,
            columnType: ColumnViewTypeEnum.MATCHES_INGREDIENT_TEXT,
            width: 100,
            visible: true,
            name: '',
            filter: '',
          },
          {
            columnId: 2,
            columnType: ColumnViewTypeEnum.MATCHES_SELECTED_FOOD_MATCH_ID,
            width: 100,
            visible: true,
            name: '',
            filter: '',
          },
          {
            columnId: 3,
            columnType: ColumnViewTypeEnum.MATCHES_STATUS,
            width: 100,
            visible: true,
            name: '',
            filter: '',
          },
          {
            columnId: 4,
            columnType: ColumnViewTypeEnum.MATCHES_UPDATED_AT,
            width: 100,
            visible: true,
            name: '',
            filter: '',
          },
          {
            columnId: 5,
            columnType: ColumnViewTypeEnum.MATCHES_CREATED_AT,
            width: 100,
            visible: true,
            name: '',
            filter: '',
          },
        ],
      },
    },
  };
}

function createRecipesTableViewDefinition(userId: string): Prisma.TableViewDefinitionCreateInput {
  return {
    createdAt: new Date(),
    updatedAt: new Date(),
    userId,
    tableId: TableIdTypeEnum.RECIPES,
    tableType: TableViewTypeEnum.RECIPES,
    name: 'Recipes',
    order: 4,
    icon: 'Recipes',
    filters: '',
    sorting: '',
    isPreset: true,
    isShared: false,
    columnView: {
      createMany: {
        data: [
          {
            columnId: 1,
            columnType: ColumnViewTypeEnum.RECIPES_TITLE,
            width: 100,
            visible: true,
            name: '',
            filter: '',
          },
          {
            columnId: 2,
            columnType: ColumnViewTypeEnum.RECIPES_DESCRIPTION,
            width: 100,
            visible: true,
            name: '',
            filter: '',
          },
          {
            columnId: 3,
            columnType: ColumnViewTypeEnum.RECIPES_SERVINGS_MIN,
            width: 100,
            visible: true,
            name: '',
            filter: '',
          },
          {
            columnId: 4,
            columnType: ColumnViewTypeEnum.RECIPES_SERVINGS_MAX,
            width: 100,
            visible: true,
            name: '',
            filter: '',
          },
          {
            columnId: 5,
            columnType: ColumnViewTypeEnum.RECIPES_SERVINGS_TEXT,
            width: 100,
            visible: true,
            name: '',
            filter: '',
          },
          {
            columnId: 6,
            columnType: ColumnViewTypeEnum.RECIPES_SOURCE_URL,
            width: 100,
            visible: true,
            name: '',
            filter: '',
          },
          {
            columnId: 7,
            columnType: ColumnViewTypeEnum.RECIPES_CREATED_AT,
            width: 100,
            visible: true,
            name: '',
            filter: '',
          },
          {
            columnId: 8,
            columnType: ColumnViewTypeEnum.MATCHES_CREATED_AT,
            width: 100,
            visible: false,
            name: '',
            filter: '',
          },

        ],
      },
    },
  };
}
