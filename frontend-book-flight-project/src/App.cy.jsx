import React from 'react';
import App from './App';
import { mount } from 'cypress/react';

describe('App component', () => {
  it('renders a list of flights from API', () => {
    const flights = [
      {
        flightNumber: 'QA123',
        origin: 'London',
        destination: 'Paris',
        price: 150,
        departureTime: '2024-01-01T10:00:00Z',
        arrivalTime: '2024-01-01T12:00:00Z',
        airline: 'Test Air',
        available_seats: 5,
      },
      {
        flightNumber: 'QA456',
        origin: 'New York',
        destination: 'Tokyo',
        price: 900,
        departureTime: '2024-02-01T10:00:00Z',
        arrivalTime: '2024-02-02T01:00:00Z',
        airline: 'Test Air',
        available_seats: 3,
      },
    ];

    cy.intercept('GET', '**/flights', { body: flights }).as('getFlights');
    mount(<App />);
    cy.wait('@getFlights');
    cy.get('.flight-card').should('have.length', 2);
    cy.contains('QA123');
    cy.contains('QA456');
  });
});