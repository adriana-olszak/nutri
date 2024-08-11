import type { HeaderContext } from '@tanstack/react-table';

import { memo, useRef, RefObject, useEffect, useState } from 'react';
import { cn } from '@nutri/client-utils';
import {ArrowDown, ArrowUp, Filter} from 'lucide-react';
import { observer } from 'mobx-react-lite';
import { Popover, PopoverContent, PopoverTrigger } from '@nutri/client-ui';
import {IconButton} from "@nutri/client-ui/icon-button";

interface THeadProps<
  InitialRefType extends { focus(): void } = HTMLButtonElement,
> {
  id: string;
  py?: string;
  title: string;
  padding?: string;
  subTitle?: string;
  canSort?: boolean;
  canFilter?: boolean;
  isFiltered?: boolean;
  borderTopColor?: string;
  isSorted?: string | boolean;
  filterWidth?: string | number;
  onToggleSort?: (e: unknown) => void;
  renderFilter?: (
    initialFocusRef: RefObject<InitialRefType>,
  ) => React.ReactNode;
}

export const THead = observer(
  <InitialRefType extends { focus(): void } = HTMLButtonElement>({
    id,
    title,
    canSort,
    isSorted,
    subTitle,
    canFilter,
    isFiltered,
    filterWidth,
    onToggleSort,
    renderFilter,
    py,
  }: THeadProps<InitialRefType>) => {
    const [isOpen, setIsOpen] = useState(false);

    const initialFocusRef = useRef<InitialRefType>(null);

    const isActive = isFiltered;

    return (
      <div className="flex w-full ml-[-22px] flex-col justify-start items-start">
        <div
          style={{ paddingTop: py ?? '0', paddingBottom: py ?? '0' }}
          className={cn(
            isActive ? 'border-gray-300 shadow-sm' : 'border-transparent',
            canSort || isSorted ? 'ml-0' : 'ml-3',
            !canSort ? '' : 'hover:ml-0',
            'flex items-center border rounded-[4px] transition-opacity duration-200 ease-in-out group',
          )}
        >
          {canSort ? (
            isSorted === 'asc' ? (
              <ArrowUp
                id="sort-icon"
                onClick={onToggleSort}
                className={cn(
                  isSorted || isActive ? 'w-3 inline-block' : 'w-0 ',
                  !isSorted ? 'text-gray-400' : 'text-gray-700',
                  'mx-1 w-3 h-3 cursor-pointer group-hover:transition-opacity group-hover:opacity-100 group-hover:w-3 group-hover:duration-200 group-hover:ease-in-out',
                )}
              />
            ) : (
              <ArrowDown
                id="sort-icon"
                onClick={onToggleSort}
                className={cn(
                  isSorted || isActive ? 'w-3 opacity-100' : 'w-0 opacity-0',
                  !isSorted ? 'text-gray-400' : 'text-gray-700',
                  'mx-1 h-3 cursor-pointer group-hover:transition-opacity group-hover:opacity-100 group-hover:w-3 group-hover:duration-200 group-hover:ease-in-out',
                )}
              />
            )
          ) : (
            <div className={cn(canSort ? 'w-3' : 'w-0', 'flex mx-1')} />
          )}
          <p
            onClick={onToggleSort}
            data-test={`org-header-${id}`}
            className={cn(
              isSorted ? 'mt-[-2px] tracking-[-0.3px] ' : 'mt-0',
              canSort ? 'cursor-pointer' : 'cursor-default',
              !isSorted ? 'font-base' : 'font-medium',
              'text-sm text-gray-700',
            )}
          >
            {title}
          </p>
          {canFilter && (
            <Popover open={isOpen} onOpenChange={(value) => setIsOpen(value)}>
              <PopoverTrigger asChild>
                <IconButton
                  size="xxs"
                  variant="ghost"
                  aria-label="filter"
                  icon={
                    <Filter
                      className={cn(
                        isActive || isOpen ? 'text-gray-700' : 'text-gray-400',
                      )}
                    />
                  }
                  className={cn(
                    isActive || isOpen ? 'opacity-100' : 'opacity-0',
                    'filter-icon-button ml-0.5 mr-0.5 rounded-sm group-hover:transition-opacity group-hover:opacity-100 group-hover:duration-200 group-hover:ease-in-out',
                  )}
                />
              </PopoverTrigger>
              <PopoverContent
                side="bottom"
                align="start"
                onFocus={() => setIsOpen(true)}
                style={{ width: filterWidth ?? '12rem' }}
              >
                {renderFilter?.(initialFocusRef)}
              </PopoverContent>
            </Popover>
          )}
        </div>
        {subTitle && <p className="text-xs text-gray-500">{subTitle}</p>}
      </div>
    );
  },
);

export function getTHeadProps<T extends object>(
  context: HeaderContext<T, unknown>,
) {
  const header = context.header;

  const canSort = header.column.getCanSort();
  const isSorted = header.column.getIsSorted();
  const canFilter = header.column.getCanFilter();
  const isFiltered = header.column.getIsFiltered();
  const onToggleSort = header.column.getToggleSortingHandler();

  return {
    canSort,
    isSorted,
    canFilter,
    isFiltered,
    onToggleSort,
  };
}

