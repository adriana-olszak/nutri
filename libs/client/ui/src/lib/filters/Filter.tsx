import { DateFilter } from './components/DateFilter';
import { ClearFilter } from './components/ClearFilter';
import { PropertyFilter } from './components/PropertyFilter';
import { ButtonGroup } from '@nutri/client-ui/group-button';
import { ComparisonOperator } from '@nutri/client-gql';
import { OperatorFilter } from '@nutri/client-ui/filters/components/OperatorFilter';
import { TextFilter } from '@nutri/client-ui/filters/components/TextFilter';


interface FilterProps {
  filterName: string;
  filterType: string;
  operators: string[];
  filterValue: string;
  onClearFilter: () => void;
  operatorValue: ComparisonOperator;
  onChangeOperator: (operator: string) => void;
  onChangeFilterValue: (value: string | Date) => void;
}

export const Filter = ({
                         onChangeOperator,
                         operators,
                         operatorValue,
                         filterType,
                         filterName,
                         onChangeFilterValue,
                         filterValue,
                         onClearFilter,
                       }: FilterProps) => {
  return (
    <ButtonGroup className="flex items-center">
      <PropertyFilter name={filterName} />
      <OperatorFilter
        type={filterType}
        value={operatorValue}
        operators={operators}
        onSelect={onChangeOperator}
      />
      {filterType === 'text' && (
        <TextFilter
          filterName={filterName}
          filterValue={filterValue}
          operatorValue={operatorValue}
          onChangeFilterValue={onChangeFilterValue}
        />
      )}

      {filterType === 'date' && (
        <DateFilter
          filterName={filterName}
          operatorValue={operatorValue}
          filterValue={filterValue as string | [string | null, string | null]}
          onChangeFilterValue={
            onChangeFilterValue as (
              value: string | [string | null, string | null],
            ) => void
          }
        />
      )}

      <ClearFilter onClearFilter={onClearFilter} />
    </ButtonGroup>
  );
};
