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
    cy.get(variables.menuTeamsList)
      .should("be.visible")
      .click();
    cy.get(variables.TLname).should("be.visible");
  });

  it("Prueba Actions > Edit", function() {
    cy.get(variables.menuTeamsList)
      .should("be.visible")
      .click();
    cy.get(variables.TLedit).should("be.visible");
  });

  it("Prueba Actions > Delete", function() {
    cy.get(variables.menuTeamsList)
      .should("be.visible")
      .click();
    cy.get(variables.TLdelete).should("be.visible");
  });

  it("Prueba Page #", function() {
    cy.get(variables.menuTeamsList)
      .should("be.visible")
      .click();
    cy.get(variables.TLpageNumberGroup).should("be.visible");
  });
}); // fin describe
