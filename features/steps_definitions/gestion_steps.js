const { Before, Given, When, Then } = require("@cucumber/cucumber")
const expect = require("chai").expect;
const Lista = require("../../src/lista.js");

let contexto = {};

Given("una lista vacía.", function () {
    contexto.lista = new Lista();
});

/*** Escenario Nº1 ***/

Then("la lista tiene {int} elemento(s) almacenado(s).", function(cantidad) {
    expect(contexto.lista.count()).to.be.equal(cantidad);
});

Then("si busco una clave {string} no obtengo ningún valor.", function(clave) {
    expect(contexto.lista.find(clave)).to.be.NaN;
});

/*********************/

/*** Escenario Nº2 ***/

When("agrego la clave {string} con el valor {string},", function(clave, valor) {
    contexto.lista.add(clave, valor);
});

Then("la lista tiene {int} elemento(s) almacenado(s),", function(cantidad) {
    expect(contexto.lista.count()).to.be.equal(cantidad);
});

Then("si busco la clave {string}, obtengo el valor {string}.", function(clave, valor) {
    expect(contexto.lista.find(clave)).to.be.equal(valor);
});

/*********************/

/*** Escenario Nº3 ***/

When("agrego la clave {int} con el valor {int},", function(clave, valor) {
    contexto.lista.add(clave, valor);
});

Then("la lista no tiene elementos almacenados,", function() {
    expect(contexto.lista.count()).to.be.equal(0);
});

Then("si busco la clave {int}, obtengo el valor NaN.", function(clave) {
    expect(contexto.lista.find(clave)).to.be.NaN;
});

/*********************/

/*** Escenario Nº3 ***/
/*
When("se agrega la clave {} con el valor {},", function(clave, valor) {
    contexto.lista.add(clave, valor);
});

Then("la lista tiene {int} elementos almacenados.", function(cantidad) {
    expect(contexto.lista.count()).to.be.equal(cantidad);
});

Then("si busco la clave {}, obtengo el valor {}.", function(clave, valor) {
    expect(contexto.lista.find(clave)).to.be.equal(valor);
});*/
/*********************/