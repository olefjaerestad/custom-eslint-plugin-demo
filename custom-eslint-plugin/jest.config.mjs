/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/**
 * @type {import('@jest/types').Config.ProjectConfig}
 */
const config = {
    clearMocks: true,
    coverageDirectory: 'coverage',
    extensionsToTreatAsEsm: ['.jsx', '.ts', '.tsx'],
    preset: 'ts-jest',
    /**
     * As of November 17 2022 (version 29.0.3), there's an issue with ts-jest
     * using very much memory. `isolatedModules: true` is a workaround to solve this.
     * @see https://github.com/kulshekhar/ts-jest/issues/2015
     * @see https://github.com/kulshekhar/ts-jest/issues/1967
     */
    transform: {
      '^.+\\.tsx?$': ['ts-jest', { isolatedModules: true }],
    },
  };
  
  export default config;