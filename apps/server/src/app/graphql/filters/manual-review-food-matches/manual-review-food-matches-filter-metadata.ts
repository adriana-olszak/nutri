import { FilterPropertyMetadata, PropertyType } from '../common/filter-property-metadata';
import { ManualReviewFoodMatchesFilterProperty } from './manual-review-food-matches-filter-property.enum';

export const manualReviewFoodMatchesPropertyMetadata: FilterPropertyMetadata<ManualReviewFoodMatchesFilterProperty> = {
  [ManualReviewFoodMatchesFilterProperty.id]: { type: PropertyType.String },
  [ManualReviewFoodMatchesFilterProperty.createdAt]: { type: PropertyType.Date },
  [ManualReviewFoodMatchesFilterProperty.updatedAt]: { type: PropertyType.Date },
};
