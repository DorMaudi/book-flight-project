import React from 'react';
import App from './App';
import { mount } from 'cypress/react';

describe('App component', () => {
  it('renders a list of flights from API', () => {
    const flights = [
      {
        flight_number: 'QA123',
        origin: 'London',
        destination: 'Paris',
        price: 150,
        departure_time: '2024-01-01T10:00:00Z',
        arrival_time: '2024-01-01T12:00:00Z',
        flight_company: 'Test Air',
        available_seats: 5,
      },
      {
        flight_number: 'QA456',
        origin: 'New York',
        destination: 'Tokyo',
        price: 900,
        departure_time: '2024-02-01T10:00:00Z',
        arrival_time: '2024-02-02T01:00:00Z',
        flight_company: 'Test Air',
        available_seats: 3,
      },
    ];

    cy.intercept('GET', '**/flights', {
      statusCode: 200,
      body: flights,
    }).as('getFlights');

    mount(<App />);
    cy.wait('@getFlights');
    cy.get('.flight-card').should('have.length', 2);
    cy.contains('QA123');
    cy.contains('QA456');
  });
});
