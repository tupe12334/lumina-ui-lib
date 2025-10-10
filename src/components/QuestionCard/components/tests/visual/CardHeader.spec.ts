import { test, expect } from '@playwright/test'

test.describe('CardHeader Visual Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:6006/iframe.html?id=components-questioncard-cardheader--default')
    await page.waitForSelector('#storybook-root', { state: 'visible' })
  })

  test('default appearance', async ({ page }) => {
    await expect(page).toHaveScreenshot('cardheader-default.png')
  })

  test('mobile appearance', async ({ page }) => {
    await page.goto('http://localhost:6006/iframe.html?id=components-questioncard-cardheader--mobile')
    await page.waitForSelector('#storybook-root', { state: 'visible' })
    await expect(page).toHaveScreenshot('cardheader-mobile.png')
  })

  test('long question appearance', async ({ page }) => {
    await page.goto('http://localhost:6006/iframe.html?id=components-questioncard-cardheader--long-question')
    await page.waitForSelector('#storybook-root', { state: 'visible' })
    await expect(page).toHaveScreenshot('cardheader-long-question.png')
  })

  test('complex content appearance', async ({ page }) => {
    await page.goto('http://localhost:6006/iframe.html?id=components-questioncard-cardheader--with-complex-content')
    await page.waitForSelector('#storybook-root', { state: 'visible' })
    await expect(page).toHaveScreenshot('cardheader-complex-content.png')
  })

  test('without badge appearance', async ({ page }) => {
    await page.goto('http://localhost:6006/iframe.html?id=components-questioncard-cardheader--without-badge')
    await page.waitForSelector('#storybook-root', { state: 'visible' })
    await expect(page).toHaveScreenshot('cardheader-without-badge.png')
  })

  test('without progress appearance', async ({ page }) => {
    await page.goto('http://localhost:6006/iframe.html?id=components-questioncard-cardheader--without-progress')
    await page.waitForSelector('#storybook-root', { state: 'visible' })
    await expect(page).toHaveScreenshot('cardheader-without-progress.png')
  })

  test('responsive behavior', async ({ page }) => {
    // Test desktop view
    await page.setViewportSize({ width: 1200, height: 800 })
    await page.waitForSelector('#storybook-root', { state: 'visible' })
    await expect(page).toHaveScreenshot('cardheader-desktop.png')

    // Test tablet view
    await page.setViewportSize({ width: 768, height: 1024 })
    await page.waitForSelector('#storybook-root', { state: 'visible' })
    await expect(page).toHaveScreenshot('cardheader-tablet.png')

    // Test mobile view
    await page.setViewportSize({ width: 375, height: 667 })
    await page.waitForSelector('#storybook-root', { state: 'visible' })
    await expect(page).toHaveScreenshot('cardheader-mobile-responsive.png')
  })
})