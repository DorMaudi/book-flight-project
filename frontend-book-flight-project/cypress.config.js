import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://book-flight-project.onrender.com'
,
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: false
  }
});