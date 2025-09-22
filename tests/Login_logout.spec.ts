import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://admin-dev.yalla.systems/login?callbackUrl=%2Fdashboard');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('hachnatkhan@yopmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Hachnat1');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('button', { name: 'H', exact: true }).click();
  await page.getByRole('menuitem', { name: 'Log out ⇧⌘Q' }).click();
});