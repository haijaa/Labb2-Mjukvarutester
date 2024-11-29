describe("Full test database -> backend -> frontend", () => {
  it("See first landing page and visit site.", () => {
    cy.visit("http://localhost:5173/");
    cy.get('#titleelement').invoke('text').then((titleBeforeClick) => {
      cy.log('Before: ', titleBeforeClick)
      cy.get('#randommagazine').click()
    cy.get('#titleelement').invoke('text').then((titleAfterClick) => {
      cy.log('After: ', titleAfterClick)
      expect(titleBeforeClick).not.to.be.equal(titleAfterClick)
    })
  })
  });
});
