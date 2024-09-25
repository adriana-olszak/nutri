import { Resolver, Query, Mutation, Args, ID, ResolveField, Parent } from '@nestjs/graphql';
import { ManualReviewService } from '../manual-review.service';
import { MatchManualReview } from '../../../graphql/models/match-manual-review.model';
import { Match } from '../../../graphql/models/match.model';
import { ReviewStatus } from '../../../graphql/prisma/review-status.enum';

@Resolver(() => MatchManualReview)
export class MatchManualReviewResolver {
  constructor(
    private readonly manualReviewService: ManualReviewService,
  ) {
  }

  @Mutation(() => MatchManualReview)
  initiateManualReview(@Args('matchId', { type: () => ID }) matchId: string): Promise<MatchManualReview> {
    return this.manualReviewService.initiateManualReview(matchId);
  }

  @Mutation(() => MatchManualReview)
  updateReviewStatus(
    @Args('reviewId', { type: () => ID }) reviewId: string,
    @Args('status', { type: () => ReviewStatus }) status: ReviewStatus,
  ): Promise<MatchManualReview> {
    return this.manualReviewService.updateReviewStatus(reviewId, status);
  }

  @Mutation(() => Match)
  approveMatch(
    @Args('reviewId', { type: () => ID }) reviewId: string,
    @Args('matchFoodId', { type: () => ID }) matchFoodId: string,
  ): Promise<Match> {
    return this.manualReviewService.approveMatch(reviewId, matchFoodId);
  }

  @Mutation(() => Match)
  rejectMatch(
    @Args('reviewId', { type: () => ID }) reviewId: string,
    @Args('reason', { nullable: true }) reason?: string,
  ): Promise<Match> {
    return this.manualReviewService.rejectMatch(reviewId, reason);
  }

  @Mutation(() => MatchManualReview)
  requestFurtherReview(
    @Args('reviewId', { type: () => ID }) reviewId: string,
    @Args('reason') reason: string,
  ): Promise<MatchManualReview> {
    return this.manualReviewService.requestFurtherReview(reviewId, reason);
  }

  @Mutation(() => MatchManualReview)
  initiateManualFoodSelection(@Args('reviewId', { type: () => ID }) reviewId: string): Promise<MatchManualReview> {
    return this.manualReviewService.initiateManualFoodSelection(reviewId);
  }

  @Mutation(() => Match)
  completeManualFoodSelection(
    @Args('reviewId', { type: () => ID }) reviewId: string,
    @Args('foodId', { type: () => ID }) foodId: string,
  ): Promise<Match> {
    return this.manualReviewService.completeManualFoodSelection(reviewId, foodId);
  }

  @Mutation(() => MatchManualReview)
  cancelManualFoodSelection(@Args('reviewId', { type: () => ID }) reviewId: string): Promise<MatchManualReview> {
    return this.manualReviewService.cancelManualFoodSelection(reviewId);
  }

  @Query(() => MatchManualReview)
  getReviewDetails(@Args('reviewId', { type: () => ID }) reviewId: string): Promise<MatchManualReview> {
    return this.manualReviewService.getReviewDetails(reviewId);
  }

  @Query(() => [MatchManualReview])
  getReviewHistory(@Args('matchId', { type: () => ID }) matchId: string): Promise<MatchManualReview[]> {
    return this.manualReviewService.getReviewHistory(matchId);
  }

  @ResolveField(() => Match)
  async match(@Parent() review: MatchManualReview): Promise<Match> {
    return this.manualReviewService.getMatchDetails(review.matchId);
  }
}
