import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useSearchParams } from 'react-router-dom';
import { useStores } from '../../../hooks/useStore';
import { Filter } from '@nutri/client-ui/filters/Filter';
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Input,
} from '@nutri/client-ui';
import { IconButton } from '@nutri/client-ui/icon-button';
import { ChevronDown } from 'lucide-react';


interface PossibleFilter {
  name: string;
  type: 'String' | 'Number' | 'Date';
  operators: string[];
}

interface FilterItem {
  property: string;
  operator: string;
  value: string | number | Date | null;
  active: boolean;
}

export const Filters = observer(() => {
  const store = useStores();
  const [searchParams] = useSearchParams();
  const [filterSearch, setFilterSearch] = useState('');

  const preset = searchParams.get('preset');
  const tableViewDef = store.tableViews.getById(preset || '') as TableViewDefStore;
  const possibleFilters = tableViewDef.getPossibleFilters();
  const currentFilters = tableViewDef.getFilters()?.AND?.map(f => f.filter) || [];

  const availableFilters = possibleFilters.filter(filter =>
    filter.name.toLowerCase().includes(filterSearch.toLowerCase())
  );

  const addFilter = (filter: typeof possibleFilters[0]) => {
    tableViewDef.appendFilter({
      property: filter.name,
      operation: filter.operators[0] as ComparisonOperator,
      value: '',
      active: false
    });
  };

  const updateFilter = (filter: ExtendedFilterItem) => {
    tableViewDef.setFilter(filter);
  };

  const removeFilter = (property: string) => {
    tableViewDef.removeFilter(property);
  };

  const applyFilters = () => {
    tableViewDef.save();
  };

  return (
    <div className='flex flex-col gap-2'>
      <div className='flex gap-2 flex-wrap'>
        {currentFilters.map((filter, index) => (
          <Filter
            key={index}
            filterValue={filter.value}
            onClearFilter={() => removeFilter(filter.property)}
            filterName={filter.property}
            operators={possibleFilters.find(pf => pf.name === filter.property)?.operators || []}
            filterType={possibleFilters.find(pf => pf.name === filter.property)?.type.toLowerCase() || ''}
            operatorValue={filter.operation}
            onChangeOperator={(operator) => updateFilter({ ...filter, operation: operator as ComparisonOperator })}
            onChangeFilterValue={(value) => updateFilter({ ...filter, value, active: true })}
          />
        ))}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            {filters.length ? (
              <IconButton
                size="xs"
                variant="outline"
                aria-label="filters"
                icon={<ChevronDown />}
                colorScheme="grayModern"
                className="border-transparent"
              />
            ) : (
              <Button
                size="xs"
                colorScheme="grayModern"
                leftIcon={<ChevronDown />}
              >
                Filters
              </Button>
            )}
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" side="bottom">
            <Input
              size="sm"
              variant="unstyled"
              className="px-2.5"
              value={filterSearch}
              placeholder="Filter by"
              onChange={(e) => setFilterSearch(e.target.value)}
            />
            {availableFilters.map((filter) => (
              <DropdownMenuItem
                key={filter.name}
                onClick={() => addFilter(filter)}
              >
                <div className="flex items-center justify-center gap-2">
                  {filter.name}
                </div>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <Button onClick={applyFilters}>Apply Filters</Button>
    </div>
  );
});
