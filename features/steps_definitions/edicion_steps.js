const { Before, Given, When, Then } = require("@cucumber/cucumber")
const expect = require("chai").expect;
const Lista = require("../../src/lista.js");

let contexto = {};

Given("una lista con el par clave {string} y valor {string}.", function (clave, valor) {
    contexto.lista = new Lista();
    contexto.lista.add(clave, valor);
});

/*** Escenario Nº4 ***/

When("se agrega la clave {string} con el valor {string},", function(clave, valor) {
    contexto.lista.add(clave, valor);
});

Then("si se busca la clave {string}, obtengo el valor {string} actualizado.", function(clave, valor) {
    expect(contexto.lista.find(clave)).to.be.equal(valor);
});

/*********************/