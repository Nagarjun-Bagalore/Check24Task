package stepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import static org.junit.Assert.*;


public class ShoppingCartVerification extends AbstractPageStepDefinition {
	
	WebDriver driver = getDriver();
	JavascriptExecutor jse = getJseDriver();
	
	@Given("^User is already present in the account page$")
	public void User_is_already_present_in_the_account_page() throws Throwable {
		
		String expectedTitle = "CHECK24 Kundenkonto";
		String actualTitle = driver.getTitle();
		assertEquals("Customer account page is not displayed", expectedTitle, actualTitle);
	}
	
	@When("^User search for \"([^\"]*)\" in the search box$")
	public void User_search_for_in_the_search_box(String arg1) throws Throwable {
		
		//driver.findElement(By.xpath("//section[@id='c24-dialog-points-modal']/div/header/button[.='schliessen']")).click();
		Thread.sleep(4000);
		driver.findElement(By.id("c24-search-header")).sendKeys(arg1);
	
		WebElement searchBtn = driver.findElement(By.xpath("//form[@id=\"c24-search-form\"]//li//div/a[.='iphone 11']"));  
		jse.executeScript("arguments[0].click();", searchBtn);
	}

	@And("^User selects the desired model from the result list$")
	public void User_selects_the_desired_model_from_the_result_list() throws Throwable {
		
		driver.findElement(By.xpath("//div[@id='c24-sc-shopping-item0']/div/a/div[2]/div[1]/div")).click();
	    
	}

	@Then("^User is navigated to the Iphone model details page$")
	public void User_is_navigated_to_the_Iphone_model_details_page() throws Throwable {
		
		String expectedTitle = "Apple iPhone 11 64 GB Black Dual-SIM Preis ohne Vertrag im CHECK24-Preisvergleich";
		String actualTitle = driver.getTitle();
		assertEquals("Apple iPhone 11 64 GB Black Dual-SIM details page is not displayed", expectedTitle, actualTitle);
	    
	}

	@When("^User clicks on the the button \"([^\"]*)\"$")
	public void User_clicks_on_the_the_button(String arg1) throws Throwable {
		
		driver.findElement(By.xpath("//article[@id='offer-buybox']/div[6]/div[6]/div[1]/div/button")).click();
	    
	}

	@Then("^User sees a popup message that the product is added in the Shopping cart$")
	public void User_sees_a_popup_message_that_the_product_is_added_in_the_Shopping_cart() throws Throwable {
		
		WebElement success_MSG = driver.findElement(By.xpath("//div[@id='offer-list']/div[1]//span[text()='Ihr Produkt wurde erfolgreich zum Warenkorb hinzugefügt.']"));
		assertTrue("Product is not added to the Shopping cart!", success_MSG.isDisplayed());
		System.out.println("Text is displayed: " +success_MSG.getText());
		
		driver.findElement(By.xpath("//div[@id='offer-list']/div[1]/div/div/div[1]/div")).click();
	}

	@When("^User clicks on the \"([^\"]*)\" link$")
	public void User_clicks_on_the_link(String arg1) throws Throwable {
		
		driver.findElement(By.xpath("//div[@id='wf-header']/div[2]/div/div[3]/div/div[5]/div[2]/span/a/div[2]")).click();
		    
		}

	@Then("^User is navigated to the Shopping cart page$")
	public void User_is_navigated_to_the_Shopping_cart_page() throws Throwable {
		
		String expectedTitle = "Warenkorb - Shopping | CHECK24";
		String actualTitle = driver.getTitle();
		System.out.println("Title is: "+actualTitle);
		assertEquals("Shopping Cart page is not displayed or navigated", expectedTitle, actualTitle);
		
	}

	@And("^User is able to see the base price,shipping price and quantity$")
	public void User_is_able_to_see_the_base_price_shipping_price_and_quantity() throws Throwable {
		
		Thread.sleep(2000);
		String expectedPrice = "769,00 €";
		String Price = driver.findElement(By.xpath("(//div[contains(text(),'Zwischensumme')])[2]")).getText();
		String[] actualPrice = Price.split(":");
		System.out.println("Price actual: " +actualPrice[1]);
		assertEquals("Price are not the same", expectedPrice, actualPrice[1].trim());
		
		String expectedShippingPrice = "5,99 €";
		String ShippingPrice = driver.findElement(By.xpath("(//div[contains(text(),'Versandkosten')])[2]")).getText();
		String[] actualShippingPrice = ShippingPrice.split(":");
		System.out.println("Price: " +actualShippingPrice[1]);
		assertEquals("Shipping Price are not the same", expectedShippingPrice, actualShippingPrice[1].trim());
		
		String expectedTotalPrice = "774,99 €";
		String actualTotalPrice = driver.findElement(By.xpath("//div[@id='body']//div[@class = 'column cart-total__price']/span")).getText();
		System.out.println("Test: "+actualTotalPrice);
		assertEquals("Gesamtpreis is incorrect", expectedTotalPrice, actualTotalPrice.trim());
		
		String expectedQuantity = "1";
		String actualQuantity = driver.findElement(By.xpath("//select[@data-quantity = '1']/option[1]")).getText();
		System.out.println("Price: " +actualQuantity.trim());
		assertEquals("Quantity displayed is incorrect", expectedQuantity, actualQuantity.trim());
		
	   
	}
	@When("^User hovers above the \"([^\"]*)\" on Product details page$")
	public void User_hovers_above_the_on_Product_details_page(String arg1) throws Throwable {
	    WebElement meinkonto=driver.findElement(By.xpath("//span[@id='wf-user']//div[2]/span"));
	    Actions action = new Actions(driver);
	    action.moveToElement(meinkonto).perform();
	}
	
	@Then("^User should be successfully logged out and shopping cart page is displayed$")
	public void User_should_be_successfully_logged_out_and_shopping_cart_page_is_displayed() throws Throwable {
		Thread.sleep(10000);
		String expectedTitle = "Warenkorb - Shopping | CHECK24";
		String actualTitle = driver.getTitle();
		System.out.println("Titile of Login page:"+actualTitle);
		assertEquals("Customer account page is not displayed", expectedTitle, actualTitle);
		Thread.sleep(10000);
	}
}
