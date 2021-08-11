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

  it("Prueba Name", function() {
    cy.get(variables.menuTeamAdd)
      .should("be.visible")
      .click();
    cy.get(variables.TAname).should("be.visible");
  });

  it("Prueba Team Add", function() {
    cy.get(variables.menuTeamAdd)
      .should("be.visible")
      .click();
    cy.get(variables.TAaddTag).should("be.visible");
  });

  it("Prueba Cancel", function() {
    cy.get(variables.menuTeamAdd)
      .should("be.visible")
      .click();
    cy.get(variables.TAcancel).should("be.visible");
  });
}); // fin describe
