const {test, expect}=require('@playwright/test');

test.only('Verify the product tilte',async ({page})=>
    {
        await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
        await page.locator("#userEmail").fill("amolnikat33@gmail.com");
        await page.locator("#userPassword").fill("Daku@123");
        await page.locator("[value='Login']").click();
        await page.waitForLoadState('networkidle'); //wait still loaded
        const title= await page.locator(".card-body b").allTextContents();
        console.log("all title is::>" +title);

    })