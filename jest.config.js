module.exports = {
  preset: 'jest-preset-angular',
  transformIgnorePatterns: [
    'node_modules/(?!(.*\\.mjs$|@angular/common/locales/.*\\.js$|@faker-js/faker/.*\\.js$))',
  ],
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  coverageReporters: ["html", "json", "lcov", "text", "clover"],
  collectCoverageFrom: ['src/**/*.ts', '!src/**/*.spec.ts', '!src/main.ts'],
  modulePathIgnorePatterns: ["<rootDir>/dist/"],
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/dist/",
  ],

  moduleNameMapper: {
    '^@faker-js/faker$': '<rootDir>/src/app/mocks/faker.mock.ts',
  },

  verbose: true,
  testEnvironment: "jsdom",
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  clearMocks: true,
  testMatch: ["**/*.spec.ts"],
  rootDir: './'
};