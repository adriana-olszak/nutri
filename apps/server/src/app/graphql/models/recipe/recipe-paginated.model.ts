import { ObjectType } from '@nestjs/graphql';
import { Paginated } from '../paginated/paginated.model';
import { Recipe } from '../../../@generated/recipe/recipe.model';

@ObjectType()
export class RecipePaginatedModel extends Paginated(Recipe) {}
