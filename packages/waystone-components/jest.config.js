/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest/presets/js-with-ts',
  testEnvironment: 'jsdom',
  verbose: true,
  resetMocks: true,
  moduleDirectories: ['node_modules'],
  setupFilesAfterEnv: [
    '@testing-library/jest-dom',
    '@testing-library/jest-dom/extend-expect',
  ],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    '!<rootDir>/src/**/*.{style,styles}.ts',
    '!<rootDir>/src/**/*.{stories,test,spec}.{ts,tsx}',
    '!<rootDir>/src/**/*.{constants,models}.ts',
    '!<rootDir>/src/**/*.generated.{ts,js}',
    '!<rootDir>/src/*.{ts,tsx}',
    '!<rootDir>/**/{models,router,constants,apis}/**',
  ],
};
