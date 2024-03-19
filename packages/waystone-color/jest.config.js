/** @type {import('ts-jest/dist/types').JestConfigWithTsJest} */
export default {
  preset: 'ts-jest/presets/js-with-ts',
  verbose: true,
  resetMocks: true,
  rootDir: '.',
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleDirectories: ['node_modules'],
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    '!<rootDir>/src/**/*.{style,styles}.ts',
    '!<rootDir>/src/**/*.{stories,test,spec}.{ts,tsx}',
    '!<rootDir>/src/**/*.{constants,models}.ts',
    '!<rootDir>/src/**/*.generated.{ts,js}',
    '!<rootDir>/src/*.{ts,tsx}',
    '!<rootDir>/**/{models,router,constants,apis}/**',
    '!<rootDir>/**/{__tests__,__fixtures__}/**',
    '!<rootDir>/**/index.ts',
  ],
  transform: {
    '^.+\\.m?[tj]sx?$': [
      'ts-jest',
      {
        isolatedModules: true,
      },
    ],
  },
};
