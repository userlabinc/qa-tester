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

  it("Prueba User Id", function() {
    cy.get(variables.menuAthleteList)
      .should("be.visible")
      .click();
    cy.get(variables.ALuser).should("be.visible");
  });

  it("Prueba Campus", function() {
    cy.get(variables.menuAthleteList)
      .should("be.visible")
      .click();
    cy.get(variables.ALcampus).should("be.visible");
  });

  it("Prueba Team", function() {
    cy.get(variables.menuAthleteList)
      .should("be.visible")
      .click();
    cy.get(variables.ALteam).should("be.visible");
  });

  it("Prueba Email, First & Last Name", function() {
    cy.get(variables.menuAthleteList)
      .should("be.visible")
      .click();
    cy.get(variables.ALotherOptions).should("be.visible");
  });

  it("Prueba Actions > View", function() {
    cy.get(variables.menuAthleteList)
      .should("be.visible")
      .click();
    cy.get(variables.ALview).should("be.visible");
  });

  it("Prueba Actions > Edit", function() {
    cy.get(variables.menuAthleteList)
      .should("be.visible")
      .click();
    cy.get(variables.ALedit).should("be.visible");
  });

  it("Prueba Actions > Delete", function() {
    cy.get(variables.menuAthleteList)
      .should("be.visible")
      .click();
    cy.get(variables.ALdelete).should("be.visible");
  });

  it("Prueba Page Number", function() {
    cy.get(variables.menuAthleteList)
      .should("be.visible")
      .click();
    cy.get(variables.ALpageNumberGroup).should("be.visible");
  });
}); // fin describe
