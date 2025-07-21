Feature: Testing login authentication
        As a user
        I want to authenticate the web application
        so as to ensure successful login
#successful scenario 

  Scenario: Testing for Succesful login
    Given I am on login page
    When I enter username "ariajohnson1511@gmail.com" and password "Johnson"
    Then login successful
#Unsuccesful login scenarios

  Scenario Outline: Testing for Unsuccesful login
    Given I am on login page
    When I enter username "<username>" and password "<password>"
    Then login Unsuccesful


    
    Examples: Data for the various scenarios
      | username               | password  |
      | ariajohns1@gmail.com   | Johnson   |
      | arixxxxx1511@gmail.com | Jgggnson  |
      | dsvhbujsnd@yahoo.com   | fvsghyhdb |
