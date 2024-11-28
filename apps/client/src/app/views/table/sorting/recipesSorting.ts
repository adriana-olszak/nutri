import { Store } from '@nutri/store/main/store';
import { Recipe } from '@nutri/client-gql';

export const recipesSorting = (columnId: string, isDesc: boolean) => {
  return (a: Store<Recipe>, b: Store<Recipe>) => {
    // switch (columnId) {
    //   case 'name':
    //     return isDesc ? b.value.name.localeCompare(a.value.name) : a.value.name.localeCompare(b.value.name);
    //   // Add more sorting cases as needed
    //   default:
    //     return 0;
    // }
  };
};
