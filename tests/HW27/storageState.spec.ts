import { test } from '@playwright/test';

test.use({storageState : 'storageState.json'})

test('storageState', async ({ page }) => {

    await page.goto(process.env.BASE_URL!)
  
    const addButton = page.getByRole('button', { name: 'Add Car' }).first();
    await addButton.click();

    const addCarPage = page.getByRole('button', { name: 'Cancel' })
    await addCarPage.click();

});