import {test, expect,chromium,Page} from '@playwright/test';

test("multiple Tabs",async({page:Page}) =>{
 const browser=await chromium.launch({headless:false});
 const context=await browser.newContext();
const page= await context.newPage();

await page.goto("https://demoqa.com/");
await page.waitForTimeout(2000);
await page.locator("text= Alerts, Frame & Windows").click();
await page.locator("text=Browser Windows").click();
await page.waitForTimeout(2000);
const [newTab] = await Promise.all([
    page.waitForEvent("popup"),
    page.locator("#tabbutton").click()
]);
await newTab.waitForLoadState();
console.log("new tab is:",newTab.url());
//await expect(newTab).toHaveTitle(/DEMOQA/);
await newTab.waitForTimeout(2000);
await browser.close();


});

test.only("multiple windows",async({page:Page}) =>{
 const browser=await chromium.launch({headless:false});
 const context=await browser.newContext();
const page= await context.newPage();

await page.goto("https://demoqa.com/");
await page.waitForTimeout(2000);
await page.locator("text= Alerts, Frame & Windows").click();
await page.locator("text=Browser Windows").click();
await page.waitForTimeout(2000);
const [newWindow] = await Promise.all([
    context.waitForEvent("page"),
    page.locator("#windowButton").click()
]);
await newWindow.waitForLoadState();
console.log("new window is:",newWindow.url());
//await expect(newWindow).toHaveTitle(/DEMOQA/);
await newWindow.waitForTimeout(2000);
await browser.close();


});