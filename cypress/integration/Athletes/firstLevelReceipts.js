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

  it("Prueba Search By > Email", function() {
    cy.get(variables.menuReceipts)
      .should("be.visible")
      .click();
    cy.get(variables.RsearchByEmail).should("be.visible");
  });

  it("Prueba Search By > User Id", function() {
    cy.get(variables.menuReceipts)
      .should("be.visible")
      .click();
    cy.get(variables.RsearchByEmail).click();
    cy.get(variables.RsearchByUser).should("be.visible");
  });

  it("Prueba Email", function() {
    cy.get(variables.menuReceipts)
      .should("be.visible")
      .click();
    cy.get(variables.RsearchByEmail).click();
    cy.get(variables.Remail).should("be.visible");
  });

  it("Prueba User Id", function() {
    cy.get(variables.menuReceipts)
      .should("be.visible")
      .click();
    cy.get(variables.RuserID).should("be.visible");
  });

  it("Prueba First Name", function() {
    cy.get(variables.menuReceipts)
      .should("be.visible")
      .click();
    cy.get(variables.RfirstName).should("be.visible");
  });

  it("Prueba Campuses", function() {
    cy.get(variables.menuReceipts)
      .should("be.visible")
      .click();
    cy.get(variables.Rcampuses).should("be.visible");
  });

  it("Prueba Created", function() {
    cy.get(variables.menuReceipts)
      .should("be.visible")
      .click();
    cy.get(variables.Rcreated).should("be.visible");
  });

  it("Prueba Uploaded > Yes", function() {
    cy.get(variables.menuReceipts)
      .should("be.visible")
      .click();
    cy.get(variables.RuploadedYes).should("be.visible");
  });

  it("Prueba Uploaded > No", function() {
    cy.get(variables.menuReceipts)
      .should("be.visible")
      .click();
    cy.get(variables.RuploadedNo).should("be.visible");
  });

  it("Prueba Uploaded > Either", function() {
    cy.get(variables.menuReceipts)
      .should("be.visible")
      .click();
    cy.get(variables.RuploadedYes).click();
    cy.get(variables.RuploadedEither).should("be.visible");
  });

  it("Prueba Invoice", function() {
    cy.get(variables.menuReceipts)
      .should("be.visible")
      .click();
    cy.get(variables.Rinvoice).should("be.visible");
  });

  it("Prueba Last Name", function() {
    cy.get(variables.menuReceipts)
      .should("be.visible")
      .click();
    cy.get(variables.RlastName).should("be.visible");
  });

  it("Prueba Teams", function() {
    cy.get(variables.menuReceipts)
      .should("be.visible")
      .click();
    cy.get(variables.Rteams).should("be.visible");
  });

  it("Prueba boton Search", function() {
    cy.get(variables.menuReceipts)
      .should("be.visible")
      .click();
    cy.get(variables.RbtnSearch).should("be.visible");
  });
}); // fin describe
