describe("login process", () => {
  beforeEach(() => {
    
    cy.visit("/");
  });
  
  it("Open the main page", () => {
    cy.login("bropet@mail.ru", "123");
    cy.contains("Добро пожаловать bropet@mail.ru").should("be.visible");
  });
  
  it("Should not login with empty login", () => {
    cy.login(" ", "123");
    cy.get("#mail")
      .then(($el) => $el[0].checkValidity())
      .should("be.false");
  });
  
  it("Should not login with empty password", () => {
    cy.loginEmptyPass("bropet@mail.ru", "");
    cy.get("#pass")
      .then(($el) => $el[0].checkValidity())
      .should("be.false");
  });
  
  it("Should log out", () => {
    cy.login("bropet@mail.ru", "123");
    cy.contains("Добро пожаловать bropet@mail.ru").should("be.visible");
    cy.contains("Log out").click();
    cy.contains("Log in").should("be.visible");
  });
  })