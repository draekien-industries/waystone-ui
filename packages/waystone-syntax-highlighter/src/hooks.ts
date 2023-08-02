import { useMemo } from 'react';
import { CreateCodeTreeOptions, createCodeTree } from './utils/createCodeTree';
import { flattenCodeTree } from './utils/flattenCodeTree';

export const useCodeTree = (options: CreateCodeTreeOptions) => {
  const codeTree = useMemo(() => {
    const { children: tree } = createCodeTree(options);

    return flattenCodeTree({ tree });
  }, [options]);

  return codeTree;
};
