import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Recording...
  await page.locator('body').click();
  await page.locator('html').click();
  await page.goto('https://admin-dev.yalla.systems/login?callbackUrl=%2Fdashboard');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('hachnatkhan@yopmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Hachnat1');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: 'Doctor & Staffs' }).click();
  await page.getByRole('button', { name: 'Add New Doctor' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).fill('Khan');
  await page.getByRole('textbox', { name: 'Last Name *' }).click();
  await page.getByRole('textbox', { name: 'Last Name *' }).fill('khan');
  await page.getByRole('textbox', { name: 'Email Address' }).click();
  await page.getByRole('textbox', { name: 'Email Address' }).fill('hachnat@yopmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Hachnat1');
  await page.getByRole('textbox', { name: 'Phone Number' }).click();
  await page.getByRole('textbox', { name: 'Phone Number' }).fill('+974 5555 7651');
  await page.getByRole('textbox', { name: 'Phone Number' }).click();
  await page.getByRole('combobox', { name: 'Gender *' }).click();
  await page.getByRole('option', { name: 'Male', exact: true }).click();
  await page.getByRole('combobox', { name: 'Department *' }).click();
  await page.getByRole('option', { name: 'Dermatology' }).click();
  await page.getByRole('button', { name: 'Create Account' }).click();
});