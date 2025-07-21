Feature: Testing logout authentication
        As a user
        I want to authenticate the web application
        so as to ensure successful logout

  Scenario: Testing for Succesful logout
    Given logged into my account
      
      | ariajohnson1511@gmail.com | Johnson  |
    When I logout
    Then logout successful
