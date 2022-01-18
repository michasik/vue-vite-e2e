import { Given, Then } from "cypress-cucumber-preprocessor/steps";

Given("i open {string} page", (url) => {
  cy.visit(url);
});

Then("i should see {int} items", (qty) => {
  cy.the("to-do-list").children().should("have.length", qty);
});

Then("i add new item called {string}", (name) => {
  cy.get("input").type(`${name}{enter}`);
});

Then("new item should contain {string}", (name) => {
  cy.the("to-do-list").children().first().should("contain.text", name);
});

Then("i click on {string} button", (label) => {
  cy.get("button").contains(label).click();
});
