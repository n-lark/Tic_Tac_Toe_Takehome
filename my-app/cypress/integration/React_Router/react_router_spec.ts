describe("Routes in URL path update as expected", () => {
  it("User clicks play game, directed to game", () => {
    cy.visit("localhost:3000");
    cy.startGame();
    cy.url().should("deep.equal", "http://localhost:3000/Game");
  });

  it("User visits invalid URL, directed to error page", () => {
    cy.visit("http://localhost:3000/notARealRoute");
    cy.get(`[data-cy="error-message"]`).as("errorMessage").should("exist");
    cy.get("@errorMessage").should(
      "have.text",
      "Oops! Something weird happened. Click the button below to start a new game"
    );
  });

  it("User starts game, clicks new game, directed to home page", () => {
    cy.visit("localhost:3000");
    cy.startGame();
    cy.get(`[data-cy="new-game"]`).as("newGame");
    cy.get("@newGame").click();
    cy.url().should("deep.equal", "http://localhost:3000/");
  });
});
