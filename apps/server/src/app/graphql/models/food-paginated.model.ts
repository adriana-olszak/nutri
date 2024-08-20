import { ObjectType } from '@nestjs/graphql';
import { Paginated } from './paginated.model';
import { Food } from './food.model';

@ObjectType()
export class FoodPaginatedModel extends Paginated(Food) {}
