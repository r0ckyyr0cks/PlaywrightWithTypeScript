import { test, expect } from '@playwright/test'

test('Assertion Practice -1', async({ page }) => {
    test.fail();
    await page.goto('https://www.saucedemo.com/');
    await page.getByTestId('username').fill('standard_user');
    await page.getByTestId('password').fill('secret_sauce');
    await expect(page.locator('[data-test="login-button"]')).toBeVisible();
    await expect(page.locator('[data-test="login-button"]')).toHaveText('Login');
    await expect(page.locator('[data-test="login-button"]')).toHaveAttribute('name','login-button');
    await expect(page.locator('[data-test="login-button"]')).toHaveId('login-button');
    await expect(page).toHaveTitle('Swag Labs');
    await expect(page).toHaveURL('https://www.saucedemo.com');
    /*Why Use Non-Retrying Assertions: 
    1️⃣ To Assert Immediate State
    2️⃣ To Catch Bugs Early (Avoid False Positives)
    3️⃣ When Checking Negative Conditions
    4️⃣ For Performance-Sensitive Tests
    5️⃣ When Value Comes from API / Logic (Not UI Timing)
    i.e. When we want to verify something should NOT change
    below is the example of Non-Retrying Assertions */
    expect.soft(5).toBe(4);
    expect(page,"Custom error message to be displayed in log").not.toHaveTitle('Sauce Labs')
    expect(await page.locator('[data-test="login-button"]').isVisible()).toBe(true);
    /*What happens?
    Assertion is checked once; No waiting; Fails immediately if false
    state is already known; no waiting needed */
    await page.getByTestId('login-button').click();
    //non-retrying assertions (see https://playwright.dev/docs/test-assertions)
    expect(5).toBe(5);
    
})

test('Assertion Practice -2', async({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.getByTestId('username').fill('locked_out_user');
    await page.getByTestId('password').fill('secret_sauce');
    await page.getByTestId('error');
})

