import {test,expect} from "@playwright/test";

test("iframe handling",async({page})=>{
    await page.goto("https://play1.automationcamp.ir/frames.html");
    const parentFrame=page.frameLocator("#frame1");
    const childFrame=parentFrame.frameLocator("#frame2");
    await childFrame.locator("#click_me_2").click();
    await expect(childFrame.locator("#click_me_2")).toHaveText("Clicked");
    await page.waitForTimeout(2000);


});