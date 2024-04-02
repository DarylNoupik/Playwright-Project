import {Given, Then, When} from "@cucumber/cucumber";
import {page} from "../config/world";
import {SignUpPage} from '../pages/SignUpPage';
import {pageUrl} from "../utils/navigation";
import Assert from  "../utils/assert"
import '../config/env';

let signupPage : SignUpPage;
let assert : Assert ;

Given('I am on the {string} page', async (pageName) => {
    signupPage = new SignUpPage(page) ;
    assert = new Assert(page);

    await signupPage.navigate(pageUrl(pageName));
});

When('I fullfilled the form with the informations below', async function (dataTable) {
    const data = dataTable.rowsHash();
    await signupPage.enterEmailAndPassword(data.email, data.password);
});


When('I validate the register form', async function () {
      await signupPage.signUp()
});

When('I fill out the form with the following user information', async function (dataTable) {
    const data = dataTable.hashes();
    const details = { ...data[0] };
    await signupPage.fillAcountDetails(details);
    await signupPage.fowardRegister();
});
Then('I receive an confirmation message', async function () {
    const title = "Please verify email"

     await assert.assertTitle(title);
});
Then('I should receive an error message io', function () {
    return '8';
});




