import { Module } from '@nestjs/common';
import { DbClientModule } from '@nutri/server-db-client';
import { MatchFoodsRepository } from './repositories/match-foods.repository';
import { MatchManualReviewsRepository } from './repositories/match-manual-reviews.repository';
import { MatchRepository } from './repositories/match.repository';

@Module({
  imports: [DbClientModule],
  providers: [
    MatchRepository,
    MatchFoodsRepository,
    MatchManualReviewsRepository,
  ],
  exports: [
    MatchRepository,
    MatchFoodsRepository,
    MatchManualReviewsRepository,
  ],
})
export class DataAccessMatchingModule {}
