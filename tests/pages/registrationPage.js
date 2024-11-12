import { test, expect } from '@playwright/test';

export class RegistrationPage {
    constructor(page) {
        this.page = page;
        this.url = 'https://guest:welcome2qauto@qauto.forstudy.space/';
        this.signUpButton = page.getByRole('button', { name: 'Sign up' });
        this.nameInput = page.locator('#signupName');
        this.lastNameInput = page.locator('#signupLastName');
        this.emailInput = page.locator('#signupEmail');
        this.passwordInput = page.locator('#signupPassword');
        this.repeatPasswordInput = page.locator('#signupRepeatPassword');
        this.registerButton = page.getByRole('button', { name: 'Register' });
    }

    async open() {
        await this.page.goto(this.url);
    }

    async clickSignUp() {
        await this.signUpButton.click();
    }

    async fillName(name) {
        await this.nameInput.fill(name);
    }

    async fillLastName(lastName) {
        await this.lastNameInput.fill(lastName);
    }

    async fillEmail(email) {
        await this.emailInput.fill(email);
    }

    async fillPassword(password) {
        await this.passwordInput.fill(password);
    }

    async fillRepeatPassword(password) {
        await this.repeatPasswordInput.fill(password);
    }

    async submitRegistration() {
        await this.registerButton.click();
    }
}
