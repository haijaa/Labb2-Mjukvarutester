describe("Full test database -> backend -> frontend", () => {
  it("Starting by visit landingapge. Locating title and random mag button. Comparing title before clicking and after to see that if the title changes. Then proceeds to open modal entering all fields and adding magazine to see that frontend, backend and database can work correctly.", () => {
    cy.visit("http://localhost:5173/");
    cy.get('#titleelement').invoke('text').then((titleBeforeClick) => {
      cy.log('Before: ', titleBeforeClick)
      cy.get('#randommagazine').click()
    cy.get('#titleelement').invoke('text').then((titleAfterClick) => {
      cy.log('After: ', titleAfterClick)
      expect(titleBeforeClick).not.to.be.equal(titleAfterClick)
      cy.get('#openmodal').click()
    cy.get("#inputtitle").type("JUSTICE LEAGUE UNLIMITED #1");
    cy.get('#inputtitle').should('have.value', 'JUSTICE LEAGUE UNLIMITED #1')
    cy.get("#inputimage").type("https://static.dc.com/2024-11/JLU_Cv1_00111_DIGITAL.jpg?w=640");
    cy.get("#inputdesc").type("The Watchtower rises! The Justice League is back and bigger than ever! In the wake of Absolute Power and the DC All In Special, Darkseid’s death has triggered a massive power vacuum in the DCU, and Superman, Batman, and Wonder Woman must unite like never before and expand the Justice League to encompass every hero championing the forces of good in the face of incredible evil! As our heroes work to uncover the mystery of the dark lord’s successor, Ray Palmer’s Atom Project triggers a race between hero and villain to control the fate of metahuman abilities on planet Earth, which threatens to destroy everything the League has built. Worlds will live, worlds will die, and a surprise is waiting in store on the last page…Do not miss the dawn of the new era of justice—it all begins here!");
    cy.get("#inputchar").type("Justice League");
    cy.get('select').select('2').contains('DC')
    cy.get('#addbutton').click()
    })
  })
  })
});
