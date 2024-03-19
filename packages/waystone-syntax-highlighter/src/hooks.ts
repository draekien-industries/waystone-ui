import { useMemo } from 'react';
import type { CreateCodeTreeOptions } from './utils';
import { createCodeTree, flattenCodeTree } from './utils';

export const useCodeTree = (options: CreateCodeTreeOptions) =>
  useMemo(() => {
    const { children: tree } = createCodeTree(options);

    return flattenCodeTree({ tree });
  }, [options]);
