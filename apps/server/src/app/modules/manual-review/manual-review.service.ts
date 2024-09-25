import { Injectable } from '@nestjs/common';
import { Prisma, PrismaService } from '@nutri/server-db-client';
import { MatchManualReview } from '../../graphql/models/match-manual-review.model';
import { Match } from '../../graphql/models/match.model';
import { PaginateOptions, PaginatedResult, createPaginator } from 'prisma-pagination';
import { ReviewStatus } from '../../graphql/prisma/review-status.enum';

@Injectable()
export class ManualReviewService {
  constructor(private readonly prisma: PrismaService) {
  }

  async initiateManualReview(matchId: string): Promise<MatchManualReview> {
    const match = await this.prisma.match.update({
      where: { id: matchId },
      data: { status: 'IN_REVIEW' },
    });

    return this.prisma.matchManualReview.create({
      data: {
        matchId: match.id,
        reviewStatus: 'PENDING',
      },
    });
  }

  async updateReviewStatus(reviewId: string, reviewStatus: ReviewStatus): Promise<MatchManualReview> {
    return this.prisma.matchManualReview.update({
      where: { id: reviewId },
      data: {
        reviewStatus: {
          set: reviewStatus,
        },
      },
    });
  }

  async approveMatch(reviewId: string, matchFoodId: string): Promise<Match> {
    const review = await this.prisma.matchManualReview.update({
      where: { id: reviewId },
      data: { reviewStatus: 'APPROVED' },
      include: { match: true },
    });

    return this.prisma.match.update({
      where: { id: review.match.id },
      data: {
        status: {
          set: 'APPROVED',
        },
        selectedFoodMatchId: matchFoodId,
      },
    });
  }

  async rejectMatch(reviewId: string, notes: string): Promise<Match> {
    const review = await this.prisma.matchManualReview.update({
      where: { id: reviewId },
      data: { reviewStatus: 'REJECTED', notes },
      include: { match: true },
    });

    return this.prisma.match.update({
      where: { id: review.match.id },
      data: { status: 'REJECTED' },
    });
  }

  async requestFurtherReview(reviewId: string, notes: string): Promise<MatchManualReview> {
    return this.prisma.matchManualReview.update({
      where: { id: reviewId },
      data: { reviewStatus: 'NEEDS_FURTHER_REVIEW', notes },
    });
  }

  async initiateManualFoodSelection(reviewId: string): Promise<MatchManualReview> {
    const review = await this.prisma.matchManualReview.update({
      where: { id: reviewId },
      data: { reviewStatus: 'MANUAL_SELECTION' },
      include: { match: true },
    });

    await this.prisma.match.update({
      where: { id: review.match.id },
      data: { status: 'REJECTED' },
    });

    return review;
  }

  async completeManualFoodSelection(reviewId: string, foodId: string): Promise<Match> {
    const review = await this.prisma.matchManualReview.findUnique({
      where: { id: reviewId },
      include: { match: true },
    });

    const newMatchFood = await this.prisma.matchFood.create({
      data: {
        matchId: review.match.id,
        foodId,
        matchType: 'MANUAL',
      },
    });

    return this.prisma.match.update({
      where: { id: review.match.id },
      data: {
        status: 'APPROVED',
        selectedFoodMatchId: newMatchFood.id,
      },
    });
  }

  async cancelManualFoodSelection(reviewId: string): Promise<MatchManualReview> {
    return this.prisma.matchManualReview.update({
      where: { id: reviewId },
      data: { reviewStatus: 'NEEDS_FURTHER_REVIEW' },
    });
  }


  async paginatedFindAllMatches(
    options: PaginateOptions = {
      page: 1,
      perPage: 10,
    },
    sortInput?: Prisma.MatchOrderByWithRelationInput,
    filterInput?: Prisma.MatchWhereInput,
  ): Promise<PaginatedResult<Match>> {
    const paginate = createPaginator(options);
    return paginate<Match, Prisma.MatchFindManyArgs>(
      this.prisma.match,
      { orderBy: sortInput, where: filterInput },
    );
  }

  async getMatchDetails(matchId: string): Promise<Match> {
    return this.prisma.match.findUnique({
      where: { id: matchId },
    });
  }

  async getReviewDetails(reviewId: string): Promise<MatchManualReview> {
    return this.prisma.matchManualReview.findUnique({
      where: { id: reviewId },
    });
  }

  async getReviewHistory(matchId: string): Promise<MatchManualReview[]> {
    return this.prisma.matchManualReview.findMany({
      where: { matchId },
    });
  }

  async getAutoApprovedMatches(limit: number, offset: number): Promise<Match[]> {
    return this.prisma.match.findMany({
      where: { status: 'AUTO_APPROVED' },
      take: limit,
      skip: offset,
    });
  }
}
