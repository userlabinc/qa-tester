/// <reference types="Cypress"/>
import * as variables from "../../fixtures/variables";

describe("Pruebas para seccion gift card", function() {
  beforeEach(function() {
    cy.fixture("data-moocho").then(function(datos) {
      this.datos = datos;
    });
  });

  beforeEach(() => {
    cy.visit("http://admin-qa.moocho.com/");
    cy.reload();
  });

  it("Buscar por nombre en Tile List", function() {
    cy.get(variables.user).type(this.datos.correo);
    cy.get(variables.pass).type(this.datos.pass);
    cy.get(variables.loginbtn).click();
    cy.get(variables.menu_prin, { timeout: 8000 }).should("be.visible");
    cy.get(variables.app_mgm).click();
    cy.get(variables.tl_menubtn)
      .should("be.visible")
      .click();
    cy.get(variables.gl_input).type(this.datos.tl_busq);
  });

  it("Ordenar por ID", function() {
    cy.get(variables.user).type(this.datos.correo);
    cy.get(variables.pass).type(this.datos.pass);
    cy.get(variables.loginbtn).click();
    cy.get(variables.menu_prin, { timeout: 8000 }).should("be.visible");
    cy.get(variables.app_mgm).click();
    cy.get(variables.tl_menubtn)
      .should("be.visible")
      .click();
    cy.get(variables.sort_id).click();
  });

  it("Ordenar por NAME", function() {
    cy.get(variables.user).type(this.datos.correo);
    cy.get(variables.pass).type(this.datos.pass);
    cy.get(variables.loginbtn).click();
    cy.get(variables.menu_prin, { timeout: 8000 }).should("be.visible");
    cy.get(variables.app_mgm).click();
    cy.get(variables.tl_menubtn)
      .should("be.visible")
      .click();
    cy.get(variables.sort_name).click();
  });

  it("Ordenar por URL", function() {
    cy.get(variables.user).type(this.datos.correo);
    cy.get(variables.pass).type(this.datos.pass);
    cy.get(variables.loginbtn).click();
    cy.get(variables.menu_prin, { timeout: 8000 }).should("be.visible");
    cy.get(variables.app_mgm).click();
    cy.get(variables.tl_menubtn)
      .should("be.visible")
      .click();
    cy.get(variables.sort_url).click();
  });

  it("Ordenar por PREVIEW", function() {
    cy.get(variables.user).type(this.datos.correo);
    cy.get(variables.pass).type(this.datos.pass);
    cy.get(variables.loginbtn).click();
    cy.get(variables.menu_prin, { timeout: 8000 }).should("be.visible");
    cy.get(variables.app_mgm).click();
    cy.get(variables.tl_menubtn)
      .should("be.visible")
      .click();
    cy.get(variables.sort_prev).click();
  });

  // ACCIONES
  it("Accion de VIEW", function() {
    cy.get(variables.user).type(this.datos.correo);
    cy.get(variables.pass).type(this.datos.pass);
    cy.get(variables.loginbtn).click();
    cy.get(variables.menu_prin, { timeout: 8000 }).should("be.visible");
    cy.get(variables.app_mgm).click();
    cy.get(variables.tl_menubtn)
      .should("be.visible")
      .click();
    cy.get(variables.view).click();
  });

  it("Accion de EDIT", function() {
    cy.get(variables.user).type(this.datos.correo);
    cy.get(variables.pass).type(this.datos.pass);
    cy.get(variables.loginbtn).click();
    cy.get(variables.menu_prin, { timeout: 8000 }).should("be.visible");
    cy.get(variables.app_mgm).click();
    cy.get(variables.tl_menubtn)
      .should("be.visible")
      .click();
    cy.get(variables.edit).click();
  });

  it("Accion de COPY LINK", function() {
    cy.get(variables.user).type(this.datos.correo);
    cy.get(variables.pass).type(this.datos.pass);
    cy.get(variables.loginbtn).click();
    cy.get(variables.menu_prin, { timeout: 8000 }).should("be.visible");
    cy.get(variables.app_mgm).click();
    cy.get(variables.tl_menubtn)
      .should("be.visible")
      .click();
    cy.get(variables.copy_link).click();
  });

  it("Accion de DELETE", function() {
    cy.get(variables.user).type(this.datos.correo);
    cy.get(variables.pass).type(this.datos.pass);
    cy.get(variables.loginbtn).click();
    cy.get(variables.menu_prin, { timeout: 8000 }).should("be.visible");
    cy.get(variables.app_mgm).click();
    cy.get(variables.tl_menubtn)
      .should("be.visible")
      .click();
    cy.get(variables.delete_btn).should("be.visible");
  });
}); // fin describe
