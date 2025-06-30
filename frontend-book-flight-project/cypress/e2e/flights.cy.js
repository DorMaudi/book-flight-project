describe('Quick Flight E2E', () => {
  const baseUrl = 'http://localhost:5173' || Cypress.env('VITE_URL');

  it('loads the homepage and shows the title', () => {
    cy.visit(baseUrl);
    cy.contains("Quick Flight's").should('be.visible');
  });

  it('shows a list of flights', () => {
    cy.visit(baseUrl);
    cy.get('.flight-card').should('have.length.greaterThan', 0);
  });

  it('can filter flights by destination', () => {
    cy.visit(baseUrl);
    cy.get('.flight-card').then(cards => {
      if (cards.length > 0) {
        const destination = cards[0].querySelector('.flight-route').textContent.split('→')[1].trim();
        cy.get('input[placeholder="Destination"]').type(destination);
        cy.get('.flight-card').each(card => {
          cy.wrap(card).contains(destination);
        });
      }
    });
  });

  it('can open and close the reservation modal', () => {
    cy.visit(baseUrl);
    cy.get('.flight-card').first().click();
    cy.get('.reservation-modal').should('be.visible');
    cy.get('.modal-close').click();
    cy.get('.reservation-modal').should('not.exist');
  });
});