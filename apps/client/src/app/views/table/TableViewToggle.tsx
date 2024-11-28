import React from 'react';
import { observer } from 'mobx-react-lite';
import { useSearchParams } from 'react-router-dom';
import { useStores } from '../../hooks/useStore';
import { TableIdType } from '@nutri/client-gql';
import { getRelatedTableIds } from './tableConfig';
import { Button } from '@nutri/client-ui';
import { cn } from '@nutri/client-utils';
import { ButtonGroup } from '@nutri/client-ui/group-button';

export const TableViewToggle = observer(() => {
  const store = useStores();
  const [searchParams, setSearchParams] = useSearchParams();
  const preset = searchParams.get('preset');

  const currentTableViewDef = store.tableViews.getById(preset || '')?.value;
  const currentTableId = currentTableViewDef?.tableId as TableIdType;

  const relatedTableIds = getRelatedTableIds(currentTableId);

  const handleNavigate = (newTableId: TableIdType) => {
    const newPreset = store.tableViews.toArray().find(
      def => def.value.tableId === newTableId && def.value.isPreset,
    )?.value.id;

    if (newPreset) {
      const newParams = new URLSearchParams(searchParams.toString());
      newParams.set('preset', newPreset);
      setSearchParams(newParams);
    }
  };

  if (relatedTableIds.length <= 1) {
    return null;
  }

  const buttonElements = relatedTableIds.map(({ id, label }) => {
    const tableViewDef = store.tableViews.toArray().find(
      def => def.value.tableId === id && def.value.isPreset,
    );

    if (!tableViewDef) return null;

    return (
      <Button
        key={id}
        onClick={() => handleNavigate(id)}
        className={cn({
          'bg-gray-50 text-gray-700': preset === tableViewDef.value.id,
          'bg-white text-gray-500': preset !== tableViewDef.value.id,
        })}
      >
        {label}
      </Button>
    );
  }).filter((element): element is React.ReactElement => element !== null);

  if (buttonElements.length === 0) {
    return null;
  }

  return (
    <ButtonGroup size="xs" variant="outline" colorScheme="gray">
      {buttonElements}
    </ButtonGroup>
  );
});
