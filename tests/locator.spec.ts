
import { test, expect,chromium, Browser, Page, Locator} from '@playwright/test';
 
 
test('login test', async () => {
    const browser: Browser = await chromium.launch({ headless: false });
    const page: Page = await browser.newPage();
    await page.goto('http://127.0.0.1:5501/form.html');
    const fName: Locator = await page.locator('#txt1');
    const password: Locator = await page.locator('#txt2');
    await fName.fill('SARAVANAN');
    await password.fill('sara@123');
    const logo:Locator = await page.locator('.logo');
    const item = await logo.isEnabled();
    console.log(item);
    const contact:Locator = await page.locator('.txtContact');
    await contact.fill("888888888");
 
    const heading:Locator = await page.locator("text=Registration Form");
    const headingExists = await heading.isEnabled();
    console.log(headingExists);
    //
    const myemail:Locator = await page.locator('#txtemail');
    await myemail.fill('2k20ece066@kiot.gmail');
    //4.use css selector
    const address:Locator = await page.locator('css=input#txtaddrtess');
    await address.fill('SIPCOT IT Park Chennai');

    const pincode:Locator = await page.locator('css=input#txtpincode');
    await pincode.fill('6365001');

    //5.use xpath
    const email:Locator = await page.locator('xpath=//input[@name="myemail" and @type="email"]');
    await email.fill('admin@gmail.com');
    const term:Locator = await page.locator('xpath=//input[@name="term" and @type="checkbox"]');
    // const checkExit = await checkbox.isEnabled();
    // console.log(checkExit);
    await term.click();

    
});