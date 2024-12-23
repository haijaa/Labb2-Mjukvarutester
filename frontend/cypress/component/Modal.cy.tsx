import Modal from "../../src/Components/Modal";

describe("<Modal />", () => {
  it("Mounts Modal component and clicks button", () => {
    cy.mount(<Modal />);
    cy.get("#openmodal").click();
    cy.get("#inputtitle").type("Random tidning");
    cy.get("#inputimage").type("Random image");
    cy.get('#inputimage').should('have.value', 'Random image')
    cy.get("#inputdesc").type("Random description");
    cy.get("#inputchar").type("Random char");
    cy.get('select').select('2').contains('DC')
    cy.get('#closebutton').click()
  });
});
