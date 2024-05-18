import { defineConfig } from 'tsup';

export default defineConfig((options) => ({
  ...options,
  entry: ['./src/index.ts'],
  sourcemap: true,
  dts: true,
  format: ['cjs', 'esm'],
  external: ['react', 'react-dom', '@emotion/react'],
  clean: true,
}));
