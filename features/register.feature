@Register
Feature:User Registration

  Background:
    Given I am on the register page

  @Success
  Scenario: User Register with valid credentials
    When I fullfilled the form with the informations below
      | email            | password   |
      | test9@yopmail.com | W3schools! |
    And I validate the register form
    And I fill out the form with the following user information
      | firstname | lastname |
      | testboard     | testing  |
    Then I receive an confirmation message


  @Failure
  Scenario Outline: User Resgiter with wrong credentials
    When I fullfilled the form with the informations below
      | email   | mot_de_passe |
      | <email> | <password>   |
    And I validate the register form
    Then I should receive an error message <error_msg>

    Examples:
      | email            | password |error_msg|
      | bob@example.com  | 123456   |io       |
      | carol@example    | 123456   |io       |

