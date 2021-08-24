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

  it("Prueba Campus > Numeros", function() {
    cy.get(variables.menuCreditGroupAdd)
      .should("be.visible")
      .click();
    cy.get(variables.CGAcampus).type(this.datos.testNumeros);
    cy.get(variables.CGAbody).click({ force: true });
    cy.get(variables.CGAcampus).should("have.value", "");
  });

  it("Prueba Campus > Texto", function() {
    cy.get(variables.menuCreditGroupAdd)
      .should("be.visible")
      .click();
    cy.get(variables.CGAcampus).type(this.datos.testLetras);
    cy.get(variables.CGAbody).click({ force: true });
    cy.get(variables.CGAcampus).contains("Userlab Test University");
  });

  it("Prueba Campus > Simbolos", function() {
    cy.get(variables.menuCreditGroupAdd)
      .should("be.visible")
      .click();
    cy.get(variables.CGAcampus).type(this.datos.testSimbolos);
    cy.get(variables.CGAbody).click({ force: true });
    cy.get(variables.CGAcampus).should("have.value", "");
  });

  it("Prueba Campus > Alfanumerico", function() {
    cy.get(variables.menuCreditGroupAdd)
      .should("be.visible")
      .click();
    cy.get(variables.CGAcampus).type(this.datos.testAlfanumerico);
    cy.get(variables.CGAbody).click({ force: true });
    cy.get(variables.CGAcampus).should("have.value", "");
  });

  it("Prueba Campus > Mensaje de error", function() {
    cy.get(variables.menuCreditGroupAdd)
      .should("be.visible")
      .click();
    cy.get(variables.CGAaddTeam).click();
    cy.get(variables.errorMsg(1)).should(
      "have.text",
      "Please select the campus!"
    );
  });

  it("Prueba Name > Numeros", function() {
    cy.get(variables.menuCreditGroupAdd)
      .should("be.visible")
      .click();
    cy.get(variables.CGAname)
      .type(this.datos.testNumeros)
      .should("have.value", "123456");
  });

  it("Prueba Name > Texto", function() {
    cy.get(variables.menuCreditGroupAdd)
      .should("be.visible")
      .click();
    cy.get(variables.CGAname)
      .type(this.datos.testLetras)
      .should("have.value", "Test");
  });

  it("Prueba Name > Simbolos", function() {
    cy.get(variables.menuCreditGroupAdd)
      .should("be.visible")
      .click();
    cy.get(variables.CGAname)
      .type(this.datos.testSimbolos)
      .should("have.value", "$#@");
  });

  it("Prueba Name > Alfanumerico", function() {
    cy.get(variables.menuCreditGroupAdd)
      .should("be.visible")
      .click();
    cy.get(variables.CGAname)
      .type(this.datos.testAlfanumerico)
      .should("have.value", "A11");
  });

  it("Prueba Name > Mensaje de error", function() {
    cy.get(variables.menuCreditGroupAdd)
      .should("be.visible")
      .click();
    cy.get(variables.CGAaddTeam).click();
    cy.get(variables.errorMsg(2)).should(
      "have.text",
      "Please input the team name!"
    );
  });

  it("Prueba Add Team > Muestra mensaje de confirmacion", function() {
    cy.get(variables.menuCreditGroupAdd)
      .should("be.visible")
      .click();
    cy.get(variables.CGAcampus).type(this.datos.testLetras);
    cy.get(variables.CGAname).type(this.datos.testLetras);
    cy.get(variables.CGAaddTeam).click();
    cy.get(variables.CGAconfirmation).should("be.visible");
  });

  it("Prueba Cancel > Yes", function() {
    cy.get(variables.menuCreditGroupAdd)
      .should("be.visible")
      .click();
    cy.get(variables.CGAcampus).type(this.datos.testLetras);
    cy.get(variables.CGAname).type(this.datos.testLetras);
    cy.get(variables.CGAcancel).click();
    cy.get(variables.CGAcancelYes).click();
  });

  it("Prueba Cancel > No", function() {
    cy.get(variables.menuCreditGroupAdd)
      .should("be.visible")
      .click();
    cy.get(variables.CGAcampus).type(this.datos.testLetras);
    cy.get(variables.CGAname).type(this.datos.testLetras);
    cy.get(variables.CGAcancel).click();
    cy.get(variables.CGAcancelNo).click();
  });
}); // fin describe
