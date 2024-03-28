import {Given, Then, When} from "@cucumber/cucumber";
import {page} from "./world";
import {SignUpPage} from '../pages/SignUpPage';
import '../config/env';

let signupPage = new SignUpPage(page);

Given(/^I am on the (register) page$/, async (pageName: string) => {
    let expectedUrl: string;

    // switch (pageName) {
    //     case "register" :
    //         expectedUrl = `${process.env.profileUrl}${process.env.registerUrl}`;
    //         console.log(expectedUrl);
    //         break;
    //     default:
    //         throw new Error("The page "+ pageName+ " don't exist");
    // }
    //
    // if (!expectedUrl) {
    //     throw new Error(
    //         "baseUrl is not defined. Please check your environment or .env file."
    //     );
    // }

    await signupPage.navigate('https://profile.w3schools.com/sign-up');

});

When('I fullfilled the form with the informations below', function (dataTable) {
    // Write code here that turns the phrase above into concrete actions
    return '8';
});
Then('I should receive an error message io', function () {
    // Write code here that turns the phrase above into concrete actions
    return '8';
});

When('I validate the register form', function () {
    // Write code here that turns the phrase above into concrete actions
    return '8';
});

When('I fill out the form with the following user information', function (dataTable) {
    // Write code here that turns the phrase above into concrete actions
    return '8';
});
Then('I receive an confirmation message', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});




