describe("template spec", () => {
  it("Testing landingpage and check for paragraphs", () => {
    cy.visit("http://localhost:5173/");
    cy.get("p").should("contain", "Random");
    cy.get("p").should("contain", "Add");
  });
});
