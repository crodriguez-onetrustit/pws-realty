import { test, expect } from '@playwright/test';

test.describe('PWS Realty Website', () => {
  
  test('Homepage loads correctly', async ({ page }) => {
    await page.goto('https://pwsrealty.com');
    await expect(page).toHaveTitle(/PWS Realty/);
  });

  test('Hero section is visible', async ({ page }) => {
    await page.goto('https://pwsrealty.com');
    const hero = page.locator('.hero');
    await expect(hero).toBeVisible();
    await expect(page.locator('h1')).toContainText('Dream Home');
  });

  test('Navigation works', async ({ page }) => {
    await page.goto('https://pwsrealty.com');
    
    // Click nav link
    await page.click('nav a:has-text("Properties")');
    await expect(page).toHaveURL(/.*properties/);
    
    await page.click('nav a:has-text("About")');
    await expect(page).toHaveURL(/.*about/);
    
    await page.click('nav a:has-text("Contact")');
    await expect(page).toHaveURL(/.*contact/);
  });

  test('Property cards display', async ({ page }) => {
    await page.goto('https://pwsrealty.com');
    const cards = page.locator('.property-card');
    await expect(cards.first()).toBeVisible();
  });

  test('Stats section visible', async ({ page }) => {
    await page.goto('https://pwsrealty.com');
    await expect(page.locator('.stats-section')).toBeVisible();
  });

  test('Services section visible', async ({ page }) => {
    await page.goto('https://pwsrealty.com');
    await expect(page.locator('.services-grid')).toBeVisible();
  });

  test('Footer visible', async ({ page }) => {
    await page.goto('https://pwsrealty.com');
    await expect(page.locator('.footer')).toBeVisible();
  });

  test('Properties page loads with filters', async ({ page }) => {
    await page.goto('https://pwsrealty.com/properties');
    await expect(page.locator('.search-select').first()).toBeVisible();
  });

  test('Contact page loads with form', async ({ page }) => {
    await page.goto('https://pwsrealty.com/contact');
    await expect(page.locator('form')).toBeVisible();
  });

  test('Admin panel loads', async ({ page }) => {
    await page.goto('https://pwsrealty.com/admin');
    await expect(page.locator('.admin-sidebar')).toBeVisible();
    await expect(page.locator('h1:has-text("Dashboard")')).toBeVisible();
  });

  test('About page loads with team', async ({ page }) => {
    await page.goto('https://pwsrealty.com/about');
    await expect(page.locator('h1')).toContainText('About');
    await expect(page.locator('h3:has-text("Stephanie Munoz")')).toBeVisible();
  });

});
