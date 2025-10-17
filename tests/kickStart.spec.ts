import {chromium, test} from '@playwright/test';

test("Kick Start with Playwright Test", async ({page}) => {
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.getByPlaceholder('Email').fill('rahulshetty@gmail.com');
    await page.getByRole('textbox', { name: 'enter your passsword' }).fill('Iamking@000');
    await page.getByRole('button', { name: 'Login' }).click();    
    console.log("My First Test Script");
})

test("Kick Start with 2nd Playwright Test", async ({page}) => {
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.getByRole('textbox', { name: 'Email' }).fill('rahulshetty@gmail.com');
    await page.getByRole('textbox', { name: 'enter your passsword' }).fill('Iamking@000');
    await page.getByRole('button', { name: 'Login' }).click();    
    console.log("My Second Test Script");
})

test("Kick Start with 3rd Playwright Test", async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.getByRole('textbox', { name: 'Email' }).fill('rahulshetty@gmail.com');
    await page.getByRole('textbox', { name: 'enter your passsword' }).fill('Iamking@000');
    await page.getByRole('button', { name: 'Login' }).click();    
    console.log("My Third Test Script");
})