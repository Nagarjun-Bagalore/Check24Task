package stepDefinition;

import java.util.concurrent.TimeUnit;

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

public class LoginFunctionality extends AbstractPageStepDefinition {
	
	WebDriver driver = getDriver();
	JavascriptExecutor jse = getJseDriver();
	
	String username = "alluarjun.456@gmail.com";
	
	@Given("^User is in the check(\\d+).de website$")
	public void User_is_in_the_check_de_website(int arg1) throws Throwable {
	    
		driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS);
		driver.manage().window().maximize();
		driver.get("https://www.check24.de/");
	}
	
	@When("^User clicks on the Anmelden button and enters the username and password$")
	public void User_clicks_on_the_Anmelden_button_and_enters_the_username_and_password() throws Throwable {
		
		//Clicks on the Anmelden Button in Homepage
		driver.findElement(By.xpath("//div[@id='c24-meinkonto']/span/span/a[.='Anmelden']")).click();
		Thread.sleep(4000);
		
		//Enters username and Password
		driver.findElement(By.id("email")).clear();
		driver.findElement(By.id("email")).sendKeys(username);
		driver.findElement(By.id("password")).sendKeys("Test12345!");
	    
	}

	@When("^User clicks on the Anmelden button$")
	public void User_clicks_on_the_Anmelden_button() throws Throwable {
		
		driver.findElement(By.id("c24-kb-register-btn")).click();
		Thread.sleep(6000);
 
	}

	@Then("^User is navigated to the account page$")
	public void User_is_navigated_to_the_account_page() throws Throwable {
		
	    
		String expectedTitle = "CHECK24 Kundenkonto";
		String actualTitle = driver.getTitle();
		assertEquals("Customer account page is not displayed", expectedTitle, actualTitle);
		Thread.sleep(3000);
		driver.findElement(By.xpath("//section[@id='c24-dialog-points-modal']//button[text()='schliessen']")).click();
	    
	}

	@And("^User sees his details$")
	public void User_sees_his_details() throws Throwable {
		
		WebElement user_Details = driver
				.findElement(By.xpath("//div[@id='c24-kb-container']/div/div[1]/div/div/div/p"));
		String actualText = user_Details.getText();
		System.out.println("Text is: "+actualText);
		assertTrue("Email ID after login is not displayed", actualText.contains(username));
		Thread.sleep(3000);

	}
	
	@When("^User hovers above the \"([^\"]*)\"$")
	public void User_hovers_above_the(String arg1) throws Throwable {
	    Actions action = new Actions(driver);
	    WebElement kontoHover = driver.findElement(By.xpath("//div[@id='c24-meinkonto']/span/span[2]"));
	    action.moveToElement(kontoHover).perform();
	    //kontoHover.click();
	}

	@And("^User clicks on the \"([^\"]*)\" button$")
	public void User_clicks_on_the_button(String arg1) throws Throwable {
	    driver.findElement(By.xpath("//a[.='Abmelden']")).click();;
	    Thread.sleep(10000);
	}

	@Then("^User should be successfully logged out$")
	public void User_should_be_successfully_logged_out() throws Throwable {
		Thread.sleep(10000);
		String expectedTitle = "CHECK24 Kundenkonto";
		String actualTitle = driver.getTitle();
		System.out.println("Titile of Login page:"+actualTitle);
		assertEquals("Customer account page is not displayed", expectedTitle, actualTitle);
		Thread.sleep(10000);
	}
	

}
