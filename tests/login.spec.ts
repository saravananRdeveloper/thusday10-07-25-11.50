import { test, expect,chromium, Browser, Page, Locator} from '@playwright/test';
test('login test', async () => {
    const browser: Browser = await chromium.launch({ headless: false });
    const page: Page = await browser.newPage();
    await page.goto('http://quiz.hematitecorp.com/');
    const email: Locator = await page.locator('#email');
    const password: Locator = await page.locator('#password');
    const submitButton: Locator = await page.locator('button[type="submit"]');
    await email.fill('saravanan.ram@changepond.com');
    await password.fill('Saravanan@123');
    await submitButton.click();
    const title: string = await page.title();
    console.log("Home Page title" , title);
    await page.screenshot({ path: 'VocherCode.png' });
    expect(title).toEqual("Quiz App");
   // browser.close();
});
