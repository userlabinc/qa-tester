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
    cy.get(variables.menuCreditRulesList)
      .should("be.visible")
      .click();
    cy.get(variables.CRLname).should("be.visible");
  });

  it("Prueba Campus", function() {
    cy.get(variables.menuCreditRulesList)
      .should("be.visible")
      .click();
    cy.get(variables.CRLcampus).should("be.visible");
  });

  it("Prueba Table Sorter > ID", function() {
    cy.get(variables.menuCreditRulesList)
      .should("be.visible")
      .click();
    cy.get(variables.CRLidTable).should("be.visible");
  });

  it("Prueba Table Sorter > Name", function() {
    cy.get(variables.menuCreditRulesList)
      .should("be.visible")
      .click();
    cy.get(variables.CRLnameTable).should("be.visible");
  });

  it("Prueba Table Sorter > Campus", function() {
    cy.get(variables.menuCreditRulesList)
      .should("be.visible")
      .click();
    cy.get(variables.CRLcampusTable).should("be.visible");
  });

  it("Prueba Table Sorter > All Teams", function() {
    cy.get(variables.menuCreditRulesList)
      .should("be.visible")
      .click();
    cy.get(variables.CRLallTeamsTable).should("be.visible");
  });

  it("Prueba Table Sorter > Is Active", function() {
    cy.get(variables.menuCreditRulesList)
      .should("be.visible")
      .click();
    cy.get(variables.CRLisActiveTable).should("be.visible");
  });

  it("Prueba Table Sorter > Credit Type", function() {
    cy.get(variables.menuCreditRulesList)
      .should("be.visible")
      .click();
    cy.get(variables.CRLcreditTypeTable).should("be.visible");
  });

  it("Prueba Actions > View", function() {
    cy.get(variables.menuCreditRulesList)
      .should("be.visible")
      .click();
    cy.get(variables.CRLview).should("be.visible");
  });

  it("Prueba Actions > Edit", function() {
    cy.get(variables.menuCreditRulesList)
      .should("be.visible")
      .click();
    cy.get(variables.CRLedit).should("be.visible");
  });

  it("Prueba Actions > Duplicate", function() {
    cy.get(variables.menuCreditRulesList)
      .should("be.visible")
      .click();
    cy.get(variables.CRLduplicate).should("be.visible");
  });

  it("Prueba Actions > Activate / Inactivate", function() {
    cy.get(variables.menuCreditRulesList)
      .should("be.visible")
      .click();
    cy.get(variables.CRLactivate).should("be.visible");
  });

  it("Prueba Page Number", function() {
    cy.get(variables.menuCreditRulesList)
      .should("be.visible")
      .click();
    cy.get(variables.CRLpageNumberGroup).should("be.visible");
  });
}); // fin describe
