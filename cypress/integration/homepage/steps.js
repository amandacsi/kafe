import { Given, Then, When} from 'cypress-cucumber-preprocessor/steps'
import * as HomePage from '../homepage/homepage.js'



Given('Already on Home page', () => {
    HomePage.firstPage()
});

When('I scroll to the bottom of window', () => {
    HomePage.scrollPage()
})

When('I check information that does not exist', () => {
    HomePage.elementDoesnotexist()
})

When('I visualize information', () => {
    HomePage.validateElement()
})
When('I click links', () => {
    HomePage.validateLinks()
});
When('I click on the button', () => {
    HomePage.searchValidate()
});

Then('It was validated successfully', () => {
    HomePage.basicResult()
});

//second Scenario


When('I check the location atribute', () => {
    HomePage.validateLocation()
})

Then('the location is showing on the console', () => {
	HomePage.showLocation()
})

/////////////////////////API//////////////////////////////////////////////

Given('I access api request end point to get users',() => {
    HomePage.getEndpoint();
    });
    
Then('Verify below response for the user', (table) => {
    HomePage.getUser(table)
    });
    

    
When('I access the invalid URL and the status code is 404', () => {
	HomePage.getEndpointfail();
});



Given('Verify the response from fixture',() => {
    	HomePage.getjson()
});

Then ('Validate the response like id email firstname lastname',() =>{ 
    HomePage.validateJson()
});

When ('I should not be able to create user with missing email',() => {
    HomePage.missingEmail()
});
When ('I should replace the whole content with empty object',() => {
    HomePage.replaceObject()
});

When ('I should replace the whole content with new user',() => {
    HomePage.replaceUser()
});
