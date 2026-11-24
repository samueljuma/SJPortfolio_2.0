import { defineConfig, devices } from '@playwright/test';

/**
 * Smoke tests run against the production build:
 *   npm run build && npm run test:e2e
 */
export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: process.env.CI ? 'github' : 'list',
  use: {
    baseURL: 'http://localhost:4321',
    trace: 'on-first-retry',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'], channel: 'chromium' } },
    { name: 'mobile', use: { ...devices['Pixel 7'], channel: 'chromium' } },
  ],
  webServer: {
    command: 'node ./dist/server/entry.mjs',
    port: 4321,
    reuseExistingServer: !process.env.CI,
  },
});
