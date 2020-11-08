module.exports = {
  testMatch: ['<rootDir>/src/**/*.test.js', '<rootDir>/src/**/*.spec.js'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  coverageDirectory: '<rootDir>/generated/coverage',
  verbose: true,
};
