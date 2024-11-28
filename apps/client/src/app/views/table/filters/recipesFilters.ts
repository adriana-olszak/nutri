import { Recipe } from '@nutri/client-gql';
import { IBaseFilterItem } from '@nutri/common-interfaces';
import { Store } from '@nutri/store/main/store';

export const recipesFilters = (filters: IBaseFilterItem[]) => {
  return filters.map((filter) => {
    switch (filter.property) {
      case 'name':
        // return (org: Store<Recipe>) => org.value.name.includes(filter.value as string);
      // Add more filter cases as needed
      default:
        return () => true;
    }
  });
};
