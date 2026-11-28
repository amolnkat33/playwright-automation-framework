const { test, expect } = require('@playwright/test');

test('Pop Validation', async ({ page }) => {

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

    const textBox = page.locator('#displayed-text');

    await expect(textBox).toBeVisible();
    await page.locator('#hide-textbox').click();
    await expect(textBox).toBeHidden();

    //alert
    page.on('dialog', dialog => dialog.accept());
    await page.locator('#confirmbtn').click();

    //hover
    await page.locator('#mousehover').hover();
    
    //frames
    const frampage =page.frameLocator("#courses-iframe");
    await frampage.locator("li a[href*='lifetime-access']:visible").click();
    const text = await frampage.locator(".text h2").textContent();
    text.split(" ")[1].trim();
    console.log(text.split(" ")[1].trim());
    

});