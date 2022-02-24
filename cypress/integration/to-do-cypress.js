describe("The to do app", () => {
    beforeEach(() => {
      cy.visit("/");
    });

    it("should FAIL", () => {
      cy.the("to-do-list").children().should("have.length", 0);
    });
  
    it("shows two initial items in the list", () => {
      cy.the("to-do-list").children().should("have.length", 2);
    });
  
    it("should add a new item", () => {
      cy.get("input").type("new item{enter}");
      cy.the("to-do-list").children().should("have.length", 3);
      cy.the("to-do-list").children().first().should("contain.text", "new item");
    });
  
    it("should delete all items", () => {
      cy.get("section > .bg-delete").click();
      cy.the("to-do-list").children().should("have.length", 0);
    });
  
    it("should delete first item", () => {
      cy.the("to-do-list").children().first().find(".bg-delete").click();
      cy.the("to-do-list").children().should("have.length", 1);
    });
  
    it("should toggle item state", () => {
      cy.the("to-do-list")
        .children()
        .first()
        .find("[data-testid=toggle-button]")
        .should("contain.text", "🔙");
      cy.the("to-do-list")
        .children()
        .first()
        .find("[data-testid=toggle-button]")
        .click();
      cy.the("to-do-list")
        .children()
        .first()
        .find("[data-testid=toggle-button]")
        .should("contain.text", "🍻");
    });
  
    it("should set all items as done", () => {
      cy.get("[data-testid=all-done-button]").click();
      cy.the("to-do-list")
        .children()
        .find("span")
        .should("contain.class", "done");
    });
  });
  