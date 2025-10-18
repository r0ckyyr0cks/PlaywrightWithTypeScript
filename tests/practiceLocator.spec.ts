import {test, expect} from '@playwright/test';

test('Practice Locator Strategies - xpath', async ({page}) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('//*[@id="user-name"]').fill('standard_user');
    await page.locator('//*[@id="password"]').fill('secret_sauce');
    await page.locator('//*[@id="login-button"]').click();
    console.log("Login Successful using Xpath Locators");
})

test('Practice Locator Strategies - css selector', async ({page}) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();
    console.log("Login Successful using CSS Selectors");
})

test('Practice Locator Strategies - text locator', async ({page}) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('text=Username').fill('standard_user');
    await page.locator('text=Password').fill('secret_sauce');
    await page.locator('text=Login').click();
    console.log("Login Successful using Text Locators");
})
test('Practice Locator Strategies - combination locator', async ({page}) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('input#user-name').fill('standard_user');
    await page.locator('input#password').fill('secret_sauce');
    await page.locator('input#login-button').click();
    console.log("Login Successful using Combination Locators");
})

test('Practice Locator Strategies - role locator', async ({page}) => {
    await page.goto('https://www.saucedemo.com/');
    await page.getByRole('textbox', {name: 'Username'}).fill('standard_user');
    await page.getByRole('textbox', {name: 'Password'}).fill('secret_sauce');
    await page.getByRole('button', {name: 'Login'}).click();
    console.log("Login Successful using Role Locators");
})

test('Practice Locator Strategies - data-test attribute locator', async ({page}) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    console.log("Login Successful using Data-Test Attribute Locators");
})

test('Practice Locator Strategies - placeholder locator', async ({page}) => {
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', {name: 'Login'}).click();
    console.log("Login Successful using Placeholder Locators");
})

test('Practice Locator Strategies - nth locator', async ({page}) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('input').nth(0).fill('standard_user');
    await page.locator('input').nth(1).fill('secret_sauce');
    await page.locator('input').nth(2).click();
    console.log("Login Successful using Nth Locators");
})

test('Practice Locator Strategies - combined locator strategies', async ({page}) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('input#user-name[data-test="username"]').fill('standard_user');
    await page.locator('input#password[data-test="password"]').fill('secret_sauce');
    await page.locator('input#login-button[data-test="login-button"]').click();
    console.log("Login Successful using Combined Locator Strategies");
})

test('Practice Locator Strategies - chaining locators', async ({page}) => {
    await page.goto('https://www.saucedemo.com/');
    const loginForm = page.locator('#login_button_container');
   await loginForm.locator('input#user-name').fill('standard_user');
   await loginForm.locator('input#password').fill('secret_sauce');
   await loginForm.locator('input#login-button').click();
   console.log("Login Successful using Chaining Locators");
})

test('Practice Locator Strategies - locator with expect assertion', async ({page}) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();
    await expect(page.locator('.title')).toHaveText('Products');
    console.log("Login Successful and Verified using Expect Assertion with Locators");
})

test('Practice Locator Strategies - locator with waitFor', async ({page}) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();
    await page.locator('.title').waitFor();
    console.log("Login Successful and Verified using waitFor with Locators");
})

test('Practice Locator Strategies - locator with hover and click', async ({page}) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').hover();
    await page.locator('#login-button').click();
    console.log("Login Successful using Hover and Click with Locators");
})

test('Practice Locator Strategies - locator with keyboard actions', async ({page}) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#password').press('Enter');
    console.log("Login Successful using Keyboard Actions with Locators");
})

test('Practice Locator Strategies - locator with screenshot', async ({page}) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();
    await page.screenshot({path: 'login-success.png'});
    console.log("Login Successful and Screenshot Captured using Locators");
})

test('Practice Locator Strategies - locator with multiple elements', async ({page}) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();
    const items = page.locator('.inventory_item');
    const itemCount = await items.count();
    console.log(`Login Successful and found ${itemCount} items using Locators`);
})

test('Practice Locator Strategies - locator with dynamic elements', async ({page}) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();
    console.log("Login Successful using Dynamic Elements with Locators");
}) 

test('Practice Locator Strategies - locator with conditional checks', async ({page}) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();
    const isVisible = await page.locator('.title').isVisible();
    if (isVisible) {
        console.log("Login Successful and Title is Visible using Conditional Checks with Locators");
    } else {
        console.log("Login Failed or Title is Not Visible using Conditional Checks with Locators");
    }
})

test('Practice Locator Strategies - locator with error handling', async ({page}) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();
    const errorMessage = await page.locator('.error-message-container').innerText();
    if (errorMessage) {
        console.log("Login Failed with Error: " + errorMessage);
    } else {
        console.log("Login Successful with No Errors using Locators");
    }
})

test('Practice Locator Strategies - locator with performance measurement', async ({page}) => {
    const startTime = Date.now();
    await page.goto('https://www.saucedemo.com/');
   await page.locator('#user-name').fill('standard_user');
   await page.locator('#password').fill('secret_sauce');
   await page.locator('#login-button').click();
   const endTime = Date.now();
   console.log(`Login Successful using Performance Measurement with Locators in ${endTime - startTime} ms`);
})
