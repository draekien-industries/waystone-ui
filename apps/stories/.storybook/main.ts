import type { StorybookConfig } from '@storybook/react-vite';
import { dirname, join, resolve } from 'path';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-interactions'),
    getAbsolutePath('@storybook/addon-a11y'),
    getAbsolutePath('storybook-dark-mode'),
    '@chromatic-com/storybook',
  ],
  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },
  core: {
    disableTelemetry: true,
  },
  typescript: {
    check: false,
    reactDocgen: 'react-docgen',
  },
  staticDirs: ['../public'],
  docs: {
    autodocs: true,
  },
  viteFinal: async (config, { configType }) => {
    return mergeConfig(config, {
      define: {
        'process.env.NODE_DEBUG': false,
      },
      resolve: {
        alias: [
          {
            find: '@waystone/*',
            replacement: resolve(__dirname, '../../../packages/*'),
          },
        ],
      },
      optimizeDeps: {
        include: ['storybook-dark-mode'],
      },
    });
  },
};
export default config;

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')));
}
