import{test,expect} from "@playwright/test";
import { LoginPage } from "../playwrightAutomation/pages/LoginPage";
import { BASE_URL, USERNAME, PASSWORD } from "./utils/envConfig";
test("Login to saucedemo application with valid credentials",async({page})=>{
    const loginPage = new LoginPage(page);
    await page.goto(BASE_URL);
    await loginPage.Login(USERNAME, PASSWORD);

//await page.goto("https://www.saucedemo.com/");
//await page.locator("#user-name").fill("standard_user");
//await page.locator("#password").fill("secret_sauce");
//await page.locator("#login-button").click();

await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");

});