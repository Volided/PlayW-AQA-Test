import { chromium } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

(async ( ) => {

    const browser = await chromium.launch();
    const context = await browser.newContext();

    const page = await  context.newPage();
    await page.goto(process.env.BASE_URL!);

    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.fill('#signinEmail', process.env.USER_EMAIL!);
    await page.fill('#signinPassword', process.env.USER_PASS!);
    await page.getByRole('button', { name: 'Login' }).click();

    await context.storageState({path : 'storageState.json'});
    await browser.close();
}) ();