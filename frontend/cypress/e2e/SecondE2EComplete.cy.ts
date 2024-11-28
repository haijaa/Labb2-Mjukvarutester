describe("Full test database -> backend -> frontend", () => {
  it("See first landing page and visit site.", () => {
    cy.visit("http://localhost:5173/");
    cy.get("#titleelement").contains("Wolverine Limited Series #1");
    cy.get("#previouscomic").click();
    cy.get("#titleelement").contains("LEGENDS OF THE DARK KNIGHT #11");
  });
});
