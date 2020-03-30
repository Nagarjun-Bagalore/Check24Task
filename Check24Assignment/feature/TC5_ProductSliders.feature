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

Feature: Additional Product sliders verification 


Scenario: Interaction of product sliders (Arrows are working, products are clickable, prices are displayed the same after redirection)
   Given User is on the product details page
   When User clicks on the right slider arrow button
   Then User verifies that the left arrow button is enabled
   When User clicks on any product
   Then User should be navigated to the product details page
   And User should be able to see the same price which was displayed in the previous page
	 

