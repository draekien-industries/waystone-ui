/** @type {import('ts-jest/dist/types').JestConfigWithTsJest} */
export default {
  preset: 'ts-jest/presets/js-with-ts',
  testEnvironment: 'jsdom',
  verbose: true,
  resetMocks: true,
  rootDir: '.',
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  transform: {
    '^.+\\.m?[tj]sx?$': [
      'ts-jest',
      {
        isolatedModules: true,
      },
    ],
  },
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
};
