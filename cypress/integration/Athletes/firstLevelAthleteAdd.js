/// <reference types="Cypress"/>
import * as variables from "../../fixtures/constants";

describe("Pruebas de primer nivel para seccion ATHLETES", function() {
  /*function getDataItem() {
    return { by_user: "#addBy > :nth-child(1)" };
  }*/

  beforeEach(function() {
    cy.fixture("data-moocho").then(function(datos) {
      this.datos = datos;
    });
  });

  beforeEach(() => {
    cy.login();
    cy.AthleteFirstLevel();
  });

  it("Prueba Add By", function() {
    cy.get(variables.menuAthleteAdd)
      .should("be.visible")
      .click();
    cy.get(variables.AAaddByUser).should("be.visible");
    cy.get(variables.AAaddByUser).click();
    cy.get(variables.AAaddByEmail).should("be.visible");
    //let dataItem = getDataItem();
    //dataItem = JSON.parse(dataItem);
    //cy.get(dataItem).should("be.visible");
  });

  it("Prueba User ID", function() {
    cy.get(variables.menuAthleteAdd)
      .should("be.visible")
      .click();
    cy.get(variables.AAuser).should("be.visible");
  });

  it("Prueba Email", function() {
    cy.get(variables.menuAthleteAdd)
      .should("be.visible")
      .click();
    cy.get(variables.AAaddByEmail).click();
    cy.get(variables.AAemail).should("be.visible");
  });

  it("Prueba Campus", function() {
    cy.get(variables.menuAthleteAdd)
      .should("be.visible")
      .click();
    cy.get(variables.AAcampus).should("be.visible");
  });

  it("Prueba Is Restricted", function() {
    cy.get(variables.menuAthleteAdd)
      .should("be.visible")
      .click();
    cy.get(variables.AAisRestricted).should("be.visible");
  });

  it("Prueba Restricted Until", function() {
    cy.get(variables.menuAthleteAdd)
      .should("be.visible")
      .click();
    cy.get(variables.AAisRestricted).click({ force: true });
    cy.get(variables.AArestrictedUntil).should("be.visible");
  });

  it("Prueba Restricted After", function() {
    cy.get(variables.menuAthleteAdd)
      .should("be.visible")
      .click();
    cy.get(variables.AAisRestricted).click({ force: true });
    cy.get(variables.AArestrictedAfter).should("be.visible");
  });

  it("Prueba boton Add Athlete", function() {
    cy.get(variables.menuAthleteAdd)
      .should("be.visible")
      .click();
    cy.get(variables.AAaddButton).should("be.visible");
  });

  it("Prueba boton Cancel", function() {
    cy.get(variables.menuAthleteAdd)
      .should("be.visible")
      .click();
    cy.get(variables.AAcancelButton).should("be.visible");
  });
}); // fin describe
