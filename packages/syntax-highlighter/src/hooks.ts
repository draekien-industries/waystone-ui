import { useMemo } from 'react';
import type { CreateCodeTreeOptions } from './utils';
import { createCodeTree, flattenCodeTree } from './utils';

export const useCodeTree = ({ code, language }: CreateCodeTreeOptions) =>
  useMemo(() => {
    const { children: tree } = createCodeTree({ code, language });

    return flattenCodeTree({ tree });
  }, [code, language]);
