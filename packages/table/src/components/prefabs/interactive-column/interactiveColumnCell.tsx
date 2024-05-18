'use client';

import type { CellContext } from '@tanstack/react-table';
import { Button } from '@waystone/button';
import { Checkbox } from '@waystone/form-fields';
import { useCallback, useTransition } from 'react';
import { Flex } from 'theme-ui';

export const InteractiveColumnCell = <D, V>({
  row,
}: Pick<CellContext<D, V>, 'row'>) => {
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
