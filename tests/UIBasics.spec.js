const {test, expect}=require('@playwright/test');

test('First playwright test',async({browser})=>
{
    //await > asyn(sequ. not exute) code thats why we type await
    //const context =await browser.newContext();
    //const page= await context.newPage();
    //await page.goto("https://nodejs.org/en/download");

});
//Basic Steps to perporm on UI
test('page playwright test',async({page})=>
    {

        await page.goto("https://eventhub.rahulshettyacademy.com/login/");
        await page.title;
        console.log(await page.title);
        await expect (page).toHaveTitle("EventHub — Discover & Book Events");
        await page.locator('#email').fill("amolnikat33@gmail.com");
        await page.locator('#password').fill('Daku@123');
        await page.locator("[type='submit']").click();
        //console.log (await page.locator("[styple='block']").textContent());
        await log.title();
        console.log(await page.title);
        await expect (page).toHaveTitle("EventHub — Discover & Book Events");

    });

    