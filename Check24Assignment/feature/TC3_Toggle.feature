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

Feature: Checking for toggle functionality and verifying for the price change



Scenario: Shipping cost toggle product detail page and verify if the shipping cost is added correctly
		
		Given User is in the check24.de website
    When User clicks on the Anmelden button and enters the username and password
    And User clicks on the Anmelden button
    Then User is navigated to the account page
		When User hovers on the Listen and clicks on the Artikel link	
    Then User is navigated to the Shopping cart page
    When User clicks on the selected product
    Then User is navigated to the product details page
    When User toggle off the button
    Then User verifies the price displayed and shipping cost
    When User toggle on the button
    Then User again verifies for the price change and shipping cost added
    When User hovers above the "Mein Konto" on Product details page
    And User clicks on the "Abmelden" button 
    Then User should be successfully logged out and product detail page is displayed


