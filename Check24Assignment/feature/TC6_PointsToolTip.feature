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

Feature: Verify points in product detail page


 Scenario: Voucher/Points at Product Detail Page
   Given User is on the new product details page
   When User hovers above the Points tool tip in the product detail page
   Then User should be able to verify the points details
   When User hovers above the "Mein Konto" on Product details page
   And User clicks on the "Abmelden" button 



