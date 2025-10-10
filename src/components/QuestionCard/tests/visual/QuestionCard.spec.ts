import { test, expect } from '@playwright/test';

test.describe('QuestionCard', () => {
  test('matches snapshot - default', async ({ page }) => {
    await page.goto('/iframe.html?id=components-questioncard--default&viewMode=story');
    await page.waitForSelector('#storybook-root');
    await page.waitForTimeout(500);
    await expect(page.locator('#storybook-root')).toHaveScreenshot();
  });

  test('matches snapshot - with modules', async ({ page }) => {
    await page.goto('/iframe.html?id=components-questioncard--with-modules&viewMode=story');
    await page.waitForSelector('#storybook-root');
    await page.waitForTimeout(500);
    await expect(page.locator('#storybook-root')).toHaveScreenshot();
  });

  test('matches snapshot - multipart', async ({ page }) => {
    await page.goto('/iframe.html?id=components-questioncard--multipart&viewMode=story');
    await page.waitForSelector('#storybook-root');
    await page.waitForTimeout(500);
    await expect(page.locator('#storybook-root')).toHaveScreenshot();
  });
});
