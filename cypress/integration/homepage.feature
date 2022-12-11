Feature: API and Home Page Validation
As a user I want to validate the Home Page Casinos and the API regress.io/Api

  Scenario: Validate the home page
    Given Already on Home page
    When I check information that does not exist
    When I scroll to the bottom of window
    When I visualize information
    When I click links
    Then It was validated successfully

  Scenario: Validate location on the page
    Given Already on Home page
    When I check the location atribute
    Then the location is showing on the console

  Scenario: Fails with 404 (Not Found) status code when url does not exist
    When I access the invalid URL and the status code is 404

  Scenario: To access reqres.in and perform basic api test to fetch users
    Given I access api request end point to get users
    Then Verify below response for the user
      | email                  | firstname | lastname | avatar                                  |
      | george.bluth@reqres.in | George    | Bluth    | https://reqres.in/img/faces/1-image.jpg |

  Scenario: Verify the response data from json
    Given Verify the response from fixture
    Then Validate the response like id email firstname lastname

  Scenario: Validate missing email information with missing email
    When I should not be able to create user with missing email

  Scenario: Validate replace the whole content with empty object
    When I should replace the whole content with empty object

 Scenario: Validate replace the whole content with new user
    When I should replace the whole content with new user