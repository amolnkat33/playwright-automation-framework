const { test, expect, request } = require('@playwright/test');

let apiContext;
let token;

test.beforeAll(async () => {

    apiContext = await request.newContext();

    const loginResponse = await apiContext.post(
        'https://rahulshettyacademy.com/api/ecom/auth/login',
        {
            data: {
                userEmail: "amolnikat33@gmail.com",
                userPassword: "Daku@123"
            }
        }
    );

    expect(loginResponse.ok()).toBeTruthy();

    const responseBody = await loginResponse.json();
    token = responseBody.token;

    console.log("Token :", token);

}); // beforeAll closed here

test('Verify the UI Controls', async ({ page }) => {

    await page.addInitScript(value => {
        window.localStorage.setItem('token', value);
    }, token);

    await page.goto(
        'https://rahulshettyacademy.com/client/#/dashboard'
    );

    const titles = await page.locator('.card-body b').allTextContents();

    console.log("All titles => ", titles);

    await page.locator('#sidebar').getByText('fashion').click();

   

});