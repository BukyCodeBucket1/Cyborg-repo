import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";

//import homepage from "../pages/homepage";
import accountPage from "../pages/accountPage";
import dashboardPage from "../pages/dashboardPage";
import homePage from "../pages/homePage";




/*
Given("I am on login page",()=>{
 cy.get("a[href*='customer/account']").eq(4).click();
 cy.get("#email").type(username);
  cy.get("#pass").type(password);
  cy.get("#send2").click();
  cy.get("strong").eq(2).should("include.text", "Hello, Ebuka Frank");
 
} )
*/


// new generated Given
Given('logged into my account', (table:any) => {
    table.raw().forEach((data:any) => {
        const username= data[0];
        const password= data[1];

        homePage.goToAccount();
        accountPage.login(username, password);
        dashboardPage.confirmLogin();


// The commented code below not needed as i have implemented page objects
        /*
        cy.get("a[href*='customer/account']").eq(4).click();
 cy.get("#email").type(username);
  cy.get("#pass").type(password);
  cy.get("#send2").click();
  cy.get("strong").eq(2).should("include.text", "Hello, Ebuka Frank");
 
*/


    });
    
  
})


When('I logout', () => {
    cy.get("a[href*='customer/account/']").eq(0).click();
    cy.get("a[title*='Log Out']").click();
})

Then('logout successful', () => {
  cy.get("h1").should("contain.text", "You are now logged out");
})

