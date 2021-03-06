@establishing
Feature: Establishing steps

Steps that establish things about the state of the test
# In tag names, 'e' is for 'establishing'

@slow @e1
Scenario: I am able to set a custom wait time that allows steps to run longer than the half minute default
  Given I start the interview at "all_tests"
  And the max seconds for each step in this scenario is 40
  And I wait 35 seconds

@slow @e2
Scenario: I am able to set a custom wait time before an interview has been loaded
  Given the max seconds for each step in this scenario is 40
  And I start the interview at "all_tests"
  And I wait 35 seconds
