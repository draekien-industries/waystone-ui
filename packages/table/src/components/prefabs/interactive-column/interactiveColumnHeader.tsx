'use client';

import type { HeaderContext } from '@tanstack/react-table';
import { Button } from '@waystone/button';
import { Checkbox } from '@waystone/form-fields';
import { useCallback, useTransition } from 'react';
import { Flex } from 'theme-ui';

export const InteractiveColumnHeader = <D, V>({
  table,
}: HeaderContext<D, V>) => {
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
