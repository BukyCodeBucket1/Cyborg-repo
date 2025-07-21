 Feature: Advanced search 
 I want to search for a specific product by name, category, or price range, so I can find what I'm looking


Scenario: Logged into my account
Given I am logged into my account
When I click on Advanced search
Then I should see a search form with fields for product name, category, and price range
