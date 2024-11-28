import { Match as GQLMatch } from '@nutri/client-gql';

export type Match = Pick<GQLMatch, 'id'| 'createdAt' | 'ingredientText' | 'status' | 'updatedAt' | 'selectedFoodMatchId'>
