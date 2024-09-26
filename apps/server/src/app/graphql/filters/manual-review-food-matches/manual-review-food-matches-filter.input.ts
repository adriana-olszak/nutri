import { InputType } from '@nestjs/graphql';
import { FilterInput } from '../common/filter.mixin';
import { ManualReviewFoodMatchesFilterProperty } from './manual-review-food-matches-filter-property.enum';


@InputType('ManualReviewFoodMatchesFilterInput')
export class ManualReviewFoodMatchesFilterInput extends FilterInput(ManualReviewFoodMatchesFilterProperty, 'ManualReviewFoodMatches') {
}
