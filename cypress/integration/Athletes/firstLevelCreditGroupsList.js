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
    cy.get(variables.menuCreditGroupsList)
      .should("be.visible")
      .click();
    cy.get(variables.CGLname).should("be.visible");
  });

  it("Prueba Campus", function() {
    cy.get(variables.menuCreditGroupsList)
      .should("be.visible")
      .click();
    cy.get(variables.CGLcampus).should("be.visible");
  });

  it("Prueba Actions > View", function() {
    cy.get(variables.menuCreditGroupsList)
      .should("be.visible")
      .click();
    cy.get(variables.CGLview).should("be.visible");
  });

  it("Prueba Actions > Edit", function() {
    cy.get(variables.menuCreditGroupsList)
      .should("be.visible")
      .click();
    cy.get(variables.CGLedit).should("be.visible");
  });

  it("Prueba Actions > Team Membership", function() {
    cy.get(variables.menuCreditGroupsList)
      .should("be.visible")
      .click();
    cy.get(variables.CGLteamMembership).should("be.visible");
  });

  it("Prueba Actions > Download Team Membership", function() {
    cy.get(variables.menuCreditGroupsList)
      .should("be.visible")
      .click();
    cy.get(variables.CGLdownload).should("be.visible");
  });
}); // fin describe
