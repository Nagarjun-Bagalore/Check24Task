$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("TC1_Check24.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 20,
  "name": "Login to Check24 website and verify the user details in Mein Konto Page",
  "description": "",
  "id": "login-to-check24-website-and-verify-the-user-details-in-mein-konto-page",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 23,
  "name": "Login to Check24 page and verify user details",
  "description": "",
  "id": "login-to-check24-website-and-verify-the-user-details-in-mein-konto-page;login-to-check24-page-and-verify-user-details",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 24,
  "name": "User is in the check24.de website",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "User clicks on the Anmelden button and enters the username and password",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "User clicks on the Anmelden button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User is navigated to the account page",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "User sees his details",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User hovers above the \"Mein Konto\"",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "User clicks on the \"Abmelden\" button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User should be successfully logged out",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "24",
      "offset": 20
    }
  ],
  "location": "LoginFunctionality.User_is_in_the_check_de_website(int)"
});
formatter.result({
  "duration": 5906873500,
  "status": "passed"
});
formatter.match({
  "location": "LoginFunctionality.User_clicks_on_the_Anmelden_button_and_enters_the_username_and_password()"
});
formatter.result({
  "duration": 4773042400,
  "status": "passed"
});
formatter.match({
  "location": "LoginFunctionality.User_clicks_on_the_Anmelden_button()"
});
formatter.result({
  "duration": 6062650100,
  "status": "passed"
});
formatter.match({
  "location": "LoginFunctionality.User_is_navigated_to_the_account_page()"
});
formatter.result({
  "duration": 10086745400,
  "status": "passed"
});
formatter.match({
  "location": "LoginFunctionality.User_sees_his_details()"
});
formatter.result({
  "duration": 3023404600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mein Konto",
      "offset": 23
    }
  ],
  "location": "LoginFunctionality.User_hovers_above_the(String)"
});
formatter.result({
  "duration": 138237000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Abmelden",
      "offset": 20
    }
  ],
  "location": "LoginFunctionality.User_clicks_on_the_button(String)"
});
formatter.result({
  "duration": 10570607500,
  "status": "passed"
});
formatter.match({
  "location": "LoginFunctionality.User_should_be_successfully_logged_out()"
});
formatter.result({
  "duration": 20006690100,
  "status": "passed"
});
formatter.uri("TC2_ShoppingCartVerification.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 20,
  "name": "Adding items in the shopping cart and verify prices, quantity and shipping cost",
  "description": "",
  "id": "adding-items-in-the-shopping-cart-and-verify-prices,-quantity-and-shipping-cost",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 22,
  "name": "Login to Check24 page and verify shopping cart scenario",
  "description": "",
  "id": "adding-items-in-the-shopping-cart-and-verify-prices,-quantity-and-shipping-cost;login-to-check24-page-and-verify-shopping-cart-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 23,
  "name": "User is in the check24.de website",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "User clicks on the Anmelden button and enters the username and password",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "User clicks on the Anmelden button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User is navigated to the account page",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "User search for \"Iphone 11\" in the search box",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "User selects the desired model from the result list",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User is navigated to the Iphone model details page",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "User clicks on the the button \"In den Warenkorb\"",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "User sees a popup message that the product is added in the Shopping cart",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "User clicks on the \"Warenkorb\" link",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "User is navigated to the Shopping cart page",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "User is able to see the base price,shipping price and quantity",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User hovers above the \"Mein Konto\" on Product details page",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "User clicks on the \"Abmelden\" button",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User should be successfully logged out and shopping cart page is displayed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "24",
      "offset": 20
    }
  ],
  "location": "LoginFunctionality.User_is_in_the_check_de_website(int)"
});
formatter.result({
  "duration": 816619600,
  "status": "passed"
});
formatter.match({
  "location": "LoginFunctionality.User_clicks_on_the_Anmelden_button_and_enters_the_username_and_password()"
});
formatter.result({
  "duration": 4720766100,
  "status": "passed"
});
formatter.match({
  "location": "LoginFunctionality.User_clicks_on_the_Anmelden_button()"
});
formatter.result({
  "duration": 6068189300,
  "status": "passed"
});
formatter.match({
  "location": "LoginFunctionality.User_is_navigated_to_the_account_page()"
});
formatter.result({
  "duration": 10180069400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Iphone 11",
      "offset": 17
    }
  ],
  "location": "ShoppingCartVerification.User_search_for_in_the_search_box(String)"
});
formatter.result({
  "duration": 4819746900,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingCartVerification.User_selects_the_desired_model_from_the_result_list()"
});
formatter.result({
  "duration": 2729418000,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingCartVerification.User_is_navigated_to_the_Iphone_model_details_page()"
});
formatter.result({
  "duration": 16591700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "In den Warenkorb",
      "offset": 31
    }
  ],
  "location": "ShoppingCartVerification.User_clicks_on_the_the_button(String)"
});
formatter.result({
  "duration": 127784700,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingCartVerification.User_sees_a_popup_message_that_the_product_is_added_in_the_Shopping_cart()"
});
formatter.result({
  "duration": 2436515100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Warenkorb",
      "offset": 20
    }
  ],
  "location": "ShoppingCartVerification.User_clicks_on_the_link(String)"
});
formatter.result({
  "duration": 1976848000,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingCartVerification.User_is_navigated_to_the_Shopping_cart_page()"
});
formatter.result({
  "duration": 7695800,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingCartVerification.User_is_able_to_see_the_base_price_shipping_price_and_quantity()"
});
formatter.result({
  "duration": 2110341100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mein Konto",
      "offset": 23
    }
  ],
  "location": "ShoppingCartVerification.User_hovers_above_the_on_Product_details_page(String)"
});
formatter.result({
  "duration": 125413100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Abmelden",
      "offset": 20
    }
  ],
  "location": "LoginFunctionality.User_clicks_on_the_button(String)"
});
formatter.result({
  "duration": 11606163500,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingCartVerification.User_should_be_successfully_logged_out_and_shopping_cart_page_is_displayed()"
});
formatter.result({
  "duration": 20005505000,
  "status": "passed"
});
formatter.uri("TC3_Toggle.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 20,
  "name": "Checking for toggle functionality and verifying for the price change",
  "description": "",
  "id": "checking-for-toggle-functionality-and-verifying-for-the-price-change",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 24,
  "name": "Shipping cost toggle product detail page and verify if the shipping cost is added correctly",
  "description": "",
  "id": "checking-for-toggle-functionality-and-verifying-for-the-price-change;shipping-cost-toggle-product-detail-page-and-verify-if-the-shipping-cost-is-added-correctly",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 26,
  "name": "User is in the check24.de website",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "User clicks on the Anmelden button and enters the username and password",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "User clicks on the Anmelden button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User is navigated to the account page",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "User hovers on the Listen and clicks on the Artikel link",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "User is navigated to the Shopping cart page",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "User clicks on the selected product",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "User is navigated to the product details page",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "User toggle off the button",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "User verifies the price displayed and shipping cost",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "User toggle on the button",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "User again verifies for the price change and shipping cost added",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "User hovers above the \"Mein Konto\" on Product details page",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "User clicks on the \"Abmelden\" button",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "User should be successfully logged out and product detail page is displayed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "24",
      "offset": 20
    }
  ],
  "location": "LoginFunctionality.User_is_in_the_check_de_website(int)"
});
formatter.result({
  "duration": 1059984700,
  "status": "passed"
});
formatter.match({
  "location": "LoginFunctionality.User_clicks_on_the_Anmelden_button_and_enters_the_username_and_password()"
});
formatter.result({
  "duration": 4677497300,
  "status": "passed"
});
formatter.match({
  "location": "LoginFunctionality.User_clicks_on_the_Anmelden_button()"
});
formatter.result({
  "duration": 6048782400,
  "status": "passed"
});
formatter.match({
  "location": "LoginFunctionality.User_is_navigated_to_the_account_page()"
});
formatter.result({
  "duration": 4519921100,
  "status": "passed"
});
formatter.match({
  "location": "ToggleSwitch.User_hovers_on_the_Listen_and_clicks_on_the_Artikel_link()"
});
formatter.result({
  "duration": 7217037200,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingCartVerification.User_is_navigated_to_the_Shopping_cart_page()"
});
formatter.result({
  "duration": 3666200,
  "status": "passed"
});
formatter.match({
  "location": "ToggleSwitch.User_clicks_on_the_selected_product()"
});
formatter.result({
  "duration": 7167358900,
  "status": "passed"
});
formatter.match({
  "location": "ToggleSwitch.User_is_navigated_to_the_product_details_page()"
});
formatter.result({
  "duration": 27565000,
  "status": "passed"
});
formatter.match({
  "location": "ToggleSwitch.User_toggle_off_the_button()"
});
formatter.result({
  "duration": 2079303100,
  "status": "passed"
});
formatter.match({
  "location": "ToggleSwitch.User_verifies_the_price_displayed_and_shipping_cost()"
});
formatter.result({
  "duration": 88324700,
  "status": "passed"
});
formatter.match({
  "location": "ToggleSwitch.User_toggle_on_the_button()"
});
formatter.result({
  "duration": 2126150500,
  "status": "passed"
});
formatter.match({
  "location": "ToggleSwitch.User_again_verifies_for_the_price_change_and_shipping_cost_added()"
});
formatter.result({
  "duration": 84190500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mein Konto",
      "offset": 23
    }
  ],
  "location": "ShoppingCartVerification.User_hovers_above_the_on_Product_details_page(String)"
});
formatter.result({
  "duration": 130647500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Abmelden",
      "offset": 20
    }
  ],
  "location": "LoginFunctionality.User_clicks_on_the_button(String)"
});
formatter.result({
  "duration": 11948246100,
  "status": "passed"
});
formatter.match({
  "location": "ToggleSwitch.User_should_be_successfully_logged_out_and_product_detail_page_is_displayed()"
});
formatter.result({
  "duration": 20008616000,
  "status": "passed"
});
formatter.uri("TC4_Watchlist.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 20,
  "name": "Price verification in watchlist page",
  "description": "",
  "id": "price-verification-in-watchlist-page",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 24,
  "name": "Put item to watchlist and verify prices and shipping cost",
  "description": "",
  "id": "price-verification-in-watchlist-page;put-item-to-watchlist-and-verify-prices-and-shipping-cost",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 26,
  "name": "User is in the check24.de website",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "User clicks on the Anmelden button and enters the username and password",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "User clicks on the Anmelden button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User is navigated to the account page",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "User hovers on the Listen and clicks on the Artikel link",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "User is navigated to the Shopping cart page",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "User clicks on the selected product",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "User is navigated to the product details page",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "User adds the product by clicking on the \"Produkt merken\" watchlist link",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "User clicks on the \"Merkzettel\" link on the top",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User is able to see the added favourite product in the watchlist",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "User clicks on the product in the watchlist",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "User is navigated to the product details page",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "User is able to verify the prices and shipping cost",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "24",
      "offset": 20
    }
  ],
  "location": "LoginFunctionality.User_is_in_the_check_de_website(int)"
});
formatter.result({
  "duration": 1075599700,
  "status": "passed"
});
formatter.match({
  "location": "LoginFunctionality.User_clicks_on_the_Anmelden_button_and_enters_the_username_and_password()"
});
formatter.result({
  "duration": 4764422300,
  "status": "passed"
});
formatter.match({
  "location": "LoginFunctionality.User_clicks_on_the_Anmelden_button()"
});
formatter.result({
  "duration": 6049026500,
  "status": "passed"
});
formatter.match({
  "location": "LoginFunctionality.User_is_navigated_to_the_account_page()"
});
formatter.result({
  "duration": 3066789100,
  "status": "passed"
});
formatter.match({
  "location": "ToggleSwitch.User_hovers_on_the_Listen_and_clicks_on_the_Artikel_link()"
});
formatter.result({
  "duration": 7840905800,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingCartVerification.User_is_navigated_to_the_Shopping_cart_page()"
});
formatter.result({
  "duration": 5217800,
  "status": "passed"
});
formatter.match({
  "location": "ToggleSwitch.User_clicks_on_the_selected_product()"
});
formatter.result({
  "duration": 7411832000,
  "status": "passed"
});
formatter.match({
  "location": "ToggleSwitch.User_is_navigated_to_the_product_details_page()"
});
formatter.result({
  "duration": 20154600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Produkt merken",
      "offset": 42
    }
  ],
  "location": "WatchlistFunctionality.User_adds_the_product_by_clicking_on_the_watchlist_link(String)"
});
formatter.result({
  "duration": 76115600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Merkzettel",
      "offset": 20
    }
  ],
  "location": "WatchlistFunctionality.User_clicks_on_the_link_on_the_top(String)"
});
formatter.result({
  "duration": 3028865600,
  "status": "passed"
});
formatter.match({
  "location": "WatchlistFunctionality.User_is_able_to_see_the_added_favourite_product_in_the_watchlist()"
});
formatter.result({
  "duration": 42753900,
  "status": "passed"
});
formatter.match({
  "location": "WatchlistFunctionality.User_clicks_on_the_product_in_the_watchlist()"
});
formatter.result({
  "duration": 2226278800,
  "status": "passed"
});
formatter.match({
  "location": "ToggleSwitch.User_is_navigated_to_the_product_details_page()"
});
formatter.result({
  "duration": 19852800,
  "status": "passed"
});
formatter.match({
  "location": "WatchlistFunctionality.User_is_able_to_verify_the_prices_and_shipping_cost()"
});
formatter.result({
  "duration": 75851400,
  "status": "passed"
});
formatter.uri("TC5_ProductSliders.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 20,
  "name": "Additional Product sliders verification",
  "description": "",
  "id": "additional-product-sliders-verification",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 23,
  "name": "Interaction of product sliders (Arrows are working, products are clickable, prices are displayed the same after redirection)",
  "description": "",
  "id": "additional-product-sliders-verification;interaction-of-product-sliders-(arrows-are-working,-products-are-clickable,-prices-are-displayed-the-same-after-redirection)",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 24,
  "name": "User is on the product details page",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "User clicks on the right slider arrow button",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "User verifies that the left arrow button is enabled",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "User clicks on any product",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "User should be navigated to the product details page",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "User should be able to see the same price which was displayed in the previous page",
  "keyword": "And "
});
formatter.match({
  "location": "WatchlistFunctionality.User_is_on_the_product_details_page()"
});
formatter.result({
  "duration": 4407100,
  "status": "passed"
});
formatter.match({
  "location": "ProductSliders.User_clicks_on_the_right_slider_arrow_button()"
});
formatter.result({
  "duration": 148711400,
  "status": "passed"
});
formatter.match({
  "location": "ProductSliders.User_verifies_that_the_left_arrow_button_is_enabled()"
});
formatter.result({
  "duration": 13980000,
  "status": "passed"
});
formatter.match({
  "location": "ProductSliders.User_clicks_on_any_product()"
});
formatter.result({
  "duration": 3217357100,
  "status": "passed"
});
formatter.match({
  "location": "ProductSliders.User_should_be_navigated_to_the_product_details_page()"
});
formatter.result({
  "duration": 4004800400,
  "status": "passed"
});
formatter.match({
  "location": "ProductSliders.User_should_be_able_to_see_the_same_price_which_was_displayed_in_the_previous_page()"
});
formatter.result({
  "duration": 31525600,
  "status": "passed"
});
formatter.uri("TC6_PointsToolTip.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 20,
  "name": "Verify points in product detail page",
  "description": "",
  "id": "verify-points-in-product-detail-page",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 23,
  "name": "Voucher/Points at Product Detail Page",
  "description": "",
  "id": "verify-points-in-product-detail-page;voucher/points-at-product-detail-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 24,
  "name": "User is on the new product details page",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "User hovers above the Points tool tip in the product detail page",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "User should be able to verify the points details",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "User hovers above the \"Mein Konto\" on Product details page",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "User clicks on the \"Abmelden\" button",
  "keyword": "And "
});
formatter.match({
  "location": "PointsToolTip.User_is_on_the_new_product_details_page()"
});
formatter.result({
  "duration": 4004323500,
  "status": "passed"
});
formatter.match({
  "location": "PointsToolTip.User_hovers_above_the_Points_tool_tip_in_the_product_detail_page()"
});
formatter.result({
  "duration": 126043800,
  "status": "passed"
});
formatter.match({
  "location": "PointsToolTip.User_should_be_able_to_verify_the_points_details()"
});
formatter.result({
  "duration": 33390700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mein Konto",
      "offset": 23
    }
  ],
  "location": "ShoppingCartVerification.User_hovers_above_the_on_Product_details_page(String)"
});
formatter.result({
  "duration": 143929700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Abmelden",
      "offset": 20
    }
  ],
  "location": "LoginFunctionality.User_clicks_on_the_button(String)"
});
formatter.result({
  "duration": 12185800700,
  "status": "passed"
});
});