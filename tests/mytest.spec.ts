import {  test,expect} from "@playwright/test";
test("verifiying page tittle",async({page})=>{

   //expect(page.locator('h1[class='title']).to Havetitle("Automation Testing Practice")
await page.goto("https://testautomationpractice.blogspot.com/");
await expect(page.locator('h1[class="title"]')).toHaveText("Automation Testing Practice");






})