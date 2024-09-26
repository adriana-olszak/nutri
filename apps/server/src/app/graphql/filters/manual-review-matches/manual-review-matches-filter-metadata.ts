import { FilterPropertyMetadata, PropertyType } from '../common/filter-property-metadata';
import { ManualReviewMatchesFilterProperty } from './manual-review-matches-filter-property.enum';

export const manualReviewMatchesPropertyMetadata: FilterPropertyMetadata<ManualReviewMatchesFilterProperty> = {
  [ManualReviewMatchesFilterProperty.id]: { type: PropertyType.String },
  [ManualReviewMatchesFilterProperty.createdAt]: { type: PropertyType.Date },
  [ManualReviewMatchesFilterProperty.updatedAt]: { type: PropertyType.Date },
};
