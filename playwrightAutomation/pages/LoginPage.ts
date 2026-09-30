import { loginPageLocators } from '../locators/loginlocators';
import { Page } from 'playwright';


export class LoginPage {
    constructor(private page: Page) {}

    async Login(username: string, password: string) {
        await this.page.fill(loginPageLocators.username, username);
        await this.page.fill(loginPageLocators.password, password);
        await this.page.click(loginPageLocators.loginButton);
    }







}