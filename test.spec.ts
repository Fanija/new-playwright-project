import { test, expect } from '@playwright/test';
for (let i = 0; i < 150; i++) {
  test(`basic test numer ${i}`, async ({ page }) => {
    await page.waitForTimeout(10 * 1000);
    expect(true).toBe(true);
  });
};