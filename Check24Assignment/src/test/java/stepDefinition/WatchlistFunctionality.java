package stepDefinition;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class WatchlistFunctionality extends AbstractPageStepDefinition {
	
	WebDriver driver = getDriver();
	JavascriptExecutor jse = getJseDriver();
	
	@Given("^User is on the product details page$")
	public void User_is_on_the_product_details_page() throws Throwable {
		
		String expectedTitle = "Apple iPhone 11 64 GB Black Dual-SIM Preis ohne Vertrag im CHECK24-Preisvergleich";
		String actualTitle = driver.getTitle();
		assertEquals("Apple iPhone 11 64 GB Black Dual-SIM details page is not displayed", expectedTitle, actualTitle);
	}

	@When("^User adds the product by clicking on the \"([^\"]*)\" watchlist link$")
	public void User_adds_the_product_by_clicking_on_the_watchlist_link(String arg1) throws Throwable {
	    
		driver.findElement(By.xpath("//a[@title='"+arg1+"']")).click();
	}

	@And("^User clicks on the \"([^\"]*)\" link on the top$")
	public void User_clicks_on_the_link_on_the_top(String arg1) throws Throwable {
		
		driver.findElement(By.xpath("//a//div[contains(text(),'"+arg1+"')]")).click();
	    
	}

	@Then("^User is able to see the added favourite product in the watchlist$")
	public void User_is_able_to_see_the_added_favourite_product_in_the_watchlist() throws Throwable {
	    
		WebElement merkzettelProduct = driver.findElement(By.xpath("//div[@id='body']/div[3]/div/div/div/a"));
		assertTrue("Added product to watchlist is not displayed", merkzettelProduct.isDisplayed());
	}

	@When("^User clicks on the product in the watchlist$")
	public void User_clicks_on_the_product_in_the_watchlist() throws Throwable {
	    driver.findElement(By.xpath("//a[contains(text(),'weiter zum Produkt')]")).click();
	}

	@And("^User is able to verify the prices and shipping cost$")
	public void User_is_able_to_verify_the_prices_and_shipping_cost() throws Throwable {
		
		String expectedPriceToggleOn = "774,99 €";
		String actualPriceToggleOn = driver.findElement(By.xpath("//div[@id='price-info']//span[@class='price-info__best-price']")).getText().trim();
		assertEquals("Price displayed is incorrect when toggled off", expectedPriceToggleOn, actualPriceToggleOn );
		
		WebElement PriceToggleOn = driver.findElement(By.xpath("//div[@id='price-info']//span[.='inkl. 5,99 € Versand']"));
		assertTrue("Shipping is not included in base price", PriceToggleOn.isDisplayed());
	}

}
