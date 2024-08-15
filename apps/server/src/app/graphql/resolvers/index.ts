import { AuthResolver } from './auth.resolver';
import { RecipeResolver } from './recipe.resolver';
import { TableViewDefinitionResolver } from './table-view-definition.resolver';
import { FOOD_RESOLVERS } from './food';

export const ALL_RESOLVERS = [AuthResolver, RecipeResolver, ...FOOD_RESOLVERS, TableViewDefinitionResolver];
