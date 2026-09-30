import{test,expect,chromium,Page} from "@playwright/test";
 test("Multiple Tabs",async({page:Page})=>{
     const browser=await chromium.launch({headless:false});
     const context=await browser.newContext();
     const page1=await context.newPage();
     await page1.goto("https://www.google.com/");
     await page1.waitForTimeout(2000);
     const page2=await context.newPage();
     await page2.goto("https://www.bing.com/");
     await page2.waitForTimeout(2000);
     await page1.bringToFront();
     await expect(page1).toHaveTitle(/Google/);
     await expect(page2).toHaveTitle(/Bing/);
     await browser.close();
 });

test("Multiple Windows",async({page:Page})=>{
    const browser=await chromium.launch({headless:false});
    const context=await browser.newContext();       
    const page1=await context.newPage();
    await page1.goto("https://www.google.com/");
    await page1.waitForTimeout(2000);   

    const page2=await context.newPage();
    await page2.goto("https://www.bing.com/");
    await page2.waitForTimeout(2000);                           

    await page1.bringToFront();
    await expect(page1).toHaveTitle(/Google/);
    await expect(page2).toHaveTitle(/Bing/);
    await browser.close();
});
