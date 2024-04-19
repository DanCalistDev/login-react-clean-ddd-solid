module.exports = {
 roots: ['<rootDir>/src'],
 collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}'],
 coverageDirectory: 'coverage',
 testEnvironment: 'node',
 transform: {
    '^.+\\.tsx?$': 'ts-jest',
 },
 testMatch: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],
 moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
 moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
 },
};

