/// <reference types="Cypress"/>
import * as variables from "../../fixtures/constants";

describe("Pruebas de primer nivel para seccion ATHLETES", function() {
  function getDataItem() {
    return { by_user: "#addBy > :nth-child(1)" };
  }

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
    cy.get(variables.athleteAdd)
      .should("be.visible")
      .click();
    //cy.get(variables.by_user).should("be.visible");
    //cy.get(variables.by_email).should("be.visible");
    let dataItem = getDataItem();
    //dataItem = JSON.parse(dataItem);
    cy.get(dataItem).should("be.visible");
  });

  /*it("Prueba User ID", function() {
    cy.get(variables.athleteAdd)
      .should("be.visible")
      .click();
    cy.get(variables.input).should("be.visible");
  });

  it("Prueba Campus", function() {
    cy.get(variables.athleteAdd)
      .should("be.visible")
      .click();
    cy.get(variables.ath_campus).should("be.visible");
  });

  it("Prueba Is Restricted", function() {
    cy.get(variables.athleteAdd)
      .should("be.visible")
      .click();
    cy.get(variables.isRestricted).should("be.visible");
  });

  it("Prueba Restricted Until", function() {
    cy.get(variables.athleteAdd)
      .should("be.visible")
      .click();
    cy.get(variables.isRestricted).click({ force: true });
    cy.get(variables.restrictedUntil).should("be.visible");
  });

  it("Prueba Restricted After", function() {
    cy.get(variables.athleteAdd)
      .should("be.visible")
      .click();
    cy.get(variables.isRestricted).click({ force: true });
    cy.get(variables.restrictedAfter).should("be.visible");
  });

  it("Prueba boton Add Athlete", function() {
    cy.get(variables.athleteAdd)
      .should("be.visible")
      .click();
    cy.get(variables.addButton).should("be.visible");
  });

  it("Prueba boton Cancel", function() {
    cy.get(variables.athleteAdd)
      .should("be.visible")
      .click();
    cy.get(variables.cancelButton).should("be.visible");
  });*/
}); // fin describe
