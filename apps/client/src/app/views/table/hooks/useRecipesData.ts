import { useRecipesStore } from '../../../hooks/useStore';

export const useRecipesData = () => {
  const store = useRecipesStore();
  // const [sorting, setSorting] = useState([{ id: 'ORGANIZATIONS_LAST_TOUCHPOINT', desc: true }]);

  const data = store.toArray();

  return { data };
};
