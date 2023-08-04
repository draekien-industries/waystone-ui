/** @type {import('ts-jest/dist/types').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest/presets/js-with-ts',
  testEnvironment: 'jsdom',
  verbose: true,
  resetMocks: true,
  rootDir: '.',
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  setupFilesAfterEnv: [
    '@testing-library/jest-dom',
    '@testing-library/jest-dom/extend-expect',
  ],
  transform: {
    '\\.[jt]sx?$': 'ts-jest',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!(lowlight)/)'],
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
