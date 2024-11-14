import { test, expect } from '@playwright/test';
import { RegistrationPage } from '../pages/registrationPage';

test.describe('Registration form tests with Page Object', () => {
    test('Positive registration test', async ({ page }) => {
        const registrationPage = new RegistrationPage(page);

        await registrationPage.open();
        await registrationPage.clickSignUp();
        await registrationPage.fillName('Ed');
        await registrationPage.fillLastName('Volynets');
        await registrationPage.fillEmail('volided1@gmail.com');
        await registrationPage.fillPassword('Qwerty12');
        await registrationPage.fillRepeatPassword('Qwerty12');
        await registrationPage.submitRegistration();
    });

    test('Negative registration test - Name/Last name field №1', async ({ page }) => {
        const registrationPage = new RegistrationPage(page);

        await registrationPage.open();
        await registrationPage.clickSignUp();
        await registrationPage.fillName('Едуард');
        await registrationPage.fillLastName('Волинець');
        await registrationPage.fillEmail('volided2@gmail.com');
        await registrationPage.fillPassword('Qwerty12');
        await registrationPage.fillRepeatPassword('Qwerty12');
        await registrationPage.submitRegistration();
    });

    test('Negative registration test - Name/Last name field №2', async ({ page }) => {
        const registrationPage = new RegistrationPage(page);

        await registrationPage.open();
        await registrationPage.clickSignUp();
        await registrationPage.fillName('E');
        await registrationPage.fillLastName('V');
        await registrationPage.fillEmail('volided3@gmail.com');
        await registrationPage.fillPassword('Qwerty12');
        await registrationPage.fillRepeatPassword('Qwerty12');
        await registrationPage.submitRegistration();
    });

    test('Negative registration test - Name/Last name field №3', async ({ page }) => {
        const registrationPage = new RegistrationPage(page);

        await registrationPage.open();
        await registrationPage.clickSignUp();
        await registrationPage.fillName('EduardEduardEduard123');
        await registrationPage.fillLastName('VolynetsVolynets12345');
        await registrationPage.fillEmail('volided4@gmail.com');
        await registrationPage.fillPassword('Qwerty12');
        await registrationPage.fillRepeatPassword('Qwerty12');
        await registrationPage.submitRegistration();
    });

    test('Negative registration test - Name/Last name field №4', async ({ page }) => {
        const registrationPage = new RegistrationPage(page);

        await registrationPage.open();
        await registrationPage.clickSignUp();
        await registrationPage.fillName('Edu ard');
        await registrationPage.fillLastName('Voly nets');
        await registrationPage.fillEmail('volided5@gmail.com');
        await registrationPage.fillPassword('Qwerty12');
        await registrationPage.fillRepeatPassword('Qwerty12');
        await registrationPage.submitRegistration();
    });

    test('Negative registration test-Email field№1', async ({ page }) => {
        const registrationPage = new RegistrationPage(page);

        await registrationPage.open();
        await registrationPage.clickSignUp();
        await registrationPage.fillName('Eduard');
        await registrationPage.fillLastName('Volynets');
        await registrationPage.fillEmail('volided');
        await registrationPage.fillPassword('Qwerty12');
        await registrationPage.fillRepeatPassword('Qwerty12');
        await registrationPage.submitRegistration();
    });

    test('Negative registration test-Email field№2', async ({ page }) => {
        const registrationPage = new RegistrationPage(page);

        await registrationPage.open();
        await registrationPage.clickSignUp();
        await registrationPage.fillName('Eduard');
        await registrationPage.fillLastName('Volynets');
        await registrationPage.fillEmail('volided@');
        await registrationPage.fillPassword('Qwerty12');
        await registrationPage.fillRepeatPassword('Qwerty12');
        await registrationPage.submitRegistration();
    });

    test('Negative registration test-Email field№3', async ({ page }) => {
        const registrationPage = new RegistrationPage(page);

        await registrationPage.open();
        await registrationPage.clickSignUp();
        await registrationPage.fillName('Eduard');
        await registrationPage.fillLastName('Volynets');
        await registrationPage.fillEmail('volidedgmail.com');
        await registrationPage.fillPassword('Qwerty12');
        await registrationPage.fillRepeatPassword('Qwerty12');
        await registrationPage.submitRegistration();
    });

    test('Negative registration test-Email field№4', async ({ page }) => {
        const registrationPage = new RegistrationPage(page);

        await registrationPage.open();
        await registrationPage.clickSignUp();
        await registrationPage.fillName('Eduard');
        await registrationPage.fillLastName('Volynets');
        await registrationPage.fillEmail('volided@.com');
        await registrationPage.fillPassword('Qwerty12');
        await registrationPage.fillRepeatPassword('Qwerty12');
        await registrationPage.submitRegistration();
    });

    test('Negative registration test-Email field№5', async ({ page }) => {
        const registrationPage = new RegistrationPage(page);

        await registrationPage.open();
        await registrationPage.clickSignUp();
        await registrationPage.fillName('Eduard');
        await registrationPage.fillLastName('Volynets');
        await registrationPage.fillEmail('volided@gmailcom');
        await registrationPage.fillPassword('Qwerty12');
        await registrationPage.fillRepeatPassword('Qwerty12');
        await registrationPage.submitRegistration();
    });

    test('Negative registration test-Email field№6', async ({ page }) => {
        const registrationPage = new RegistrationPage(page);

        await registrationPage.open();
        await registrationPage.clickSignUp();
        await registrationPage.fillName('Eduard');
        await registrationPage.fillLastName('Volynets');
        await registrationPage.fillEmail('volided@gmail.');
        await registrationPage.fillPassword('Qwerty12');
        await registrationPage.fillRepeatPassword('Qwerty12');
        await registrationPage.submitRegistration();
    });

    test('Negative registration test-Password/Repeat password field№1', async ({ page }) => {
        const registrationPage = new RegistrationPage(page);

        await registrationPage.open();
        await registrationPage.clickSignUp();
        await registrationPage.fillName('Eduard');
        await registrationPage.fillLastName('Volynets');
        await registrationPage.fillEmail('volided2@gmail.com');
        await registrationPage.fillPassword('Qwerty1');
        await registrationPage.fillRepeatPassword('Qwerty1');
        await registrationPage.submitRegistration();
    });

    test('Negative registration test-Password/Repeat password field№2', async ({ page }) => {
        const registrationPage = new RegistrationPage(page);

        await registrationPage.open();
        await registrationPage.clickSignUp();
        await registrationPage.fillName('Eduard');
        await registrationPage.fillLastName('Volynets');
        await registrationPage.fillEmail('volided2@gmail.com');
        await registrationPage.fillPassword('Qwerty1Qwerty122');
        await registrationPage.fillRepeatPassword('Qwerty1Qwerty122');
        await registrationPage.submitRegistration();
    });

    test('Negative registration test-Password/Repeat password field№3', async ({ page }) => {
        const registrationPage = new RegistrationPage(page);

        await registrationPage.open();
        await registrationPage.clickSignUp();
        await registrationPage.fillName('Eduard');
        await registrationPage.fillLastName('Volynets');
        await registrationPage.fillEmail('volided2@gmail.com');
        await registrationPage.fillPassword('Qwerty');
        await registrationPage.fillRepeatPassword('Qwerty');
        await registrationPage.submitRegistration();
    });

    test('Negative registration test-Password/Repeat password field№4', async ({ page }) => {
        const registrationPage = new RegistrationPage(page);

        await registrationPage.open();
        await registrationPage.clickSignUp();
        await registrationPage.fillName('Eduard');
        await registrationPage.fillLastName('Volynets');
        await registrationPage.fillEmail('volided2@gmail.com');
        await registrationPage.fillPassword('qwerty');
        await registrationPage.fillRepeatPassword('qwerty');
        await registrationPage.submitRegistration();
    });

    test('Negative registration test-Password/Repeat password field№5', async ({ page }) => {
        const registrationPage = new RegistrationPage(page);

        await registrationPage.open();
        await registrationPage.clickSignUp();
        await registrationPage.fillName('Eduard');
        await registrationPage.fillLastName('Volynets');
        await registrationPage.fillEmail('volided2@gmail.com');
        await registrationPage.fillPassword('QWERTY12');
        await registrationPage.fillRepeatPassword('QWERTY12');
        await registrationPage.submitRegistration();
    });

});
