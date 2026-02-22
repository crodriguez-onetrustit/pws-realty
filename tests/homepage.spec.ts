import { test, expect } from '@playwright/test';

test.describe('PWS Realty - Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://66.228.32.190:3000');
  });

  test('should load homepage successfully', async ({ page }) => {
    await expect(page).toHaveTitle(/Properties With Stephanie Realty/);
  });

  test('should display hero section', async ({ page }) => {
    const hero = page.locator('h1');
    await expect(hero).toBeVisible();
    await expect(hero).toContainText('Experience');
  });

  test('should display navigation', async ({ page }) => {
    const nav = page.locator('.nav');
    await expect(nav).toBeVisible();
    await expect(nav).toContainText('Properties');
    await expect(nav).toContainText('About');
    await expect(nav).toContainText('Contact');
  });

  test('should display property cards', async ({ page }) => {
    const properties = page.locator('.property-card-luxury');
    const count = await properties.count();
    expect(count).toBeGreaterThan(0);
  });

  test('should display stats section', async ({ page }) => {
    const stats = page.locator('.stats-section');
    await expect(stats).toBeVisible();
  });

  test('should display services section', async ({ page }) => {
    const services = page.locator('.services-section');
    await expect(services).toBeVisible();
  });

  test('should display footer', async ({ page }) => {
    const footer = page.locator('.footer-luxury');
    await expect(footer).toBeVisible();
  });

  test('should have no console errors', async ({ page }) => {
    const errors: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });
    await page.goto('http://66.228.32.190:3000');
    await page.waitForTimeout(2000);
    expect(errors).toHaveLength(0);
  });
});

test.describe('PWS Realty - Navigation', () => {
  test('should navigate to listings page', async ({ page }) => {
    await page.goto('http://66.228.32.190:3000');
    await page.click('text=Properties');
    await expect(page).toHaveURL(/listings/);
  });

  test('should navigate to contact page', async ({ page }) => {
    await page.goto('http://66.228.32.190:3000');
    await page.click('text=Contact');
    await expect(page).toHaveURL(/contact/);
  });
});

test.describe('PWS Realty - Responsive', () => {
  test('should work on mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('http://66.228.32.190:3000');
    await expect(page).toHaveTitle(/Properties With Stephanie Realty/);
  });

  test('should work on tablet viewport', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('http://66.228.32.190:3000');
    await expect(page).toHaveTitle(/Properties With Stephanie Realty/);
  });
});
