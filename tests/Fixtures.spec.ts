import { test, chromium } from '@playwright/test';

test('Close cookies', async ({ page }) => {
    await page.goto('https://www.dell.com/en-in');
    await page.getByRole('button', { name: 'Accept All' }).click();

})

test('Is the cookie still present?', async ({ page }) => {
    await page.goto('https://www.dell.com/en-in');
    // await page.getByRole('button', { name: 'Accept All' }).click();
    // await page.pause();

})

test('Browser fixtures', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://www.dell.com/en-in');
    await page.getByRole('button', { name: 'Accept All' }).click();
    // await page.pause();
})

test('Create page manually', async () => {
    const context = await chromium.launch();
    const page = await context.newPage();
    await page.goto('https://www.dell.com/en-in');
    await page.getByRole('button', { name: 'Accept All' }).click();
    // await page.pause();
})