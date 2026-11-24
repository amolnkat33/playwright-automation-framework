const {test, expect}=require('@playwright/test');

test('Verify the UI Controls',async ({page})=>
    {
        await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
        await page.locator("#userEmail").fill("amolnikat33@gmail.com");
        await page.locator("#userPassword").fill("Daku@123");
        await page.locator("[value='Login']").click();
        await page.waitForLoadState('networkidle'); //wait still loaded
        const title= await page.locator(".card-body b").allTextContents();
        console.log("all title is::>" +title);

        //select radito bitton
        await page.locator('#sidebar').getByText('fashion').click();
        await page.pause();

    })

    test('Verify the text blink pop up text ',async ({page})=>
    {
        const documentlink =page.locator("[href*='documents-request']")
        await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
        await expect (documentlink).toHaveAttribute("class","blinkingText");

    })

    test.only('Verify Child windows handling', async ({ browser }) => {

        const context = await browser.newContext();
        const page = await context.newPage();
    
        await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    
        const documentLink = page.locator("[href*='documents-request']");
    
        const [newPage] = await Promise.all([
            context.waitForEvent('page'),
            documentLink.click()
        ]);
    
        await newPage.waitForLoadState();
    
        const text = await newPage.locator('.red').textContent() || '';
    
        const email = text.split('@')[1].split(' ')[0];
    
        console.log(email);
    
        await page.locator('#username').fill(email);
    
    });



