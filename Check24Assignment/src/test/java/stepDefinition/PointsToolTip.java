package stepDefinition;

import static org.junit.Assert.assertEquals;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class PointsToolTip extends AbstractPageStepDefinition {
	
	WebDriver driver = getDriver();
	JavascriptExecutor jse = getJseDriver();
	
	String actualToolTipText;
	
	@Given("^User is on the new product details page")
	public void User_is_on_the_new_product_details_page() throws Throwable {
		Thread.sleep(4000);
		String expectedTitle = "Apple iPhone 8 64GB Space Grau Preis ohne Vertrag im CHECK24-Preisvergleich";
		String actualTitle = driver.getTitle();
		assertEquals("Selected product detail page is not displayed", expectedTitle, actualTitle);
	}
	
	@When("^User hovers above the Points tool tip in the product detail page$")
	public void User_hovers_above_the_Points_tool_tip_in_the_product_detail_page() throws Throwable {
	    Actions action = new Actions(driver);
	    
	    WebElement pointText = driver.findElement(By.xpath("//div[@class='points-badge points-badge--white']"));
	    action.moveToElement(pointText).perform();
	   
	    
	}

	@Then("^User should be able to verify the points details$")
	public void User_should_be_able_to_verify_the_points_details() throws Throwable {
	    
		String expectedToolTipText = "32";
		actualToolTipText = driver.findElement(By.xpath("//article[@id='offer-buybox']/div[8]//span/div")).getText().trim();
		System.out.println("tool tip text:"+actualToolTipText);
		assertEquals("Points are not displayed", expectedToolTipText, actualToolTipText);	
		
	}
	
}
