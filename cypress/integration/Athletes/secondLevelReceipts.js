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

  it("Prueba Search By > Email > Numeros", function() {
    cy.get(variables.menuReceipts)
      .should("be.visible")
      .click();
    cy.get(variables.RsearchByEmail).click();
    cy.get(variables.Remail)
      .type(this.datos.testNumeros)
      .contains("12");
  });

  it("Prueba Search By > Email > Texto", function() {
    cy.get(variables.menuReceipts)
      .should("be.visible")
      .click();
    cy.get(variables.RsearchByEmail).click();
    cy.get(variables.Remail).type(this.datos.testLetras);
  });

  it("Prueba Search By > Email > Simbolos", function() {
    cy.get(variables.menuReceipts)
      .should("be.visible")
      .click();
    cy.get(variables.RsearchByEmail).click();
    cy.get(variables.Remail)
      .type(this.datos.testSimbolos)
      .contains("$#@");
  });

  it("Prueba Search By > Email > Alfanumerico", function() {
    cy.get(variables.menuReceipts)
      .should("be.visible")
      .click();
    cy.get(variables.RsearchByEmail).click();
    cy.get(variables.Remail)
      .type(this.datos.testAlfanumerico)
      .contains("A11");
  });

  it("Prueba Search By > Email > Mensaje de Error", function() {
    cy.get(variables.menuReceipts)
      .should("be.visible")
      .click();
    cy.get(variables.RsearchByEmail).click();
    cy.get(variables.RbtnSearch).click();
    cy.get(variables.RuseremailMsg).contains("Please select the email!");
  });

  it("Prueba Search By > User Id > Numeros", function() {
    cy.get(variables.menuReceipts)
      .should("be.visible")
      .click();
    cy.get(variables.RuserID)
      .type(this.datos.testNumeros)
      .should("have.value", "123456");
  });

  it("Prueba Search By > User Id > Texto", function() {
    cy.get(variables.menuReceipts)
      .should("be.visible")
      .click();
    cy.get(variables.RuserID)
      .type(this.datos.testLetras)
      .should("have.value", "");
  });

  it("Prueba Search By > User Id > Simbolos", function() {
    cy.get(variables.menuReceipts)
      .should("be.visible")
      .click();
    cy.get(variables.RuserID)
      .type(this.datos.testSimbolos)
      .should("have.value", "");
  });

  it("Prueba Search By > User Id > Alfanumerico", function() {
    cy.get(variables.menuReceipts)
      .should("be.visible")
      .click();
    cy.get(variables.RuserID)
      .type(this.datos.testAlfanumerico)
      .should("have.value", "11");
  });

  it("Prueba Search By > User Id > Mensaje de Error", function() {
    cy.get(variables.menuReceipts)
      .should("be.visible")
      .click();
    cy.get(variables.RuserID).should("have.text", "");
    cy.get(variables.RbtnSearch).click();
    cy.get(variables.RuseremailMsg).contains("Please input the user id!");
  });

  it("Prueba First Name > Numeros", function() {
    cy.get(variables.menuReceipts)
      .should("be.visible")
      .click();
    cy.get(variables.RfirstName)
      .type(this.datos.testNumeros)
      .should("have.value", "123456");
  });

  it("Prueba First Name > Texto", function() {
    cy.get(variables.menuReceipts)
      .should("be.visible")
      .click();
    cy.get(variables.RfirstName)
      .type(this.datos.testLetras)
      .should("have.value", "Test");
  });

  it("Prueba First Name > Simbolos", function() {
    cy.get(variables.menuReceipts)
      .should("be.visible")
      .click();
    cy.get(variables.RfirstName)
      .type(this.datos.testSimbolos)
      .should("have.value", "$#@");
  });

  it("Prueba First Name > Alfanumerico", function() {
    cy.get(variables.menuReceipts)
      .should("be.visible")
      .click();
    cy.get(variables.RfirstName)
      .type(this.datos.testAlfanumerico)
      .should("have.value", "A11");
  });

  it("Prueba Campuses > Texto", function() {
    cy.get(variables.menuReceipts)
      .should("be.visible")
      .click();
    cy.get(variables.Rcampuses)
      .type(this.datos.testLetras)
      .should("not.be.empty");
  });

  it("Prueba Campuses > Numero", function() {
    cy.get(variables.menuReceipts)
      .should("be.visible")
      .click();
    cy.get(variables.Rcampuses).type(this.datos.testNumeros);
    cy.get(variables.Rbody).click();
    cy.get(variables.Rcampuses).should("have.value", "");
  });

  it("Prueba Campuses > Simbolos", function() {
    cy.get(variables.menuReceipts)
      .should("be.visible")
      .click();
    cy.get(variables.Rcampuses).type(this.datos.testSimbolos);
    cy.get(variables.Rbody).click();
    cy.get(variables.Rcampuses).should("have.value", "");
  });

  it("Prueba Campuses > Alfanumerico", function() {
    cy.get(variables.menuReceipts)
      .should("be.visible")
      .click();
    cy.get(variables.Rcampuses).type(this.datos.testAlfanumerico);
    cy.get(variables.Rbody).click();
    cy.get(variables.Rcampuses).should("have.value", "");
  });

  it("Prueba Campuses > Mensaje de error", function() {
    cy.get(variables.menuReceipts)
      .should("be.visible")
      .click();
    cy.get(variables.Rcampuses).should("have.value", "");
    cy.get(variables.RbtnSearch).click();
    cy.get(variables.RcampusMsg).should(
      "have.text",
      "Please select at least a campus!"
    );
  });

  it("Prueba Created > Texto", function() {
    cy.get(variables.menuReceipts)
      .should("be.visible")
      .click();
    cy.get(variables.Rcreated)
      .type(this.datos.testDays)
      .should("not.be.empty");
  });

  it("Prueba Created > Numero", function() {
    cy.get(variables.menuReceipts)
      .should("be.visible")
      .click();
    cy.get(variables.Rcreated).type(this.datos.testNumeros);
    cy.get(variables.Rbody).click();
    cy.get(variables.Rcreated).should("have.value", "");
  });

  it("Prueba Created > Simbolos", function() {
    cy.get(variables.menuReceipts)
      .should("be.visible")
      .click();
    cy.get(variables.Rcreated).type(this.datos.testSimbolos);
    cy.get(variables.Rbody).click();
    cy.get(variables.Rcreated).should("have.value", "");
  });

  it("Prueba Created > Alfanumerico", function() {
    cy.get(variables.menuReceipts)
      .should("be.visible")
      .click();
    cy.get(variables.Rcreated).type(this.datos.testAlfanumerico);
    cy.get(variables.Rbody).click();
    cy.get(variables.Rcreated).should("have.value", "");
  });

  it("Prueba Created > Mensaje de error", function() {
    cy.get(variables.menuReceipts)
      .should("be.visible")
      .click();
    cy.get(variables.Rcreated).should("have.value", "");
    cy.get(variables.RbtnSearch).click();
    cy.get(variables.RdateMsg).should("have.text", "Please select the date!");
  });

  it("Prueba Uploaded > Yes > Hover", function() {
    cy.get(variables.menuReceipts)
      .should("be.visible")
      .click();
    cy.get(variables.RuploadedYes).realHover();
  });

  it("Prueba Uploaded > Yes > Click", function() {
    cy.get(variables.menuReceipts)
      .should("be.visible")
      .click();
    cy.get(variables.RuploadedYes).click();
  });

  it("Prueba Uploaded > No > Hover", function() {
    cy.get(variables.menuReceipts)
      .should("be.visible")
      .click();
    cy.get(variables.RuploadedNo).realHover();
  });

  it("Prueba Uploaded > No > Click", function() {
    cy.get(variables.menuReceipts)
      .should("be.visible")
      .click();
    cy.get(variables.RuploadedNo).click();
  });

  it("Prueba Uploaded > Either > Hover", function() {
    cy.get(variables.menuReceipts)
      .should("be.visible")
      .click();
    cy.get(variables.RuploadedYes).click();
    cy.get(variables.RuploadedEither).realHover();
  });

  it("Prueba Uploaded > Either > Click", function() {
    cy.get(variables.menuReceipts)
      .should("be.visible")
      .click();
    cy.get(variables.RuploadedYes).click();
    cy.get(variables.RuploadedEither).realHover();
  });

  it("Prueba Invoice > Numeros", function() {
    cy.get(variables.menuReceipts)
      .should("be.visible")
      .click();
    cy.get(variables.Rinvoice)
      .type(this.datos.testNumeros)
      .should("have.value", "123456");
  });

  it("Prueba Invoice > Texto", function() {
    cy.get(variables.menuReceipts)
      .should("be.visible")
      .click();
    cy.get(variables.Rinvoice)
      .type(this.datos.testLetras)
      .should("have.value", "");
  });

  it("Prueba Invoice > Simbolos", function() {
    cy.get(variables.menuReceipts)
      .should("be.visible")
      .click();
    cy.get(variables.Rinvoice)
      .type(this.datos.testSimbolos)
      .should("have.value", "");
  });

  it("Prueba Invoice > Alfanumerico", function() {
    cy.get(variables.menuReceipts)
      .should("be.visible")
      .click();
    cy.get(variables.Rinvoice)
      .type(this.datos.testAlfanumerico)
      .should("have.value", "11");
  });

  it("Prueba Last Name > Numeros", function() {
    cy.get(variables.menuReceipts)
      .should("be.visible")
      .click();
    cy.get(variables.RlastName)
      .type(this.datos.testNumeros)
      .should("have.value", "123456");
  });

  it("Prueba Last Name > Texto", function() {
    cy.get(variables.menuReceipts)
      .should("be.visible")
      .click();
    cy.get(variables.RlastName)
      .type(this.datos.testLetras)
      .should("have.value", "Test");
  });

  it("Prueba Last Name > Simbolos", function() {
    cy.get(variables.menuReceipts)
      .should("be.visible")
      .click();
    cy.get(variables.RlastName)
      .type(this.datos.testSimbolos)
      .should("have.value", "$#@");
  });

  it("Prueba Last Name > Alfanumerico", function() {
    cy.get(variables.menuReceipts)
      .should("be.visible")
      .click();
    cy.get(variables.RlastName)
      .type(this.datos.testAlfanumerico)
      .should("have.value", "A11");
  });

  it("Prueba Teams > Numeros", function() {
    cy.get(variables.menuReceipts)
      .should("be.visible")
      .click();
    cy.get(variables.Rcampuses).type(this.datos.testLetras);
    cy.get(variables.Rteams).type(this.datos.testNumeros);
  });

  it("Prueba Teams > Texto", function() {
    cy.get(variables.menuReceipts)
      .should("be.visible")
      .click();
    cy.get(variables.Rcampuses).type(this.datos.testLetras);
    cy.get(variables.Rteams).type(this.datos.testLetras);
  });

  it("Prueba Teams > Simbolos", function() {
    cy.get(variables.menuReceipts)
      .should("be.visible")
      .click();
    cy.get(variables.Rcampuses).type(this.datos.testLetras);
    cy.get(variables.Rteams).type(this.datos.testSimbolos);
  });

  it("Prueba Teams > Alfanumerico", function() {
    cy.get(variables.menuReceipts)
      .should("be.visible")
      .click();
    cy.get(variables.Rcampuses).type(this.datos.testLetras);
    cy.get(variables.Rteams).type(this.datos.testAlfanumerico);
  });

  it("Prueba boton Search", function() {
    cy.get(variables.menuReceipts)
      .should("be.visible")
      .click();
    cy.get(variables.RbtnSearch).click();
  });
}); // fin describe
