import { test as base, Page, expect } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();

export const test = base.extend<{ SignedInPage: any }>({
  SignedInPage: async ({ page }, use) => {
    await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');
    await page.getByRole('button', { name: 'Sign In' }).click();

    await page.fill('#signinEmail', process.env.USER_EMAIL!);
    await page.fill('#signinPassword', process.env.USER_PASS!);
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page).toHaveURL('https://qauto.forstudy.space/panel/garage');

    await use(page);

    await page.close();
  },
});
