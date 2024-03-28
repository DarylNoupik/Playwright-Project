import {Given, Then, When} from "@cucumber/cucumber";
import {page} from '../steps/world';
import {expect} from "@playwright/test";




Given('I am on {string} page', async  (expectedText) => {

    const actuelText = await page.locator(`a[id='nava']`).textContent();
    expect(expectedText).toEqual(actuelText!.trim());
});

When('I click categories link', async  () => {
    await page.locator(`//div[@class='list-group']//a[1]`).click();
});

Then('I see {string}, {string} and {string} under categories', async (string, string2, string3) => {
   const actualSublinks = await page.locator(`//div[@class='list-group]//a[not(@id='cat')]`).allTextContents();
   const expectedSublinks = [string ,string2,string3];
   expect(actualSublinks).toEqual(expectedSublinks);
});

