import React, { useRef } from 'react';
import { observer } from 'mobx-react-lite';
import { RecipesColumn } from '../columns/recipesColumns';
import { Table } from '@nutri/client-ui';
import { TableComponentProps } from '../types';
import { MatchManualReview, Recipe } from '@nutri/client-gql';
import { Match } from '@nutri/store/manual-reviews/types';
import { ManualReviewMatchesColumn } from '../columns/matchesColumns';

export const MatchesTable = observer(({ data, columns }: TableComponentProps<Match>) => {
  const tableRef = useRef<any | null>(null);

  return (
    <Table<ManualReviewMatchesColumn>
      tableRef={tableRef}
      data={data}
      columns={columns}
      enableColumnResizing={true}
    />
  );
});
