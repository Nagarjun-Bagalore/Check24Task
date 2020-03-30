package stepDefinition;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ProductSliders extends AbstractPageStepDefinition {
	
	WebDriver driver = getDriver();
	JavascriptExecutor jse = getJseDriver();
	
	String Price;
	WebElement leftButton = driver.findElement(By.xpath("(//button[@aria-label='Previous page'])[2]"));
	
	@When("^User clicks on the right slider arrow button$")
	public void User_clicks_on_the_right_slider_arrow_button() throws Throwable {
		jse.executeScript("window.scrollBy(0,1000)");
		
		//assertTrue("Left button is enabled", (leftButton.isEnabled());
		
		WebElement rightButton = driver.findElement(By.xpath("(//button[@aria-label='Next page'])[2]"));
		assertTrue("Button is not clickable", rightButton.isEnabled());
		rightButton.click();
		
	}
	
	@Then("^User verifies that the left arrow button is enabled$")
	public void User_verifies_that_the_left_arrow_button_is_enabled() throws Throwable {
	    
		//WebElement leftButton = driver.findElement(By.xpath("(//button[@aria-label='Previous page'])[2]"));
		assertTrue("Left button is not enabled", leftButton.isEnabled());
	}

	@When("^User clicks on any product$")
	public void User_clicks_on_any_product() throws Throwable {
		
		Price = driver.findElement(By.xpath("//div[@id='related-slider']//div[7]//div[2]/div/span")).getText().trim();
		Thread.sleep(1000);
	    driver.findElement(By.xpath("(//div[@id='related-slider']//div[2]/a/span)[7]")).click();
	}

	@Then("^User should be navigated to the product details page$")
	public void User_should_be_navigated_to_the_product_details_page() throws Throwable {
	    
		Thread.sleep(4000);
		String expectedTitle = "Apple iPhone 8 64GB Space Grau Preis ohne Vertrag im CHECK24-Preisvergleich";
		String actualTitle = driver.getTitle();
		assertEquals("Selected product detail page is not displayed", expectedTitle, actualTitle);
		
	}

	@And("^User should be able to see the same price which was displayed in the previous page$")
	public void User_should_be_able_to_see_the_same_price_which_was_displayed_in_the_previous_page() throws Throwable {
	    
		String productPrice = driver.findElement(By.xpath("//div[@id='price-info']//div[2]/span[2]/span[1]")).getText().trim();
		assertTrue("Prices are not matching with the previous page", productPrice.contains(Price));
			
	}
	
}
