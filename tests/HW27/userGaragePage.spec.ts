import { test } from '../../fixture/SignIn.fixture';
import { expect } from '@playwright/test';

test('Sign In and add car button check', async ({ SignedInPage }) => {

    const addButton = SignedInPage.getByRole('button', { name: 'Add Car' }).first();
    await addButton.click();
    
    const addCarPage = SignedInPage.getByRole('button', { name: 'Cancel' })
    await addCarPage.click();
    

    



});