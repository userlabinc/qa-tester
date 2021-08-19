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

  it("Prueba User ID > Numeros", function() {
    cy.get(variables.menuAthleteList)
      .should("be.visible")
      .click();
    cy.get(variables.ALuser)
      .type(this.datos.testNumeros)
      .should("have.value", 123456);
  });

  it("Prueba User ID > Texto", function() {
    cy.get(variables.menuAthleteList)
      .should("be.visible")
      .click();
    cy.get(variables.ALuser)
      .type(this.datos.testLetras)
      .should("have.text", "");
  });

  it("Prueba User ID > Simbolos", function() {
    cy.get(variables.menuAthleteList)
      .should("be.visible")
      .click();
    cy.get(variables.ALuser)
      .type(this.datos.testSimbolos)
      .should("have.text", "");
  });

  it("Prueba User ID > Alfanumerico", function() {
    cy.get(variables.menuAthleteList)
      .should("be.visible")
      .click();
    cy.get(variables.ALuser)
      .type(this.datos.testAlfanumerico)
      .should("have.text", "");
  });

  it("Prueba Campus > Numeros", function() {
    cy.get(variables.menuAthleteList)
      .should("be.visible")
      .click();
    cy.get(variables.ALcampus).type(this.datos.testNumeros);
    cy.get(variables.ALbody).click({ force: true });
    cy.get(variables.ALcampus).should("have.value", "");
  });

  it("Prueba Campus > Texto", function() {
    cy.get(variables.menuAthleteList)
      .should("be.visible")
      .click();
    cy.get(variables.ALcampus).type(this.datos.testLetras);
    cy.get(variables.ALbody).click({ force: true });
    cy.get(variables.ALcampus).contains("Userlab Test University");
  });

  it("Prueba Campus > Simbolos", function() {
    cy.get(variables.menuAthleteList)
      .should("be.visible")
      .click();
    cy.get(variables.ALcampus).type(this.datos.testSimbolos);
    cy.get(variables.ALbody).click({ force: true });
    cy.get(variables.ALcampus).should("have.value", "");
  });

  it("Prueba Campus > Alfanumerico", function() {
    cy.get(variables.menuAthleteList)
      .should("be.visible")
      .click();
    cy.get(variables.ALcampus).type(this.datos.testAlfanumerico);
    cy.get(variables.ALbody).click({ force: true });
    cy.get(variables.ALcampus).should("have.value", "");
  });

  it("Prueba Campus > Muestra informacion al darle click", function() {
    cy.get(variables.menuAthleteList)
      .should("be.visible")
      .click();
    cy.get(variables.ALcampus).click();
  });

  it("Prueba Team > Texto", function() {
    cy.get(variables.menuAthleteList)
      .should("be.visible")
      .click();
    cy.get(variables.ALteam)
      .type(this.datos.testLetras)
      .should("not.be.empty");
  });

  it("Prueba Team > Numero", function() {
    cy.get(variables.menuAthleteList)
      .should("be.visible")
      .click();
    cy.get(variables.ALteam).type(this.datos.testNumeros);
    cy.get(variables.ALbody).click();
    cy.get(variables.ALteam).should("have.value", "");
  });

  it("Prueba Team > Simbolos", function() {
    cy.get(variables.menuAthleteList)
      .should("be.visible")
      .click();
    cy.get(variables.ALteam).type(this.datos.testSimbolos);
    cy.get(variables.ALbody).click();
    cy.get(variables.ALteam).should("have.value", "");
  });

  it("Prueba Team > Alfanumerico", function() {
    cy.get(variables.menuAthleteList)
      .should("be.visible")
      .click();
    cy.get(variables.ALteam).type(this.datos.testAlfanumerico);
    cy.get(variables.ALbody).click();
    cy.get(variables.ALteam).should("have.value", "");
  });

  it("Prueba Team > Muestra informacion al darle click", function() {
    cy.get(variables.menuAthleteList)
      .should("be.visible")
      .click();
    cy.get(variables.ALteam).click();
  });

  it("Prueba Email, First & Last Name > Texto", function() {
    cy.get(variables.menuAthleteList)
      .should("be.visible")
      .click();
    cy.get(variables.ALotherOptions)
      .type(this.datos.testLetras)
      .should("have.value", "Test");
  });

  it("Prueba Email, First & Last Name > Numero", function() {
    cy.get(variables.menuAthleteList)
      .should("be.visible")
      .click();
    cy.get(variables.ALotherOptions)
      .type(this.datos.testNumeros)
      .should("have.value", "123456");
  });

  it("Prueba Email, First & Last Name > Simbolos", function() {
    cy.get(variables.menuAthleteList)
      .should("be.visible")
      .click();
    cy.get(variables.ALotherOptions)
      .type(this.datos.testSimbolos)
      .should("have.value", "$#@");
  });

  it("Prueba Email, First & Last Name > Alfanumerico", function() {
    cy.get(variables.menuAthleteList)
      .should("be.visible")
      .click();
    cy.get(variables.ALotherOptions)
      .type(this.datos.testAlfanumerico)
      .should("have.value", "A11");
  });

  it("Prueba Actions > View > Hover", function() {
    cy.get(variables.menuAthleteList)
      .should("be.visible")
      .click();
    cy.get(variables.ALview).realHover();
  });

  it("Prueba Actions > View > Muestra informacion", function() {
    cy.get(variables.menuAthleteList)
      .should("be.visible")
      .click();
    cy.get(variables.ALview).click();
  });

  it("Prueba Actions > Edit > Hover", function() {
    cy.get(variables.menuAthleteList)
      .should("be.visible")
      .click();
    cy.get(variables.ALedit).realHover();
  });

  it("Prueba Actions > Edit > Muestra informacion", function() {
    cy.get(variables.menuAthleteList)
      .should("be.visible")
      .click();
    cy.get(variables.ALedit).click();
    cy.get(variables.ALeditDrawer).should("be.visible");
  });

  it("Prueba Actions > Edit > Guarda cambios", function() {
    cy.get(variables.menuAthleteList)
      .should("be.visible")
      .click();
    cy.get(variables.ALedit).click();
    cy.get(variables.ALeditDrawerBtn).click();
    cy.get(variables.ALeditDrawerMsg).should("be.visible");
  });

  it("Prueba Actions > Delete > Hover", function() {
    cy.get(variables.menuAthleteList)
      .should("be.visible")
      .click();
    cy.get(variables.ALdelete).realHover();
  });

  it("Prueba Actions > Delete > Elimina la informacion", function() {
    cy.get(variables.menuAthleteList)
      .should("be.visible")
      .click();
    cy.get(variables.ALdelete).click();
  });

  it("Prueba Page Number > Cambia de pagina", function() {
    cy.get(variables.menuAthleteList)
      .should("be.visible")
      .click();
    cy.get(variables.ALpageNext).click();
  });
}); // fin describe
