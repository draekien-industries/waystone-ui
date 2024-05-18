import { defineConfig } from 'tsup';

export default defineConfig((options) => ({
  entry: ['./src/index.ts'],
  sourcemap: true,
  dts: true,
  format: ['cjs', 'esm'],
  clean: true,
  ...options,
}));
