import {Given, Then, When} from "@cucumber/cucumber";
import {page} from "../config/world";
import {SignUpPage} from '../pages/SignUpPage';
import {pageUrl} from "../utils/navigation";
import '../config/env';

let signupPage : SignUpPage;

Given('I am on the {string} page', async (pageName) => {
    signupPage = new SignUpPage(page) ;
    await signupPage.navigate(pageUrl(pageName));
});

When('I fullfilled the form with the informations below', function (dataTable) {
    const data = dataTable.rowsHash();
    console.log(data.email);
    console.log(data.password);
    signupPage = new SignUpPage(page) ;
    signupPage.enterEmailAndPassword(data.email ,data.password);
    signupPage.signUp()

});
Then('I should receive an error message io', function () {
    return '8';
});

When('I validate the register form', function () {
    return '8';
});

When('I fill out the form with the following user information', function (dataTable) {
    return '8';
});
Then('I receive an confirmation message', function () {
    return 'pending';
});




