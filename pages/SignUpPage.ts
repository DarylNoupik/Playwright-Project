import { Page } from "@playwright/test";

export class SignUpPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate(url: string) {
    console.log(url);
    await this.page.goto(url);
  }

  async enterEmailAndPassword(email: string, password: string) {
    await this.page.locator("#modalusername").fill(email);
    await this.page.getByLabel("Password").fill(password);
  }

  async signUp() {
    await this.page.getByRole("button", { name: "Sign up for free" }).click();
  }

  async fillAcountDetails(details: any) {
    await this.page.locator("#modal_first_name").fill(details.firstname);
    await this.page.locator("#modal_last_name").fill(details.lastname);
  }

  async fowardRegister() {
    await this.page
      .getByRole("button", {
        name: "Continue",
        exact: true,
      })
      .click();
  }
}
