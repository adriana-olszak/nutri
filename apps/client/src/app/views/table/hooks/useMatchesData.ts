import { useMatchesStore } from '../../../hooks/useStore';

export const useMatchesData = () => {
  const store = useMatchesStore();
  // const [sorting, setSorting] = useState([{ id: 'ORGANIZATIONS_LAST_TOUCHPOINT', desc: true }]);

  const data = store.toArray();

  return { data };
};
