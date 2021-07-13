/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    startGame(): Chainable<Element>;
  }
}

Cypress.Commands.add("startGame", () => {
  cy.get(`[data-cy="start-game"]`).as("startGame");
  cy.get("@startGame").click();
});
