import { Injectable } from '@nestjs/common';
import { TableIdTypeEnum } from '../../graphql/enums/table-id-type.enum';
import {
  FilterableProperty,
  FilterPropertyMetadata,
  OPERATORS_BY_TYPE,
  PropertyType,
} from '../../graphql/filters/common/filter-property-metadata';
import { RecipeFilterProperty } from '../../graphql/filters/recipes/recipe-filter-property.enum';
import { recipePropertyMetadata } from '../../graphql/filters/recipes/recipe-filter-metadata';

import { ComparisonOperator } from '@nutri/common-interfaces';

@Injectable()
export class FilterService {
  getPossibleFilters(tableId: TableIdTypeEnum): FilterableProperty[] {
    switch (tableId) {
      case TableIdTypeEnum.RECIPES:
        return this.getFiltersFromMetadata(RecipeFilterProperty, recipePropertyMetadata);
      default:
        return [];
    }
  }

  private getFiltersFromMetadata<T extends string>(
    filterPropertyEnum: Record<string, T>,
    propertyMetadata: FilterPropertyMetadata<T>,
  ): FilterableProperty[] {
    return Object.values(filterPropertyEnum).map(prop => ({
      name: prop,
      type: this.getPropertyTypeString(propertyMetadata[prop].type),
      operators: this.getOperatorsForType(propertyMetadata[prop].type),
    }));
  }

  private getPropertyTypeString(propertyType: PropertyType): string {
    return PropertyType[propertyType];
  }

  private getOperatorsForType(propertyType: PropertyType): ComparisonOperator[] {
    return Array.from(OPERATORS_BY_TYPE[propertyType]);
  }
}
