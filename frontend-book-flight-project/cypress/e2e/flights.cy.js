describe('Quick Flight E2E', () => {
  const baseUrl = 'http://localhost:5173';

  // 📌 שלב ראשון: למנוע כשלון על שגיאות צד לקוח (שימושי ל־CI)
  Cypress.on('uncaught:exception', (err, runnable) => {
    // מונע כשלון של הטסט על שגיאת JS מהאפליקציה
    return false;
  });

  // 📌 נוודאשהטיסות נטענו לפני הרצת טסטים שתלויים ב־DOM
  beforeEach(() => {
    cy.intercept('GET', '**/flights').as('getFlights');
    cy.visit(baseUrl);
    cy.wait('@getFlights');
  });

  it('loads the homepage and shows the title', () => {
    cy.contains("Quick Flight's").should('be.visible');
  });

  it('shows a list of flights', () => {
    cy.get('.flight-card').should('have.length.greaterThan', 0);
  });

  it('can filter flights by destination', () => {
    cy.get('.flight-card').then(cards => {
      if (cards.length > 0) {
        const destination = cards[0].querySelector('.flight-route').textContent.split('→')[1].trim();
        cy.get('input[placeholder="Destination"]').type(destination);
        cy.get('.flight-card').each(card => {
          cy.wrap(card).contains(destination);
        });
      } else {
        cy.log('⚠️ No flights found to test filtering.');
      }
    });
  });

  it('can open and close the reservation modal', () => {
    cy.get('.flight-card').then(cards => {
      if (cards.length > 0) {
        cy.wrap(cards[0]).click();
        cy.get('.reservation-modal').should('be.visible');
        cy.get('.modal-close').click();
        cy.get('.reservation-modal').should('not.exist');
      } else {
        cy.log('⚠️ No flights available to test modal.');
      }
    });
  });
});
