#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template

Feature: Login to Check24 website and verify the user details in Mein Konto Page


Scenario: Login to Check24 page and verify user details
    Given User is in the check24.de website
    When User clicks on the Anmelden button and enters the username and password
    And User clicks on the Anmelden button
    Then User is navigated to the account page
    And User sees his details
    When User hovers above the "Mein Konto"
    And User clicks on the "Abmelden" button
    Then User should be successfully logged out 
   
    

    


