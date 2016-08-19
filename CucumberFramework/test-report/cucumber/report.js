$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/DemoSprint/LoginScenario.feature");
formatter.feature({
  "id": "as-a-user-i-can-login-to-its-portal-with-valid-credentials-so-that-only-authorized-user-have",
  "description": "access to my resources.",
  "name": "As a user I can login to ITS portal with valid credentials so that only authorized user have",
  "keyword": "Feature",
  "line": 1
});
formatter.scenarioOutline({
  "id": "as-a-user-i-can-login-to-its-portal-with-valid-credentials-so-that-only-authorized-user-have;verify-authorized-login",
  "tags": [
    {
      "name": "@SmokeTest",
      "line": 4
    }
  ],
  "description": "",
  "name": "Verify authorized login",
  "keyword": "Scenario Outline",
  "line": 5,
  "type": "scenario_outline"
});
formatter.step({
  "name": "User can navigate to ITS Portal",
  "keyword": "Given ",
  "line": 7
});
formatter.step({
  "name": "Enter Login credentials \"\u003cEmailId\u003e\" and  \"\u003cPassword\u003e\"",
  "keyword": "When ",
  "line": 8
});
formatter.step({
  "name": "Verify user is login to ITS portal",
  "keyword": "Then ",
  "line": 9
});
formatter.step({
  "name": "Dashboard is displayed by default",
  "keyword": "And ",
  "line": 10
});
formatter.step({
  "name": "Verify user is able to logout",
  "keyword": "And ",
  "line": 11
});
formatter.step({
  "name": "Update Result to TestRail \"\u003cTestCaseId\u003e\"",
  "keyword": "And ",
  "line": 12
});
formatter.examples({
  "id": "as-a-user-i-can-login-to-its-portal-with-valid-credentials-so-that-only-authorized-user-have;verify-authorized-login;",
  "description": "",
  "name": "",
  "keyword": "Examples",
  "line": 13,
  "rows": [
    {
      "id": "as-a-user-i-can-login-to-its-portal-with-valid-credentials-so-that-only-authorized-user-have;verify-authorized-login;;1",
      "cells": [
        "EmailId",
        "Password",
        "TestCaseId",
        "SheetName"
      ],
      "line": 14
    },
    {
      "id": "as-a-user-i-can-login-to-its-portal-with-valid-credentials-so-that-only-authorized-user-have;verify-authorized-login;;2",
      "cells": [
        "automationBDD@continuum.net",
        "Abc@12345",
        "12345",
        "fasf"
      ],
      "line": 15
    }
  ]
});
formatter.scenario({
  "id": "as-a-user-i-can-login-to-its-portal-with-valid-credentials-so-that-only-authorized-user-have;verify-authorized-login;;2",
  "tags": [
    {
      "name": "@SmokeTest",
      "line": 4
    }
  ],
  "description": "",
  "name": "Verify authorized login",
  "keyword": "Scenario Outline",
  "line": 15,
  "type": "scenario"
});
formatter.step({
  "name": "User can navigate to ITS Portal",
  "keyword": "Given ",
  "line": 7
});
formatter.step({
  "name": "Enter Login credentials \"automationBDD@continuum.net\" and  \"Abc@12345\"",
  "keyword": "When ",
  "line": 8,
  "matchedColumns": [
    0,
    1
  ]
});
formatter.step({
  "name": "Verify user is login to ITS portal",
  "keyword": "Then ",
  "line": 9
});
formatter.step({
  "name": "Dashboard is displayed by default",
  "keyword": "And ",
  "line": 10
});
formatter.step({
  "name": "Verify user is able to logout",
  "keyword": "And ",
  "line": 11
});
formatter.step({
  "name": "Update Result to TestRail \"12345\"",
  "keyword": "And ",
  "line": 12,
  "matchedColumns": [
    2
  ]
});
formatter.match({
  "location": "StepDefinations.user_can_navigate_to_ITS_Portal()"
});
formatter.result({
  "duration": 134047515,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "automationBDD@continuum.net",
      "offset": 25
    },
    {
      "val": "Abc@12345",
      "offset": 60
    }
  ],
  "location": "StepDefinations.enter_Login_credentials(String,String)"
});
formatter.result({
  "duration": 26302111691,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.verify_user_is_login_to_ITS_portal()"
});
formatter.result({
  "duration": 79631761,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.dashboard_is_displayed_by_default()"
});
formatter.result({
  "duration": 31209,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.verify_user_is_able_to_logout()"
});
formatter.result({
  "duration": 2259733282,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12345",
      "offset": 27
    }
  ],
  "location": "StepDefinations.update_Result_to_TestRail(String)"
});
formatter.result({
  "duration": 87307,
  "status": "passed"
});
