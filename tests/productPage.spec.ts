import{test,expect} from '@playwright/test';
import {productPageLocators} from '../playwrightAutomation/locators/ProductPageLocators';
import { BASE_URL,USERNAME,PASSWORD} from './utils/envConfig';
import { ProductPage } from '../playwrightAutomation/pages/ProductPage';
import { LoginPage } from '../playwrightAutomation/pages/LoginPage';
import { loginPageLocators } from '../playwrightAutomation/locators/loginlocators';


test.describe('Product Page Validation', () => {
  let loginPage:LoginPage 
  let productPage: ProductPage;

  test.beforeEach(async ({ page }) => {
    loginPage =new LoginPage(page)
    productPage = new ProductPage(page);

 await page.goto(BASE_URL);
 await loginPage.Login(USERNAME, PASSWORD);
 await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");


  });
  test("validate logout functionality",async({page})=>{
    await productPage.logout();
    await expect(page.locator(loginPageLocators.loginButton)).toBeVisible();
});
   test('validate about page and navigate back',async({page})=>{
    await productPage.logout();
    await expect(page.locator(loginPageLocators.loginButton)).toBeVisible();


   })
    
})



