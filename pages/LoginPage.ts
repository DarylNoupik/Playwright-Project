import {Locator, Page} from "@playwright/test";
import {BasePage} from "./BasePage";

export class LoginPage extends BasePage {
    //Inputs
    readonly emailInput! : Locator;
    readonly passwordInput! : Locator;
    //Buttons
    readonly loginButton! : Locator;
    //Error messages
    readonly emailError! : Locator;
    readonly passwordError! : Locator;

    constructor(page:Page) {
        super(page);
        this.emailInput    = page.locator('#modalusername');
        this.passwordInput = page.getByLabel('Password');
        this.loginButton   = page.getByRole('button', { name: 'Log in' });
        this.emailError    = page.locator(".EmailInput_email_error__IJxXf");
        this.passwordError = page.locator(".Alert_iwrp__5q1xH Alert_danger__Wsdhv")
    }

    async login (email:string, password:string){
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginButton.hover();
        await this.loginButton.click();
    }


}