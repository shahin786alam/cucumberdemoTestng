Feature: Free CRM Login Feature

#with Examples Keyword: multipule data pass at a time
Scenario Outline: Free CRM Login Test Scenario
Given User is already on Login page
When title of login page is Free CRM
Then user enter "<username>" and "<password>"
Then user click on login button
Then user is on home page
And close the browser

Examples:
  | username  | password  |
  |khamerbari |shahin786  |
  |khamerbari |shahin786  |