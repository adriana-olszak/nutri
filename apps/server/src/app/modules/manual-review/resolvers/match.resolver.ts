import { Resolver, Query, Args, ID, ResolveField, Parent } from '@nestjs/graphql';
import { ManualReviewService } from '../manual-review.service';
import { ManualReviewDataLoader } from '../manual-review.data-loader';
import { Match } from '../../../graphql/models/match.model';
import { MatchFood } from '../../../graphql/models/match-food.model';
import { MatchManualReview } from '../../../graphql/models/match-manual-review.model';
import { PaginationArgs } from '../../../graphql/args/pagination.args';
import { MatchOrderByInput } from '../../../graphql/inputs/match-order-by.input';
import { Prisma } from '@prisma/client';
import { MatchPaginatedModel } from '../../../graphql/models/match-paginated.model';
import {
  ManualReviewMatchesFilterInput
} from '../../../graphql/filters/manual-review-matches/manual-review-matches-filter.input';

@Resolver(() => Match)
export class MatchResolver {
  constructor(
    private readonly manualReviewService: ManualReviewService,
    private readonly manualReviewDataLoader: ManualReviewDataLoader,
  ) {
  }

  @Query(() => Match)
  getMatchDetails(@Args('matchId', { type: () => ID }) matchId: string): Promise<Match> {
    return this.manualReviewService.getMatchDetails(matchId);
  }

  @Query(() => MatchPaginatedModel, { name: 'paginatedMatches' })
  async paginatedFindAll(@Args({ nullable: true }) options?: PaginationArgs,
                         @Args('sortInput', { nullable: true }) sortInput?: MatchOrderByInput,
                         @Args('filterInput', { nullable: true }) filterInput?: ManualReviewMatchesFilterInput,
  ) {
    return this.manualReviewService.paginatedFindAllMatches(options,
      sortInput,
      filterInput);
  }

  @Query(() => [Match])
  getAutoApprovedMatches(
    @Args('limit', { type: () => Number, defaultValue: 10 }) limit: number,
    @Args('offset', { type: () => Number, defaultValue: 0 }) offset: number,
  ): Promise<Match[]> {
    return this.manualReviewService.getAutoApprovedMatches(limit, offset);
  }

  @ResolveField(() => [MatchFood])
  async foodMatches(@Parent() match: Match): Promise<MatchFood[]> {
    return this.manualReviewDataLoader.batchMatchFoods.load(match.id);
  }

  @ResolveField(() => [MatchManualReview])
  async manualReviews(@Parent() match: Match): Promise<MatchManualReview[]> {
    return this.manualReviewDataLoader.batchManualReviews.load(match.id);
  }
}
