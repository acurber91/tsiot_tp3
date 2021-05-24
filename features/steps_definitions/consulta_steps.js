const { Before, Given, When, Then } = require("@cucumber/cucumber")
const expect = require("chai").expect;
const assert = require("chai").assert;
const Lista = require("../../src/lista.js");

let contexto = {};
contexto.lista = new Lista();

/*** Escenario Nº6 ***/

Given("una lista con la clave {string} y valor {string},", function (clave, valor) {
    contexto.lista.add(clave, valor);
});

When("se se le agrega la clave {string} y valor {string},", function(clave, valor) {
    contexto.lista.add(clave, valor);
});

Then("se podrá obtiene el arreglo completo y ordenado alfabéticamente.", function() {
    assert.deepEqual(contexto.lista.find_all(), [{clave: "animal", valor: "perro"}, {clave: "edificio", valor: "casa"}]);
});

Then("la cantidad total de elementos igual a {int}.", function(cantidad) {
    expect(contexto.lista.count()).to.be.equal(2);
});

/*********************/