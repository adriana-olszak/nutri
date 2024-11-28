import React, { useRef } from 'react';
import { observer } from 'mobx-react-lite';
import { RecipesColumn } from '../columns/recipesColumns';
import { Table } from '@nutri/client-ui';
import { TableComponentProps } from '../types';
import { Recipe } from '@nutri/client-gql';

export const RecipesTable = observer(({ data, columns }: TableComponentProps<Recipe>) => {
  const tableRef = useRef<any | null>(null);

  return (
    <Table<RecipesColumn>
      tableRef={tableRef}
      data={data}
      columns={columns}
      enableColumnResizing={true}
    />
  );
});
