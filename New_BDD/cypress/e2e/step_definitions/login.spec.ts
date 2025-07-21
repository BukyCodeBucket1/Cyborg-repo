import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";
import homepage from "../pages/homePage";
import accountPage from "../pages/accountPage";
import dashboardPage from "../pages/dashboardPage";




Given ('I am on login page', () => {
  homepage.goToAccount();
})

//this is first successful when not needed again after generating another when with password and username string
/*When('I enter username and password', () => {
  cy.get("#email").type("ariajohnson1511@gmail.com");
  cy.get("#pass").type("Johnson");
  cy.get("#send2").click();
}) */



  //new when succesful login
When('I enter username {string} and password {string}', (username: string, password: string) => {
  accountPage.login(username, password);

})



Then('login successful', () => {
  dashboardPage.confirmLogin()
})



//unsuccessful when, not needed again after putting username and password in feature file
/*
When('I enter invalid username and password', () => {
   cy.get("#email").type("xxxffef@gmail.com");
  cy.get("#pass").type("ttyson");
  cy.get("#send2").click();


})*/


Then('login Unsuccesful', () => {
  cy.get("li[class='error-msg']").should("include.text", "Invalid login or password");
})

















/*
When('I enter valid username {string} and password {string}', (s: string, s2: string) => {
  // Write code here that turns the phrase above into concrete actions
})
*/
