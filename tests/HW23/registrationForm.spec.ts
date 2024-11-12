import { test, expect } from '@playwright/test';

test.describe('Registration form tests', () => {
    test('Positive registration test', async ({page}) => {

        await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');

        await page.getByRole('button', { name: 'Sign up' }).click();
        
        const signUpName = page.locator('#signupName')
        await signUpName.fill('Ed')

        const signUpLastName = page.locator('#signupLastName')
        await signUpLastName.fill('Volynets')
        
        const signUpEmail = page.locator('#signupEmail')
        await signUpEmail.fill('volided1@gmail.com')

        const signUpPassword = page.locator('#signupPassword')
        await signUpPassword.fill('Qwerty12')

        const signUpRepeatPassword = page.locator('#signupRepeatPassword')
        await signUpRepeatPassword.fill('Qwerty12')

        await page.getByRole('button', { name: 'Register' }).click();
        
        await page.goBack()

    })

    test('Negative registration test-Name/Last name field№1', async ({page}) => {


        await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');

        await page.getByRole('button', { name: 'Sign up' }).click();
        
        const signUpName = page.locator('#signupName')
        await signUpName.fill('Едуард')

        const signUpLastName = page.locator('#signupLastName')
        await signUpLastName.fill('Волинець')
        
        const signUpEmail = page.locator('#signupEmail')
        await signUpEmail.fill('volided2@gmail.com')

        const signUpPassword = page.locator('#signupPassword')
        await signUpPassword.fill('Qwerty12')

        const signUpRepeatPassword = page.locator('#signupRepeatPassword')
        await signUpRepeatPassword.fill('Qwerty12')

        await page.getByRole('button', { name: 'Register' }).click();
        
        await page.goBack()
})
    
test('Negative registration test-Name/Last name field№2', async ({page}) => {


    await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');

    await page.getByRole('button', { name: 'Sign up' }).click();
    
    const signUpName = page.locator('#signupName')
    await signUpName.fill('E')

    const signUpLastName = page.locator('#signupLastName')
    await signUpLastName.fill('V')
    
    const signUpEmail = page.locator('#signupEmail')
    await signUpEmail.fill('volided3@gmail.com')

    const signUpPassword = page.locator('#signupPassword')
    await signUpPassword.fill('Qwerty12')

    const signUpRepeatPassword = page.locator('#signupRepeatPassword')
    await signUpRepeatPassword.fill('Qwerty12')

    await page.getByRole('button', { name: 'Register' }).click();
    
    await page.goBack()
})

test('Negative registration test-Name/Last name field№3', async ({page}) => {


    await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');

    await page.getByRole('button', { name: 'Sign up' }).click();
    
    const signUpName = page.locator('#signupName')
    await signUpName.fill('EduardEduardEduard123')

    const signUpLastName = page.locator('#signupLastName')
    await signUpLastName.fill('VolynetsVolynets12345')
    
    const signUpEmail = page.locator('#signupEmail')
    await signUpEmail.fill('volided4@gmail.com')

    const signUpPassword = page.locator('#signupPassword')
    await signUpPassword.fill('Qwerty12')

    const signUpRepeatPassword = page.locator('#signupRepeatPassword')
    await signUpRepeatPassword.fill('Qwerty12')

    await page.getByRole('button', { name: 'Register' }).click();
    
    await page.goBack()
})

test('Negative registration test-Name/Last name field№4', async ({page}) => {


    await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');

    await page.getByRole('button', { name: 'Sign up' }).click();
    
    const signUpName = page.locator('#signupName')
    await signUpName.fill('Edu ard')

    const signUpLastName = page.locator('#signupLastName')
    await signUpLastName.fill('Voly nets')
    
    const signUpEmail = page.locator('#signupEmail')
    await signUpEmail.fill('volided5@gmail.com')

    const signUpPassword = page.locator('#signupPassword')
    await signUpPassword.fill('Qwerty12')

    const signUpRepeatPassword = page.locator('#signupRepeatPassword')
    await signUpRepeatPassword.fill('Qwerty12')

    await page.getByRole('button', { name: 'Register' }).click();
    
    await page.goBack()
})

test('Negative registration test-Email field№1', async ({page}) => {


    await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');

    await page.getByRole('button', { name: 'Sign up' }).click();
    
    const signUpName = page.locator('#signupName')
    await signUpName.fill('Eduard')

    const signUpLastName = page.locator('#signupLastName')
    await signUpLastName.fill('Volynets')
    
    const signUpEmail = page.locator('#signupEmail')
    await signUpEmail.fill('volided')

    const signUpPassword = page.locator('#signupPassword')
    await signUpPassword.fill('Qwerty12')

    const signUpRepeatPassword = page.locator('#signupRepeatPassword')
    await signUpRepeatPassword.fill('Qwerty12')

    await page.getByRole('button', { name: 'Register' }).click();
    
    await page.goBack()
})


test('Negative registration test-Email field№2', async ({page}) => {


    await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');

    await page.getByRole('button', { name: 'Sign up' }).click();
    
    const signUpName = page.locator('#signupName')
    await signUpName.fill('Eduard')

    const signUpLastName = page.locator('#signupLastName')
    await signUpLastName.fill('Volynets')
    
    const signUpEmail = page.locator('#signupEmail')
    await signUpEmail.fill('volided@')

    const signUpPassword = page.locator('#signupPassword')
    await signUpPassword.fill('Qwerty12')

    const signUpRepeatPassword = page.locator('#signupRepeatPassword')
    await signUpRepeatPassword.fill('Qwerty12')

    await page.getByRole('button', { name: 'Register' }).click();
    
    await page.goBack()
})
        
test('Negative registration test-Email field№3', async ({page}) => {


    await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');

    await page.getByRole('button', { name: 'Sign up' }).click();
    
    const signUpName = page.locator('#signupName')
    await signUpName.fill('Eduard')

    const signUpLastName = page.locator('#signupLastName')
    await signUpLastName.fill('Volynets')
    
    const signUpEmail = page.locator('#signupEmail')
    await signUpEmail.fill('volidedgmail.com')

    const signUpPassword = page.locator('#signupPassword')
    await signUpPassword.fill('Qwerty12')

    const signUpRepeatPassword = page.locator('#signupRepeatPassword')
    await signUpRepeatPassword.fill('Qwerty12')

    await page.getByRole('button', { name: 'Register' }).click();
    
    await page.goBack()
})

test('Negative registration test-Email field№4', async ({page}) => {


    await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');

    await page.getByRole('button', { name: 'Sign up' }).click();
    
    const signUpName = page.locator('#signupName')
    await signUpName.fill('Eduard')

    const signUpLastName = page.locator('#signupLastName')
    await signUpLastName.fill('Volynets')
    
    const signUpEmail = page.locator('#signupEmail')
    await signUpEmail.fill('volided@.com')

    const signUpPassword = page.locator('#signupPassword')
    await signUpPassword.fill('Qwerty12')

    const signUpRepeatPassword = page.locator('#signupRepeatPassword')
    await signUpRepeatPassword.fill('Qwerty12')

    await page.getByRole('button', { name: 'Register' }).click();
    
    await page.goBack()
})

test('Negative registration test-Email field№5', async ({page}) => {


    await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');

    await page.getByRole('button', { name: 'Sign up' }).click();
    
    const signUpName = page.locator('#signupName')
    await signUpName.fill('Eduard')

    const signUpLastName = page.locator('#signupLastName')
    await signUpLastName.fill('Volynets')
    
    const signUpEmail = page.locator('#signupEmail')
    await signUpEmail.fill('volided@gmailcom')

    const signUpPassword = page.locator('#signupPassword')
    await signUpPassword.fill('Qwerty12')

    const signUpRepeatPassword = page.locator('#signupRepeatPassword')
    await signUpRepeatPassword.fill('Qwerty12')

    await page.getByRole('button', { name: 'Register' }).click();
    
    await page.goBack()
})

test('Negative registration test-Email field№6', async ({page}) => {


    await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');

    await page.getByRole('button', { name: 'Sign up' }).click();
    
    const signUpName = page.locator('#signupName')
    await signUpName.fill('Eduard')

    const signUpLastName = page.locator('#signupLastName')
    await signUpLastName.fill('Volynets')
    
    const signUpEmail = page.locator('#signupEmail')
    await signUpEmail.fill('volided@gmail.')

    const signUpPassword = page.locator('#signupPassword')
    await signUpPassword.fill('Qwerty12')

    const signUpRepeatPassword = page.locator('#signupRepeatPassword')
    await signUpRepeatPassword.fill('Qwerty12')

    await page.getByRole('button', { name: 'Register' }).click();
    
    await page.goBack()
})

test('Negative registration test-Password/Repeat password field№1', async ({page}) => {


    await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');

    await page.getByRole('button', { name: 'Sign up' }).click();
    
    const signUpName = page.locator('#signupName')
    await signUpName.fill('Eduard')

    const signUpLastName = page.locator('#signupLastName')
    await signUpLastName.fill('Volynets')
    
    const signUpEmail = page.locator('#signupEmail')
    await signUpEmail.fill('volided6@gmail.')

    const signUpPassword = page.locator('#signupPassword')
    await signUpPassword.fill('Qwerty1')

    const signUpRepeatPassword = page.locator('#signupRepeatPassword')
    await signUpRepeatPassword.fill('Qwerty1')

    await page.getByRole('button', { name: 'Register' }).click();
    
    await page.goBack()
})

test('Negative registration test-Password/Repeat password field№2', async ({page}) => {


    await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');

    await page.getByRole('button', { name: 'Sign up' }).click();
    
    const signUpName = page.locator('#signupName')
    await signUpName.fill('Eduard')

    const signUpLastName = page.locator('#signupLastName')
    await signUpLastName.fill('Volynets')
    
    const signUpEmail = page.locator('#signupEmail')
    await signUpEmail.fill('volided6@gmail.')

    const signUpPassword = page.locator('#signupPassword')
    await signUpPassword.fill('Qwerty1Qwerty122')

    const signUpRepeatPassword = page.locator('#signupRepeatPassword')
    await signUpRepeatPassword.fill('Qwerty1Qwerty122')

    await page.getByRole('button', { name: 'Register' }).click();
    
    await page.goBack()
})

test('Negative registration test-Password/Repeat password field№3', async ({page}) => {


    await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');

    await page.getByRole('button', { name: 'Sign up' }).click();
    
    const signUpName = page.locator('#signupName')
    await signUpName.fill('Eduard')

    const signUpLastName = page.locator('#signupLastName')
    await signUpLastName.fill('Volynets')
    
    const signUpEmail = page.locator('#signupEmail')
    await signUpEmail.fill('volided6@gmail.')

    const signUpPassword = page.locator('#signupPassword')
    await signUpPassword.fill('Qwerty')

    const signUpRepeatPassword = page.locator('#signupRepeatPassword')
    await signUpRepeatPassword.fill('Qwerty')

    await page.getByRole('button', { name: 'Register' }).click();
    
    await page.goBack()
})

test('Negative registration test-Password/Repeat password field№4', async ({page}) => {


    await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');

    await page.getByRole('button', { name: 'Sign up' }).click();
    
    const signUpName = page.locator('#signupName')
    await signUpName.fill('Eduard')

    const signUpLastName = page.locator('#signupLastName')
    await signUpLastName.fill('Volynets')
    
    const signUpEmail = page.locator('#signupEmail')
    await signUpEmail.fill('volided6@gmail.')

    const signUpPassword = page.locator('#signupPassword')
    await signUpPassword.fill('qwerty')

    const signUpRepeatPassword = page.locator('#signupRepeatPassword')
    await signUpRepeatPassword.fill('qwerty')

    await page.getByRole('button', { name: 'Register' }).click();
    
    await page.goBack()
})

test('Negative registration test-Password/Repeat password field№5', async ({page}) => {


    await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');

    await page.getByRole('button', { name: 'Sign up' }).click();
    
    const signUpName = page.locator('#signupName')
    await signUpName.fill('Eduard')

    const signUpLastName = page.locator('#signupLastName')
    await signUpLastName.fill('Volynets')
    
    const signUpEmail = page.locator('#signupEmail')
    await signUpEmail.fill('volided6@gmail.')

    const signUpPassword = page.locator('#signupPassword')
    await signUpPassword.fill('QWERTY12')

    const signUpRepeatPassword = page.locator('#signupRepeatPassword')
    await signUpRepeatPassword.fill('QWERTY12')

    await page.getByRole('button', { name: 'Register' }).click();
    
    await page.goBack()
})
    })


































