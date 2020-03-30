package stepDefinition;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ToggleSwitch extends AbstractPageStepDefinition {
	
	WebDriver driver = getDriver();
	JavascriptExecutor jse = getJseDriver();
	
	
	/*
	@Given("^User is already in the shopping cart page$")
	public void User_is_already_in_the_shopping_cart_page() throws Throwable{
		
		String expectedTitle = "Warenkorb - Shopping | CHECK24";
		String actualTitle = driver.getTitle();
		System.out.println("Title is: "+actualTitle);
		assertEquals("Shopping Cart page is not displayed or navigated", expectedTitle, actualTitle);
	}
	*/
	
	@When("^User hovers on the Listen and clicks on the Artikel link$")
	public void User_hovers_on_the_Listen_and_clicks_on_the_Artikel_link() throws Throwable {
		
		
		WebElement meinListen = driver.findElement(By.xpath("//div[@id='c24-mylists']//span[2]/span"));
		Actions action = new Actions(driver);
		action.moveToElement(meinListen).perform();
		
		driver.findElement(By.xpath("//div[@id='c24-mylists']//span[.='Artikel']")).click();
		Thread.sleep(5000);
	   
	}
	
	@When("^User clicks on the selected product$")
	public void User_clicks_on_the_selected_product() throws Throwable {
		//driver.navigate().refresh();
		Thread.sleep(5000);
	    driver.findElement(By.xpath("//h2[contains(text(),'Apple iPhone 11 64 GB')]")).click();
	}

	@Then("^User is navigated to the product details page$")
	public void User_is_navigated_to_the_product_details_page() throws Throwable {
		
		String expectedTitle = "Apple iPhone 11 64 GB Black Dual-SIM Preis ohne Vertrag im CHECK24-Preisvergleich";
		String actualTitle = driver.getTitle();
		assertEquals("Apple iPhone 11 64 GB Black Dual-SIM details page is not displayed", expectedTitle, actualTitle);
	}

	@When("^User toggle off the button$")
	public void User_toggle_off_the_button() throws Throwable {
		
	    driver.findElement(By.xpath("//div[@id='offer-list']/div/div/div[1]/label")).click();
	}

	@Then("^User verifies the price displayed and shipping cost$")
	public void User_verifies_the_price_displayed_and_shipping_cost() throws Throwable {
		
		String expectedPriceToggleOff = "769,00 €";
		String actualPriceToggleOff = driver.findElement(By.xpath("//div[@id='price-info']/div/div[3]/span[2]/span[1]")).getText().trim();
		assertEquals("Price displayed is incorrect when toggled off", expectedPriceToggleOff, actualPriceToggleOff );
		
		WebElement PriceToggleOff = driver.findElement(By.xpath("//div[@id='price-info']//span[.='+ 5,99 € Versand = 774,99 €']"));
		assertTrue("Shipping is not added correctly to the base price", PriceToggleOff.isDisplayed());
				
		
	    
	}

	@When("^User toggle on the button$")
	public void User_toggle_on_the_button() throws Throwable {
		
		 driver.findElement(By.xpath("//div[@id='offer-list']/div/div/div[1]/label")).click();
	
	}

	@Then("^User again verifies for the price change and shipping cost added$")
	public void User_again_verifies_for_the_price_change_and_shipping_cost_added() throws Throwable {
		
		String expectedPriceToggleOn = "774,99 €";
		String actualPriceToggleOn = driver.findElement(By.xpath("//div[@id='price-info']//span[@class='price-info__best-price']")).getText().trim();
		assertEquals("Price displayed is incorrect when toggled off", expectedPriceToggleOn, actualPriceToggleOn );
		
		WebElement PriceToggleOn = driver.findElement(By.xpath("//div[@id='price-info']//span[.='inkl. 5,99 € Versand']"));
		assertTrue("Shipping is not included in base price", PriceToggleOn.isDisplayed());
	    
	}
	
	@Then("^User should be successfully logged out and product detail page is displayed$")
	public void User_should_be_successfully_logged_out_and_product_detail_page_is_displayed() throws Throwable {
		Thread.sleep(10000);
		String expectedTitle = "Apple iPhone 11 64 GB Black Dual-SIM Preis ohne Vertrag im CHECK24-Preisvergleich";
		String actualTitle = driver.getTitle();
		System.out.println("Titile of Login page:"+actualTitle);
		assertEquals("Customer account page is not displayed", expectedTitle, actualTitle);
		Thread.sleep(10000);
	}

}
