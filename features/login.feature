Feature: Login on W3schools

        To perform the login
@demo
  Scenario:Login successful
    Given I am on "login" page
    When I log as "users"
    Then I am on pathfinder page
