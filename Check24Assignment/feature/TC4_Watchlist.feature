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

Feature: Price verification in watchlist page



Scenario: Put item to watchlist and verify prices and shipping cost
		
   Given User is in the check24.de website
   When User clicks on the Anmelden button and enters the username and password
   And User clicks on the Anmelden button
   Then User is navigated to the account page
   When User hovers on the Listen and clicks on the Artikel link	
   Then User is navigated to the Shopping cart page
   When User clicks on the selected product
   Then User is navigated to the product details page
   When User adds the product by clicking on the "Produkt merken" watchlist link
   And User clicks on the "Merkzettel" link on the top
   Then User is able to see the added favourite product in the watchlist
   When User clicks on the product in the watchlist
   Then User is navigated to the product details page
   And User is able to verify the prices and shipping cost

