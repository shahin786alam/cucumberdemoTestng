$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/login/feature/login.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Login Feature",
  "description": "",
  "id": "free-crm-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "#with Examples Keyword: multipule data pass at a time"
    }
  ],
  "line": 4,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is already on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 13,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;1"
    },
    {
      "cells": [
        "khamerbari",
        "shahin786"
      ],
      "line": 14,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;2"
    },
    {
      "cells": [
        "khamerbari",
        "shahin786"
      ],
      "line": 15,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is already on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enter \"khamerbari\" and \"shahin786\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepdefinitions.user_is_already_on_Login_page()"
});
formatter.result({
  "duration": 14832450400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefinitions.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 11902400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "khamerbari",
      "offset": 12
    },
    {
      "val": "shahin786",
      "offset": 29
    }
  ],
  "location": "LoginStepdefinitions.user_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 224913900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefinitions.user_click_on_login_button()"
});
formatter.result({
  "duration": 2785478000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefinitions.user_is_on_home_page()"
});
formatter.result({
  "duration": 5046900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefinitions.close_the_browser()"
});
formatter.result({
  "duration": 684046900,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is already on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enter \"khamerbari\" and \"shahin786\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepdefinitions.user_is_already_on_Login_page()"
});
formatter.result({
  "duration": 12850051800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefinitions.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 5442700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "khamerbari",
      "offset": 12
    },
    {
      "val": "shahin786",
      "offset": 29
    }
  ],
  "location": "LoginStepdefinitions.user_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 162456400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefinitions.user_click_on_login_button()"
});
formatter.result({
  "duration": 2836242200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefinitions.user_is_on_home_page()"
});
formatter.result({
  "duration": 6217700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefinitions.close_the_browser()"
});
formatter.result({
  "duration": 721917500,
  "status": "passed"
});
});