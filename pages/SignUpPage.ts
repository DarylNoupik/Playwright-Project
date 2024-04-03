import {Locator, Page} from "@playwright/test";
import {BasePage} from "./BasePage";

export class SignUpPage extends BasePage {



  // Inputs Locator
  readonly  emailInput    : Locator;
  readonly  firstnameInput: Locator;
  readonly  passwordInput : Locator;
  readonly  lastnameInput : Locator;

  //Buttons
  readonly signUpButton   : Locator;
  readonly continueButton : Locator;


  constructor(page: Page) {
    super(page);
    this.emailInput    = page.locator("#modalusername");
    this.firstnameInput= page.locator("#modal_first_name");
    this.passwordInput = page.getByLabel("Password");
    this.lastnameInput = page.locator("#modal_last_name");

    this.signUpButton  = page.getByRole("button", { name: "Sign up for free" });
    this.continueButton= page
        .getByRole("button", {
          name: "Continue",
          exact: true,
        });
  }


  async enterEmailAndPassword(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
  }

  async signUp() {
    await this.signUpButton.click();
  }

  async fillAcountDetails(details: any) {
    await this.firstnameInput.fill(details.firstname);
    await this.lastnameInput.fill(details.lastname);
  }

  async fowardRegister() {
    await this.continueButton.click();
  }
}
