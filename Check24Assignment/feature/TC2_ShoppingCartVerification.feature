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

Feature: Adding items in the shopping cart and verify prices, quantity and shipping cost

Scenario: Login to Check24 page and verify shopping cart scenario
    Given User is in the check24.de website
    When User clicks on the Anmelden button and enters the username and password
    And User clicks on the Anmelden button
    Then User is navigated to the account page
    When User search for "Iphone 11" in the search box
    And User selects the desired model from the result list
    Then User is navigated to the Iphone model details page
    When User clicks on the the button "In den Warenkorb"
    Then User sees a popup message that the product is added in the Shopping cart
    When User clicks on the "Warenkorb" link
    Then User is navigated to the Shopping cart page
    And User is able to see the base price,shipping price and quantity
    When User hovers above the "Mein Konto" on Product details page
    And User clicks on the "Abmelden" button 
    Then User should be successfully logged out and shopping cart page is displayed
    
    
   
    
    

