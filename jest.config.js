module.exports = {
  collectCoverageFrom: ['src/**/*.{js,ts}'],
  preset: 'ts-jest',
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  testEnvironment: 'node',
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  }
}
