package testRunner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
 
@RunWith(Cucumber.class)
@CucumberOptions(
		features = "feature",
		glue = "stepDefinition",
		format = {"pretty", "html:target/cucumber-html-report", 
				"json:target/cucumber-json-report/Cucumber.json"},
		monochrome = true
		
 )
 
	public class TestRunner {
	
	}
