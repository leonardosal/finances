module.exports = {
  bail: 1,
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**',
    '!<rootDir>/node_modules/',
    '!<rootDir>/src/index.js',
  ],
  coverageDirectory: '__tests__/coverage',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  testMatch: ['**/__tests__/**/*.test.js'],
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'babel-jest',
  },
};
