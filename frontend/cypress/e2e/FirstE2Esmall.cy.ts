describe("template spec", () => {
  it("Testing landingpage and check for paragraphs", () => {
    cy.visit("http://localhost:3000/");
    cy.wait(2000)
    cy.get("[data-cy=random-title]").should("contain", "Random");
    cy.get("[data-cy=modal-title]").should("contain", "Add");
  });
});
