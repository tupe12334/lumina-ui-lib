import { test, expect } from '@playwright/test';

test.describe('QuestionsList', () => {
  test('matches snapshot - default', async ({ page }) => {
    await page.goto('/iframe.html?id=components-questionslist--default&viewMode=story');
    await page.waitForSelector('#storybook-root');
    await page.waitForTimeout(500);
    await expect(page.locator('#storybook-root')).toHaveScreenshot();
  });

  test('matches snapshot - with infinite scroll', async ({ page }) => {
    await page.goto('/iframe.html?id=components-questionslist--with-infinite-scroll&viewMode=story');
    await page.waitForSelector('#storybook-root');
    await page.waitForTimeout(500);
    await expect(page.locator('#storybook-root')).toHaveScreenshot();
  });
});
