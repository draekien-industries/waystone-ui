import { createSpan } from './createSpan';
import { Tree } from '../lib';

export type FlattenCodeTreeOptions = {
  tree: Tree;
  className?: string[];
  accumulator?: Tree;
};

export const flattenCodeTree = ({
  tree,
  className = [],
  accumulator = [],
}: FlattenCodeTreeOptions) => {
  for (let i = 0; i < tree.length; i++) {
    const node = tree[i];

    if (node.type === 'text') {
      const element = createSpan({
        children: [node],
        className: [...new Set(className)],
      });

      accumulator.push(element);
    } else if (node.children) {
      const codeTree = flattenCodeTree({
        tree: node.children,
        className: className.concat(node.properties.className),
      });

      codeTree.forEach((element) => accumulator.push(element));
    }
  }

  return accumulator;
};
