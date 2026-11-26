const {test, expect}=require('@playwright/test');

test('Verify special locators',async ({page})=>
    {
        await page.goto("https://rahulshettyacademy.com/angularpractice/");
        
        await page.getByLabel("Check me out if you Love IceCreams!").click();
        await page.getByLabel("Employed").check(); //radio button

        await page.getByLabel("Gender").selectOption("Female"); //dropdown

        //GetbyPlaceholder
        await page.getByPlaceholder("Password").fill("abc123");
        await page.getByRole("button", { name: "Submit" }).click();
        await page.getByText("Success! The Form has been submitted successfully!").isVisible();

        //5sec default wait for expect assertion
        await expect( page.getByText("Success! The Form has been submitted successfully!").toBeVisible()).toBeTruthy();
        
        //New Page Click
        await page.getByRole("link", { name: "Shop" }).click();
        await page.locator("app-card").filter({ hasText: "Nokia Edge" }).getByRole("button").click();

        //waitfor 

    });