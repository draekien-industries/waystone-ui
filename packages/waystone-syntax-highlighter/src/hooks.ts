import { useMemo } from 'react';
import {
  createCodeTree,
  CreateCodeTreeOptions,
  flattenCodeTree,
} from './utils';

export const useCodeTree = (options: CreateCodeTreeOptions) => useMemo(() => {
    const { children: tree } = createCodeTree(options);

    return flattenCodeTree({ tree });
  }, [options]);
