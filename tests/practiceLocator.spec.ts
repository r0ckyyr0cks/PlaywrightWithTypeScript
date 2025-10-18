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