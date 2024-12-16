describe("template spec", () => {
  it("Testing landingpage and check for paragraphs", () => {
    cy.visit("/");
    cy.wait(2000)
    cy.get("[data-cy=random-title]").should("contain", "Random");
    cy.get("[data-cy=modal-title]").should("contain", "Add");
  });
});
