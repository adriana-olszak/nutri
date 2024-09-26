import { FilterPropertyMetadata, PropertyType } from '../common/filter-property-metadata';
import { RecipeFilterProperty } from './recipe-filter-property.enum';

export const recipePropertyMetadata: FilterPropertyMetadata<RecipeFilterProperty> = {
  [RecipeFilterProperty.id]: { type: PropertyType.String },
  [RecipeFilterProperty.title]: { type: PropertyType.String },
  [RecipeFilterProperty.description]: { type: PropertyType.String },
  [RecipeFilterProperty.cookingTime]: { type: PropertyType.Number },
  [RecipeFilterProperty.prepTime]: { type: PropertyType.Number },
  [RecipeFilterProperty.servingsMin]: { type: PropertyType.Number },
  [RecipeFilterProperty.servingsMax]: { type: PropertyType.Number },
  [RecipeFilterProperty.createdAt]: { type: PropertyType.Date },
  [RecipeFilterProperty.updatedAt]: { type: PropertyType.Date },
};
