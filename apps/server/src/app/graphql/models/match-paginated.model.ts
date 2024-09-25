import { ObjectType } from '@nestjs/graphql';
import { Paginated } from './paginated.model';
import { Match } from './match.model';

@ObjectType()
export class MatchPaginatedModel extends Paginated(Match) {}
