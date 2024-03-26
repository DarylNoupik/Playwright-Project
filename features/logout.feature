@logout
Feature: User Logout
  In order to protect my personal information, as a logged-in user, I want to be able to log out from the platform securely.

  Scenario: Successful Logout
    Given I am on the login page
    And I log in with valid credentials
    When I choose to logout
    Then I should be redirected to the login page
