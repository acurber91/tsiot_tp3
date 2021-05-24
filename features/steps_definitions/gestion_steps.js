const { Before, Given, When, Then } = require("@cucumber/cucumber")
const expect = require("chai").expect;
const Lista = require("../../src/lista.js");

let contexto = {};

Given("una lista vacía.", function () {
    contexto.lista = new Lista();
});

/*** Escenario 1 ***/

Then("la lista tiene {int} elemento(s) almacenado(s).", function(cantidad) {
    expect(contexto.lista.count()).to.be.equal(cantidad);
});

Then("si busco una clave {string} no obtengo ningún valor.", function(clave) {
    expect(contexto.lista.find(clave)).to.be.NaN;
});

/*******************/

/*** Escenario 2 ***/

When("agrego la clave {string} con el valor {string},", function(clave, valor) {
    expect(contexto.lista.add(clave, valor)).to.be.equal(1);
});

Then("la lista tiene {int} elemento(s) almacenado(s),", function(cantidad) {
    expect(contexto.lista.count()).to.be.equal(cantidad);
});

Then("si busco la clave {string}, obtengo el valor {string}.", function(clave, valor) {
    expect(contexto.lista.find(clave)).to.be.equal(valor);
});

/*******************/