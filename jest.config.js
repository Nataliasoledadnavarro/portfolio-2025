// Alternative modern approach (uncomment to try):
// import nextJest from 'next/jest'
const nextJest = require("next/jest");

/** @type {import('jest').Config} */
const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files
  dir: "./",
});

// Add any custom config to be passed to Jest
const config = {
  coverageProvider: "v8",
  testEnvironment: "jsdom",

  // Setup files
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],

  // Module name mapping for absolute imports
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },

  // Test patterns
  testMatch: [
    "**/__tests__/**/*.(test|spec).(ts|tsx|js)",
    "**/*.(test|spec).(ts|tsx|js)",
  ],

  // Coverage configuration
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "!src/**/*.d.ts",
    "!src/**/*.stories.{ts,tsx}",
    "!src/**/index.{ts,tsx}",
  ],

  // Coverage thresholds (para mantener calidad)
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70,
    },
  },

  // Ignore patterns
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],

  // Transform configuration
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
  },

  // Module file extensions
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],

  // Verbose output
  verbose: true,
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(config);
