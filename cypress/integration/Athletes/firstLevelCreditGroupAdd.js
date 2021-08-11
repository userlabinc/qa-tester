/// <reference types="Cypress"/>
import * as variables from "../../fixtures/constants";

describe("Pruebas de primer nivel para seccion ATHLETES", function() {
  beforeEach(function() {
    cy.fixture("data-moocho").then(function(datos) {
      this.datos = datos;
    });
  });

  beforeEach(() => {
    cy.login();
    cy.AthleteFirstLevel();
  });

  it("Prueba Campus", function() {
    cy.get(variables.menuCreditGroupAdd)
      .should("be.visible")
      .click();
    cy.get(variables.CGAcampus).should("be.visible");
  });

  it("Prueba Name", function() {
    cy.get(variables.menuCreditGroupAdd)
      .should("be.visible")
      .click();
    cy.get(variables.CGAname).should("be.visible");
  });

  it("Prueba Add Team", function() {
    cy.get(variables.menuCreditGroupAdd)
      .should("be.visible")
      .click();
    cy.get(variables.CGAaddTeam).should("be.visible");
  });

  it("Prueba Cancel", function() {
    cy.get(variables.menuCreditGroupAdd)
      .should("be.visible")
      .click();
    cy.get(variables.CGAcancel).should("be.visible");
  });
}); // fin describe
