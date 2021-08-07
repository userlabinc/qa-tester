// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// support/commands.js

Cypress.Commands.add("login", () => {
  cy.visit("https://admin-qa.moocho.com/");
  cy.get("#username").type("jose.gonzalez@userlab.co");
  cy.get("#password").type("KHlm996@@ap");
  cy.get(".login-form-button").click();
});

//AthleteFirstLevel
Cypress.Commands.add("AthleteFirstLevel", () => {
  cy.get(".ant-layout-sider-children", { timeout: 8000 }).should("be.visible");
  cy.get(".ant-menu-dark > :nth-child(3) > .ant-menu-submenu-title").click();
});
