import { AuthResolver } from './auth.resolver';
import { TableViewDefinitionResolver } from './table-view-definition.resolver';
import { FOOD_RESOLVERS } from './food';
import { RECIPE_RESOLVERS } from './recipe';

export const ALL_RESOLVERS = [AuthResolver, ...RECIPE_RESOLVERS, ...FOOD_RESOLVERS, TableViewDefinitionResolver];
