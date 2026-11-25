const { test, expect } = require('@playwright/test');

test.only('Verify e2e flow for this site', async ({ page }) => {

    const productName = 'ZARA COAT 3';

    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');

    await page.locator('#userEmail').fill('amolnikat33@gmail.com');
    await page.locator('#userPassword').fill('Daku@123');
    await page.locator("[value='Login']").click();

    await page.waitForLoadState('networkidle');

    // Add product to cart
    const products = page.locator('.card-body');
    const count = await products.count();

    for (let i = 0; i < count; i++) {

        const title = await products.nth(i).locator('b').textContent();

        if (title === productName) {
            await products.nth(i).locator('text= Add To Cart').click();
            break;
        }
    }

    // Go to cart
    await page.locator("[routerlink*='cart']").click();

    await page.locator('div li').first().waitFor();

    const bool = await page.locator(`h3:has-text("${productName}")`).isVisible();
    expect(bool).toBeTruthy();

    // Checkout
    await page.locator('text=Checkout').click();

    await page
        .locator("[placeholder*='Country']")
        .pressSequentially('ind', { delay: 100 });

    const dropdown = page.locator('.ta-results');
    await dropdown.waitFor();

    const optionCount = await dropdown.locator('button').count();

    for (let i = 0; i < optionCount; ++i) {

        const text = await dropdown.locator('button').nth(i).textContent();

        if (text.trim() === 'India') {
            await dropdown.locator('button').nth(i).click();
            break;
        }
    }

    // Verify email
   // await expect(
    //    page.locator('.user__name [type="text"]').first()
    //).toHaveValue('amolnikat33@gmail.com');

    // Place order
    await page.locator('.action__submit').click();

    // Verify success message
    await expect(page.locator('.hero-primary'))
        .toContainText('Thankyou for the order');

    // Get order ID
    const orderId = await page
        .locator('.em-spacer-1 .ng-star-inserted')
        .textContent();

    console.log('Order ID =>', orderId.trim());

});