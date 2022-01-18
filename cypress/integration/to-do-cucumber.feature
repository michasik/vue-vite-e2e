Feature: To-do app
    Scenario: initializes properly
        Given i open "/" page
        Then i should see 2 items

    Scenario: should add a new item
      Given i open "/" page
      When i add new item called "new item"
      Then i should see 3 items
      And new item should contain "new item"

    Scenario: should delete all items
        Given i open "/" page
        When i click on "delete all" button
        Then i should see 0 items
        
