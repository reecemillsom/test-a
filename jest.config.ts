/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type {Config} from 'jest';

const config: Config = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testEnvironment: 'node',
  rootDir: './',
  collectCoverage: true,
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: [
    "\\\\node_modules\\\\"
  ],
  coverageProvider: "v8",
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100
    }
  },
  testMatch: [
    "<rootDir>/src/**/*.test.ts"
  ],
  testPathIgnorePatterns: ["<rootDir>/node_modules/"],
};

export default config;
