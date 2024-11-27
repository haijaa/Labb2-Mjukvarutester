import App from "../../src/App";

describe("<App />", () => {
    it('Accessing my database with magazines, setting fixture to my test.json', () => {
        cy.intercept(
            {
                method: 'GET',
                url: "http://localhost:3000/api/magazines"
            },
            {
                fixture: 'test.json'
            },  
        ).as('allComics')

    cy.mount(<App />);

    cy.wait('@allComics')

    cy.get('#titleelement').should('contain', 'Antons tidning')
  });
});
