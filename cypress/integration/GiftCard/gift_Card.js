/// <reference types="Cypress"/>
import * as variables from "../../fixtures/variables";

describe("Pruebas para seccion gift card", function() {
  beforeEach(function() {
    cy.fixture("data-moocho").then(function(datos) {
      this.datos = datos;
    });
  }); // fin before

  beforeEach(() => {
    // Ingresar a la pagina
    cy.visit("http://admin-qa.moocho.com/");
    cy.reload();
  }); // fin beforeEach

  it("Busqueda en subseccion DASHBOARD", function() {
    // Hacer login
    cy.get("#username").type(this.datos.correo);
    cy.get("#password").type(this.datos.pass);
    cy.get(".login-form-button").click();
    cy.wait(5000);
    // Click en menu
    cy.get(":nth-child(8) > .ant-menu-submenu-title").click();
    // Click en dashboard
    cy.get('[id="menu7$Menu"] :nth-child(1) > a').click();
    // Introducir un gift card
    cy.get("#gift_card_number").type(this.datos.gcn);
    // Introducir invoice ID
    cy.get("#invoice_id").type(this.datos.invoice);
    // Click en select DATE
    cy.get(".gc-full > .ant-select-selection").click();
    // Seleccionar una fecha
    cy.get(".ant-select-dropdown-menu > :nth-child(7)").click();
    // Ingresar  nombre
    cy.get("#first_name").type(this.datos.fname);
    // Ingresar apellido
    cy.get("#last_name").type(this.datos.lname);
    // Ingresar correo
    cy.get("#email_address").type(this.datos.email);
    // Ingresar UserID
    cy.get("#user_id").type(this.datos.userid);
    // Click en select campus
    cy.get(
      ":nth-child(6) > :nth-child(1) > .ant-row > .ant-col-18 > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection"
    ).click();
    // Seleccionar campus
    cy.contains("Miami").click();
    // Ingresar merchant
    //cy.get(
    //  ":nth-child(6) > :nth-child(2) > .ant-row > .ant-col-18 > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection"
    //)
    //  .type(this.datos.merchant)
    //  .click();
    // Seleccionar atleta
    //cy.get('#athlete > :nth-child(1)').click(); // Either
    //cy.get("#athlete > :nth-child(2)").click(); // Yes
    //cy.get('#athlete > :nth-child(3)').click(); // No
    // Seleccionar void
    //cy.get('#void > :nth-child(1)').click(); // Either
    //cy.get("#void > :nth-child(2)").click(); // Yes
    //cy.get('#void > :nth-child(3)').click(); // No
    // Seleccionar refund
    //cy.get('#refund > :nth-child(1)').click(); // Either
    //cy.get("#refund > :nth-child(2)").click(); // Yes
    //cy.get('#refund > :nth-child(3)').click(); // No
    // Click en select servicio
    //cy.get("#service > .ant-select-selection").click();
    // Seleccionar servicio
    //cy.contains("BHN").click();
    // Click en select product
    //cy.get(
    //  ":nth-child(9) > :nth-child(2) > .ant-row > .ant-col-18 > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection"
    //).click();
    // Seleccionar producto
    //cy.contains("AMC Popcorn eGift").click();
    // Click en boton search
    cy.get(
      '[style="text-align: left; margin-left: 10px;"] > .ant-row > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-btn'
    ).click();
    // Click en boton clear filters
    //cy.get(
    //  '[style="text-align: right; margin-right: 10px;"] > .ant-row > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-btn'
    //).click();
  }); // fin it

  it("Editar gift card en subseccion CAMPUS", function() {
    // Hacer login
    cy.get("#username").type(this.datos.correo);
    cy.get("#password").type(this.datos.pass);
    cy.get(".login-form-button").click();
    cy.wait(5000);
    // Click en menu
    cy.get(":nth-child(8) > .ant-menu-submenu-title").click();
    // Click en campus
    cy.get(":nth-child(2) > a").click();
    // Busquedas en seccion
    // Searchbar
    cy.get(".ant-input").type(this.datos.campus);
    // Click en boton SEARCH
    cy.get(".ant-input-group-addon > .ant-btn").click();
    // Click en EDIT
    cy.get('[data-row-key="0"] > :nth-child(4) > .ant-btn').click();
    // Verificar si el switch es visible y darle click
    cy.get(".ant-switch")
      .should("be.visible")
      .click();
    // Click en EDIT para guardar cambio
    cy.get('[data-row-key="0"] > :nth-child(4) > .ant-btn').click();
    // Busqueda por grupo de botones

    cy.get(".ant-radio-group > :nth-child(1)").click(); // Either
    //cy.get(".ant-radio-group > :nth-child(2)").click(); // Yes
    //cy.get('.ant-radio-group > :nth-child(3)').click(); // No
    // Click en EDIT
    cy.get('[data-row-key="0"] > :nth-child(4) > .ant-btn').click();
    // Verificar si el switch es visible y darle click
    cy.get(".ant-switch")
      .should("be.visible")
      .click();
    // Click en EDIT para guardar cambio
    cy.get('[data-row-key="0"] > :nth-child(4) > .ant-btn').click();
  }); // fin it

  it("Busqueda en subseccion PRODUCTS", function() {
    // Hacer login
    cy.get("#username").type(this.datos.correo);
    cy.get("#password").type(this.datos.pass);
    cy.get(".login-form-button").click();
    // Click en menu
    cy.get(":nth-child(8) > .ant-menu-submenu-title").click();
    // Click en products
    cy.get(":nth-child(3) > a").click();
    // Click en select - date created
    cy.get(".gc-full > .ant-select-selection").click;
    // Click en select - currency
    cy.get("#currency > .ant-select-selection").click();
    // Escribir en Entity ID
    cy.get("#entity_id").type(this.datos.entity);
    // Escribir en Universal Producto Code
    cy.get("#universal_product_code").type(this.datos.UPC);
    // Escribir en Name
    cy.get("#name").type(this.datos.prodname);
    // Has Merchant Assigned
    //cy.get("#merchant_assigned > :nth-child(1)").click(); //Either
    //cy.get('#merchant_assigned > :nth-child(2)').click(); //Yes
    //cy.get('#merchant_assigned > :nth-child(3)').click(); //No
    // Click en select - campus
    //cy.get(
    //  ":nth-child(1) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection"
    //).click();
    // Click en el campus
    //cy.get(".ant-select-dropdown-menu > :nth-child(8)").click();
    // Click en select - merchant
    //cy.get(
    //  ":nth-child(4) > :nth-child(2) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection"
    //).type("755");
    // Click en el merchant
    //cy.contains("755 - Jimmy John´s (State) [ Purdue ]").click({ force: true });
    // Click en el body para cerrar select de merchant
    //cy.get(".ant-card-body").click();
    // Click en boton search
    cy.get(
      '[style="text-align: left; margin-left: 10px;"] > .ant-row > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-btn'
    ).click();
    // Click en boton Clear Filters
    //cy.get(
    //  '[style="text-align: right; margin-right: 10px;"] > .ant-row > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-btn'
    //).click();
  }); // fin it
}); // fin describe
