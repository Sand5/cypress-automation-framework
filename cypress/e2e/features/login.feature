@regression @login
Feature: Login Portal Access
  Background: Naviate to the Login Portal page
    Given I access the WebdriverUniversity Login Portal page

  Scenario Outline: Test Login via WebdriverUniversity Login Portal
    When I enter a username '<username>'
    And I enter a password '<password>'
    And I click on the login button
    Then I should be presented with the following message '<message>'
    Examples:
      | username  | password     | message              |
      | webdriver | webdriver123 | validation succeeded |
      | webdriver | webdriver555 | validation failed    |
      | testuser  | testpass     | validation failed    |