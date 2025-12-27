import { test, expect } from '@playwright/test';

//npx playwright test practiceLocator.spec.ts

test("Practice of locator method", async({ page }) => {
    await page.goto("https://saucedemo.com");
    //using xpath
    await page.locator("//*[@id='user-name']").fill("error_user");
    //using placeholder
    await page.getByPlaceholder("Password").fill("secret_sauce");
    //using css locator
    await page.locator(`.submit-button`).click();
    //using text
    await page.locator("text='Sauce Labs Backpack'").click();
    await page.goBack();
    await page.locator("text=SAUCE LABS BACKPACK").click();
})

test("Practice Locators", async({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    //using css
    await page.fill('#name','Neha');
    //using css
    await page.locator('#email').fill('rakesh.entrust@gmail.com');
    //using css
    await page.locator('input#phone').fill('8130609725');
})
