module.exports = {
  roots: ['<rootDir>/src'],
  coverageReporters: ['html', 'cobertura', 'text'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.jsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  globals: {},
  // Setup Enzyme
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFilesAfterEnv: ['<rootDir>/config/jest/enzymeSetup.ts'],

  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
}
