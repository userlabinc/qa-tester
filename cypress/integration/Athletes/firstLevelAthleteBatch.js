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

  it("Prueba Template File", function() {
    cy.get(variables.menuAthleteBatch)
      .should("be.visible")
      .click();
    cy.get(variables.ABDownload).should("be.visible");
  });

  it("Prueba Campus", function() {
    cy.get(variables.menuAthleteBatch)
      .should("be.visible")
      .click();
    cy.get(variables.ABCampus).should("be.visible");
  });

  it("Prueba Team", function() {
    cy.get(variables.menuAthleteBatch)
      .should("be.visible")
      .click();
    cy.get(variables.ABTeam).should("be.visible");
  });

  it("Prueba isRestricted", function() {
    cy.get(variables.menuAthleteBatch)
      .should("be.visible")
      .click();
    cy.get(variables.isRestricted).should("be.visible");
  });

  it("Prueba Restricted Until", function() {
    cy.get(variables.menuAthleteBatch)
      .should("be.visible")
      .click();
    cy.get(variables.isRestricted).click({ force: true });
    cy.get(variables.restrictedUntil).should("be.visible");
  });

  it("Prueba Restricted After", function() {
    cy.get(variables.menuAthleteBatch)
      .should("be.visible")
      .click();
    cy.get(variables.isRestricted).click({ force: true });
    cy.get(variables.restrictedAfter).should("be.visible");
  });

  it("Prueba Batch Type 1", function() {
    cy.get(variables.menuAthleteBatch)
      .should("be.visible")
      .click();
    cy.get(variables.batchType1).should("be.visible");
  });

  it("Prueba Batch Type 2", function() {
    cy.get(variables.menuAthleteBatch)
      .should("be.visible")
      .click();
    cy.get(variables.batchType2).should("be.visible");
  });

  it("Prueba Batch Type 3", function() {
    cy.get(variables.menuAthleteBatch)
      .should("be.visible")
      .click();
    cy.get(variables.batchType3).should("be.visible");
  });

  it("Prueba Batch Type 4", function() {
    cy.get(variables.menuAthleteBatch)
      .should("be.visible")
      .click();
    cy.get(variables.batchType4).should("be.visible");
  });

  it("Prueba Batch Type 5", function() {
    cy.get(variables.menuAthleteBatch)
      .should("be.visible")
      .click();
    cy.get(variables.batchType5).should("be.visible");
  });

  it("Prueba Warning", function() {
    cy.get(variables.menuAthleteBatch)
      .should("be.visible")
      .click();
    cy.get(variables.ABwarningMsg).should("be.visible");
  });

  it("Prueba upload File", function() {
    cy.get(variables.menuAthleteBatch)
      .should("be.visible")
      .click();
    cy.get(variables.ABUpload).should("be.visible");
  });

  it("Prueba cancel button", function() {
    cy.get(variables.menuAthleteBatch)
      .should("be.visible")
      .click();
    cy.get(variables.ABCancel).should("be.visible");
  });

  it("Prueba Add Athlete button", function() {
    cy.get(variables.menuAthleteBatch)
      .should("be.visible")
      .click();
    cy.get(variables.ABaddAthlete).should("be.visible");
  });
}); // fin describe
