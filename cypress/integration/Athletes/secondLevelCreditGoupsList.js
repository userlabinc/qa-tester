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

  it("Prueba Campus > Numeros", function() {
    cy.get(variables.menuCreditGroupsList)
      .should("be.visible")
      .click();
    cy.get(variables.CGLcampus).type(this.datos.testNumeros);
    cy.get(variables.CGLbody).click({ force: true });
    cy.get(variables.CGLcampus).should("have.value", "");
  });

  it("Prueba Campus > Texto", function() {
    cy.get(variables.menuCreditGroupsList)
      .should("be.visible")
      .click();
    cy.get(variables.CGLcampus).type(this.datos.testLetras);
    cy.get(variables.CGLbody).click({ force: true });
    cy.get(variables.CGLcampus).contains("Userlab Test University");
  });

  it("Prueba Campus > Simbolos", function() {
    cy.get(variables.menuCreditGroupsList)
      .should("be.visible")
      .click();
    cy.get(variables.CGLcampus).type(this.datos.testSimbolos);
    cy.get(variables.CGLbody).click({ force: true });
    cy.get(variables.CGLcampus).should("have.value", "");
  });

  it("Prueba Campus > Alfanumerico", function() {
    cy.get(variables.menuCreditGroupsList)
      .should("be.visible")
      .click();
    cy.get(variables.CGLcampus).type(this.datos.testAlfanumerico);
    cy.get(variables.CGLbody).click({ force: true });
    cy.get(variables.CGLcampus).should("have.value", "");
  });

  it("Prueba Name > Numeros", function() {
    cy.get(variables.menuCreditGroupsList)
      .should("be.visible")
      .click();
    cy.get(variables.CGLname)
      .type(this.datos.testNumeros)
      .should("have.value", "123456");
  });

  it("Prueba Name > Texto", function() {
    cy.get(variables.menuCreditGroupsList)
      .should("be.visible")
      .click();
    cy.get(variables.CGLname)
      .type(this.datos.testLetras)
      .should("have.value", "Test");
  });

  it("Prueba Name > Simbolos", function() {
    cy.get(variables.menuCreditGroupsList)
      .should("be.visible")
      .click();
    cy.get(variables.CGLname)
      .type(this.datos.testSimbolos)
      .should("have.value", "$#@");
  });

  it("Prueba Name > Alfanumerico", function() {
    cy.get(variables.menuCreditGroupsList)
      .should("be.visible")
      .click();
    cy.get(variables.CGLname)
      .type(this.datos.testAlfanumerico)
      .should("have.value", "A11");
  });

  it("Prueba Actions > View > Hover", function() {
    cy.get(variables.menuCreditGroupsList)
      .should("be.visible")
      .click();
    cy.get(variables.CGLview).realHover();
  });

  it("Prueba Actions > View > Abre drawer con informacion", function() {
    cy.get(variables.menuCreditGroupsList)
      .should("be.visible")
      .click();
    cy.get(variables.CGLview).click();
    cy.get(variables.CGLviewDrawer).should("be.visible");
  });

  it("Prueba Actions > Edit > Hover", function() {
    cy.get(variables.menuCreditGroupsList)
      .should("be.visible")
      .click();
    cy.get(variables.CGLedit).realHover();
  });

  it("Prueba Actions > Edit > Abre drawer con informacion", function() {
    cy.get(variables.menuCreditGroupsList)
      .should("be.visible")
      .click();
    cy.get(variables.CGLedit).click();
    cy.get(variables.CGLeditDrawer).should("be.visible");
  });

  it("Prueba Actions > Edit > Cambiar informacion de campo NAME", function() {
    cy.get(variables.menuCreditGroupsList)
      .should("be.visible")
      .click();
    cy.get(variables.CGLedit).click();
    cy.get(variables.CGLeditName).type(this.datos.testLetras);
  });

  it("Prueba Actions > Edit > Cancel button", function() {
    cy.get(variables.menuCreditGroupsList)
      .should("be.visible")
      .click();
    cy.get(variables.CGLedit).click();
    cy.get(variables.CGLeditCancel).click();
  });

  it("Prueba Actions > Edit > Save button", function() {
    cy.get(variables.menuCreditGroupsList)
      .should("be.visible")
      .click();
    cy.get(variables.CGLedit).click();
    cy.get(variables.CGLeditSave).click();
  });

  it("Prueba Actions > Team Membership > Abre Drawer", function() {
    cy.get(variables.menuCreditGroupsList)
      .should("be.visible")
      .click();
    cy.get(variables.CGLteamMembership).click();
  });

  it("Prueba Actions > Team Membership > Save", function() {
    cy.get(variables.menuCreditGroupsList)
      .should("be.visible")
      .click();
    cy.get(variables.CGLteamMembership).click();
    cy.get(variables.CGLteamMembershipSave).should("be.visible");
  });

  it("Prueba Actions > Team Membership > Cancel", function() {
    cy.get(variables.menuCreditGroupsList)
      .should("be.visible")
      .click();
    cy.get(variables.CGLteamMembership).click();
    cy.get(variables.CGLteamMembershipCancel).should("be.visible");
  });

  it("Prueba Actions > Download Team Membership", function() {
    cy.get(variables.menuCreditGroupsList)
      .should("be.visible")
      .click();
    //cy.get(variables.CGLdownload).click();
  });

  it("Prueba Page > Next", function() {
    cy.get(variables.menuCreditGroupsList)
      .should("be.visible")
      .click();
    cy.get(variables.CGLpageNext).click();
  });

  it("Prueba Page > Previous", function() {
    cy.get(variables.menuCreditGroupsList)
      .should("be.visible")
      .click();
    cy.get(variables.CGLpagePrevious).click();
  });
}); // fin describe
