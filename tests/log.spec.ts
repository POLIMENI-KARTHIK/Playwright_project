import{test,expect} from "@playwright/test";
test("Login to saucedemo application with valid credentials",async({page})=>{
    const browser = await chromium.launch({
        headless: false;
    )};
    const context = await browser.newContext();
    const page = await context.newPage();

await page.goto("https://www.saucedemo.com/");
await page.locator("#user-name").fill("standard_user");
await page.locator("#password").fill("secret_sauce");
await page.locator("#login-button").click();

await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
)};