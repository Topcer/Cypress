Cypress.Commands.add("login", (login, password) => {
  cy.get("button").contains("Log in").click();
  cy.get("#mail").type(login);
  cy.get("#pass").type(password);
  cy.contains("Submit").click();
});

Cypress.Commands.add("loginEmptyPass", (login) => {
  cy.contains("Log in").click();
  cy.get("#mail").type(login);
  cy.contains("Submit").click();
});

Cypress.Commands.add("addBook", (book) => {
  cy.contains("Add new").click();
  cy.get("input#title").type(book.title);
  cy.get("input#description").type(book.description);
  cy.get("input#authors").type(book.author);
  cy.get("input#favorite").click();
  cy.contains("Submit").click();
});

Cypress.Commands.add("addBookNoFavorite", (book) => {
  cy.contains("Add new").click();
  cy.get("input#title").type(book.title);
  cy.get("input#description").type(book.description);
  cy.get("input#authors").type(book.author);
  cy.contains("Submit").click();
});

Cypress.Commands.add("removeAllFavorite", () => {
  cy.visit("/favorites");
  cy.get(".mt-3").each(() => {
    cy.get(`.card-deck a:nth-child(${1}) .btn`).click();
  });
});