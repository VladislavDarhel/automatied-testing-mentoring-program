@smoke
Feature: Arctic Monkeys Wiki

@wiki
Scenario: Search and open Arctic Monkeys Page
  Given I open "https://en.wikipedia.org/wiki/Main_Page" url
  Then Page title should be "Wikipedia, the free encyclopedia"
    And Page title should not be "any title"
  When I search for "Arctic Monkeys"
    And I wait "3" seconds
  Then Page title should be "Arctic Monkeys - Wikipedia"

@so
Scenario Outline: Open a member page from list of members
  Given I open "<URL>" url
  When I wait "3" seconds
  When I click on "<Member>" member
  Then Page title should be "<PageTitle>"

Examples:
| URL | Member | PageTitle |
| https://en.wikipedia.org/wiki/Arctic_Monkeys  | Alex Turner | Alex Turner - Wikipedia |
| https://en.wikipedia.org/wiki/Arctic_Monkeys  | Jamie Cook  | Jamie Cook - Wikipedia  |