Feature: Playwright demo tests

        To run demo tests with playwright library
@demo
  Scenario: Verify product home page
    Given I am on 'PRODUCT STORE' page
    When I click categories link
    Then I see 'Phones', 'Laptops' and 'Monitors' under categories
