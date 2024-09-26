import { InputType } from '@nestjs/graphql';
import { FilterInput } from '../common/filter.mixin';
import {
  ManualReviewMatchesFilterProperty,
} from './manual-review-matches-filter-property.enum';


@InputType('ManualReviewMatchesFilterInput')
export class ManualReviewMatchesFilterInput extends FilterInput(ManualReviewMatchesFilterProperty, 'ManualReviewMatches') {
}
