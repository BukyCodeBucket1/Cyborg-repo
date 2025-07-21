import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";




Given('I am logged into my account', () => {
     cy.get("[href*='catalogsearch/advanced/']").click();

})


When('I click on Advanced search', () => {
  
})

Then('I should see a search form with fields for product name, category, and price range', () => {
  // Write code here that turns the phrase above into concrete actions
})
