import { test, expect,chromium, Browser, Page, Locator, BrowserContext} from '@playwright/test';

test('aut test', async () => {
    const browser: Browser = await chromium.launch({ headless: false });
   
    const browserContext_1: BrowserContext = await browser.newContext();
    const page: Page = await browserContext_1.newPage();
    const userId = "saravanan.ram@gmai.com";
    const userPass = "Saravanan@123";
    
    const authHeader = "Basic " + btoa( userId + ":" + userPass);
    page.setExtraHTTPHeaders({'Authorization': authHeader });
    await page.goto('http://quiz.hematitecorp.com/');
    // await new Promise(() => {});

    
});



















// const email: Locator = await page.locator('#email');
// const password: Locator = await page.locator('#password');

// await email.fill('saravanan.ram@changepond.com');
// await password.fill('Saravanan@123');