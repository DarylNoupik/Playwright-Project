import { Browser, chromium, Page } from "@playwright/test";
import { After, Before, setDefaultTimeout, Status } from "@cucumber/cucumber";
import "./env";
import { SignUpPage } from "../pages/SignUpPage";

//
let page: Page;
let browser: Browser;
const baseUrl = process.env.baseUrl;

setDefaultTimeout(60000);

Before(async () => {
  try {
    browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    page = await context.newPage();
  } catch (error) {
    console.log(`chrome navigation to demo site failed due to ${error}`);
    throw new Error(`chrome navigation to demo site failed due to ${error}`);
  }
  return page;
});

After(async function (Scenario) {
  if (Scenario.result!.status === Status.FAILED) {
    await this.attach(
      await page.screenshot({
        path: `./screenshots/${Scenario.pickle.name}.png`,
        fullPage: true,
      }),
      "image/png"
    );
  }
  //await browser.close();
});

export { page, browser };
