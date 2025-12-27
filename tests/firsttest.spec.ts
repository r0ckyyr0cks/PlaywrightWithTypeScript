import { chromium, test } from '@playwright/test';

test("Basic Test", async() => {

    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://google.ca");
    await page.getByLabel("Google apps").click();
    console.log("This is my first test");
    
})
