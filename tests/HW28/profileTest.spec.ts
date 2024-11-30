

import { test, expect } from '@playwright/test';

test('Подмена Response Body для профиля юзера и проверка отображения', async ({ page }) => {
// Перехватываем запрос к API профиля
await page.route('**/api/profile', (route) => {
const mockedResponse = {
name: 'TestName',
lastName: 'TestLastName',
};
route.fulfill({
contentType: 'application/json',
body: JSON.stringify(mockedResponse),
});
});

// Переходим на сайт
await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');

// Вход в аккаунт
await page.click('text="Sign In"');
await page.fill('#signinEmail', 'volided123@gmail.com');
await page.fill('#signinPassword', 'Qwerty12');
await page.getByRole('button', { name: 'Login' }).click();

// Проверяем отображение данных
await expect(page.locator('.profile_name.display-4')).toHaveText('TestName TestLastName');
});