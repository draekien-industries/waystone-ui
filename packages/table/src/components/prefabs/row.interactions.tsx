'use client';

import { Checkbox } from '@waystone/form-fields';
import { Button } from '@waystone/button';
import { Flex } from 'theme-ui';
import type {
  CellContext,
  HeaderContext,
  ColumnDef,
} from '@tanstack/react-table';
import { useCallback, useTransition } from 'react';

const TableBodyRowInteractions = <D, V>({ row }: CellContext<D, V>) => {
  const {
    id,
    depth,
    getCanSelect,
    getCanSelectSubRows,
    getIsSelected,
    getIsSomeSelected,
    getToggleSelectedHandler,
    getCanExpand,
    getIsExpanded,
    getToggleExpandedHandler,
  } = row;

  const [isTransitioning, startTransition] = useTransition();

  const handleChange = useCallback(
    (e: unknown) => {
      startTransition(() => {
        const handler = getToggleSelectedHandler();

        handler(e);
      });
    },
    [getToggleSelectedHandler]
  );

  const handleExpand = useCallback(() => {
    startTransition(() => {
      const handler = getToggleExpandedHandler();

      handler();
    });
  }, [getToggleExpandedHandler]);

  return (
    <Flex sx={{ gap: 'small', paddingLeft: `${depth * 1.5}rem` }}>
      {(getCanSelect() || getCanSelectSubRows()) && (
        <Checkbox
          id={`checkbox_${id}`}
          checked={getIsSelected()}
          indeterminate={getIsSomeSelected()}
          onChange={handleChange}
        />
      )}
      {getCanExpand() && (
        <Button
          icon={{ name: getIsExpanded() ? 'expand_less' : 'expand_more' }}
          variant="ghost"
          onClick={handleExpand}
          loading={isTransitioning}
        />
      )}
    </Flex>
  );
};

const TableHeadRowInteractions = <D, V>({ table }: HeaderContext<D, V>) => {
  const {
    getIsAllRowsSelected,
    getIsSomeRowsSelected,
    getToggleAllRowsSelectedHandler,
    getCanSomeRowsExpand,
    getIsAllRowsExpanded,
    getToggleAllRowsExpandedHandler,
  } = table;

  const [isTransitioning, startTransition] = useTransition();

  const handleChange = useCallback(
    (e: unknown) => {
      startTransition(() => {
        const handler = getToggleAllRowsSelectedHandler();

        handler(e);
      });
    },
    [getToggleAllRowsSelectedHandler]
  );

  const handleExpand = useCallback(
    (e: unknown) => {
      startTransition(() => {
        const handler = getToggleAllRowsExpandedHandler();

        handler(e);
      });
    },
    [getToggleAllRowsExpandedHandler]
  );

  return (
    <Flex sx={{ gap: 'small' }}>
      <Checkbox
        id="select-all-checkbox"
        checked={getIsAllRowsSelected()}
        indeterminate={getIsSomeRowsSelected()}
        onChange={handleChange}
      />
      {getCanSomeRowsExpand() && (
        <Button
          icon={{
            name: getIsAllRowsExpanded() ? 'expand_less' : 'expand_more',
          }}
          variant="ghost"
          onClick={handleExpand}
          loading={isTransitioning}
        />
      )}
    </Flex>
  );
};

export const createInteractiveColumn = <D = unknown, V = unknown>(
  options?: ColumnDef<D, V>
): ColumnDef<D, V> => {
  if (options) {
    const { id, header, cell, ...rest } = options;

    return {
      id: id ?? 'selector',
      header: header ?? TableHeadRowInteractions,
      cell: cell ?? TableBodyRowInteractions,
      ...rest,
    };
  }

  return {
    id: 'selector',
    header: TableHeadRowInteractions,
    cell: TableBodyRowInteractions,
  };
};
