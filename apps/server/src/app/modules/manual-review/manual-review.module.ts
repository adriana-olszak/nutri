import { Module } from '@nestjs/common';
import { DbClientModule } from '@nutri/server-db-client';
import { MANUAL_REVIEW_RESOLVERS } from './resolvers';
import { ManualReviewDataLoader } from './manual-review.data-loader';
import { ManualReviewService } from './manual-review.service';

@Module({
  imports: [DbClientModule],
  providers: [ManualReviewDataLoader, ManualReviewService, ...MANUAL_REVIEW_RESOLVERS],
})
export class ManualReviewModule {
}
