package stepDefinition;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class AbstractPageStepDefinition {
	
	protected static WebDriver driver;
	protected static JavascriptExecutor jse;
	
	protected WebDriver getDriver(){
		if (driver == null){
			System.setProperty("webdriver.chrome.driver", ".\\Drivers\\chromedriver.exe");
			driver = new ChromeDriver();
		}
		return driver;
	}
	
	protected JavascriptExecutor getJseDriver(){
		if (jse == null){
			jse = (JavascriptExecutor)driver;
		}
		return jse;		
	}
	
}
