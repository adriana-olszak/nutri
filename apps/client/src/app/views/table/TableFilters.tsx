import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useStores } from '../../hooks/useStore';
import { Button, Input, Select } from '@nutri/client-ui';


interface PossibleFilter {
  name: string;
  type: 'String' | 'Number' | 'Date';
  operators: string[];
}

interface Filter {
  property: string;
  operator: string;
  value: string | number | Date;
}

export const Filters = observer(() => {
  const store = useStores();
  const [filters, setFilters] = useState<Filter[]>([]);
  const tableViewDef = store.tableViews.getById(store.currentPresetId);
  const possibleFilters = tableViewDef?.value.possibleFilters || [];

  const addFilter = () => {
    setFilters([...filters, { property: '', operator: '', value: '' }]);
  };

  const updateFilter = (index: number, field: keyof Filter, value: any) => {
    const newFilters = [...filters];
    newFilters[index] = { ...newFilters[index], [field]: value };
    setFilters(newFilters);
  };

  const removeFilter = (index: number) => {
    setFilters(filters.filter((_, i) => i !== index));
  };

  const renderFilterInput = (filter: Filter, possibleFilter: PossibleFilter, index: number) => {
    switch (possibleFilter.type) {
      case 'String':
        return (
          <Input
            value={filter.value as string}
            onChange={(e) => updateFilter(index, 'value', e.target.value)}
          />
        );
      case 'Number':
        return (
          <Input
            type="number"
            value={filter.value as number}
            onChange={(e) => updateFilter(index, 'value', Number(e.target.value))}
          />
        );
      // case 'Date':
      //   return (
      //     <DatePicker
      //       selected={filter.value as Date}
      //       onChange={(date) => updateFilter(index, 'value', date)}
      //     />
      //   );
      default:
        return null;
    }
  };

  const applyFilters = () => {
    // Here you would typically update your store or make an API call with the filters
    console.log('Applying filters:', filters);
  };

  return (
    <div className="space-y-4">
      {filters.map((filter, index) => {
        const possibleFilter = possibleFilters.find(pf => pf.name === filter.property);
        return (
          <div key={index} className="flex space-x-2">
            <Select
              value={filter.property}
              onChange={(e) => updateFilter(index, 'property', e.target.value)}
            >
              <option value="">Select property</option>
              {possibleFilters.map(pf => (
                <option key={pf.name} value={pf.name}>{pf.name}</option>
              ))}
            </Select>
            {possibleFilter && (
              <Select
                value={filter.operator}
                onChange={(e) => updateFilter(index, 'operator', e.target.value)}
              >
                <option value="">Select operator</option>
                {possibleFilter.operators.map(op => (
                  <option key={op} value={op}>{op}</option>
                ))}
              </Select>
            )}
            {possibleFilter && renderFilterInput(filter, possibleFilter, index)}
            <Button onClick={() => removeFilter(index)}>Remove</Button>
          </div>
        );
      })}
      <Button onClick={addFilter}>Add Filter</Button>
      <Button onClick={applyFilters}>Apply Filters</Button>
    </div>
  );
});
