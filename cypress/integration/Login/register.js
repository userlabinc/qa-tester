/// <reference types="Cypress"/>
import * as variables from "../../fixtures/variables";

describe("Pruebas REGISTER", function() {
  beforeEach(function() {
    cy.fixture("data-moocho").then(function(datos) {
      this.datos = datos;
    });
  });

  beforeEach(() => {
    cy.visit("http://admin-qa.moocho.com/");
    cy.reload();
  });

  it("Registrarse con valores correctos", function() {
    cy.get(variables.reg).click();
    cy.get(variables.reg_name).type(this.datos.reg_name);
    cy.get(variables.reg_email).type(this.datos.reg_email);
    cy.get(variables.reg_pass).type(this.datos.reg_pass);
    //cy.get(variables.loginbtn).click();
  });

  it("Registrarse con valores incorrectos", function() {
    cy.get(variables.reg).click();
    cy.get(variables.reg_name).type(this.datos.reg_name_er);
    cy.get(variables.reg_email).type(this.datos.reg_email_er);
    cy.get(variables.reg_pass).type(this.datos.reg_pass_er);
    cy.get(variables.loginbtn).click();
    cy.get(variables.reg_pass_msg).should(
      "have.text",
      "Password not conform with policies"
    );
  });

  it("Registrarse sin nombre", function() {
    cy.get(variables.reg).click();
    cy.get(variables.reg_email).type(this.datos.reg_email);
    cy.get(variables.reg_pass).type(this.datos.reg_pass);
    cy.get(variables.loginbtn).click();
    cy.get(variables.reg_name_er).should(
      "have.text",
      "Please input your name!"
    );
  });

  it("Registrarse sin correo", function() {
    cy.get(variables.reg).click();
    cy.get(variables.reg_name).type(this.datos.reg_name);
    cy.get(variables.reg_pass).type(this.datos.reg_pass);
    cy.get(variables.loginbtn).click();
    cy.get(variables.reg_email_er).should(
      "have.text",
      "Please input your email!"
    );
  });

  it("Registrarse sin password", function() {
    cy.get(variables.reg).click();
    cy.get(variables.reg_name).type(this.datos.reg_name);
    cy.get(variables.reg_email).type(this.datos.reg_email);
    cy.get(variables.loginbtn).click();
    cy.get(variables.reg_pass_er).should(
      "have.text",
      "Please input your Password!"
    );
  });
}); // fin DESCRIBE
