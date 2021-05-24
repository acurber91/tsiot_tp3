/* 
 * Testing de Sistemas de Internet de las Cosas
 * Carrera de Especialización en Internet de las Cosas (CEIoT)
 * 
 * El siguiente programa cumple con los requisitos del Trabajo Práctico Nº3.
 * 
 * Autor: Esp. Ing. Agustín Curcio Berardi
*/

module.exports = class Lista {
    
    #elementos;

    constructor() {
        this.#elementos = [];
    }

    // Devuelve el índice correspondiente a una clave del vector.
    find_clave(clave) {
        for(var i = 0; i < this.#elementos.length; i++) {
            if(this.#elementos[i].clave == clave) {
                return i;
            }
        }
        return NaN;
    }
    
    // Devuelve la cantidad total de elementos del vector.
    count() {
        return this.#elementos.length;
    }

    // Devuelve un valor a partir de su clave.
    find(clave) {
        var index = this.find_clave(clave);
        if(isNaN(index)) {
            return index;
        }
        else {
            return this.#elementos[index].valor;
        }
    }

    // Agrega un conjunto {clave, valor} al vector. Si la clave ya existe, actualiza el valor asociado.
    add(clave, valor) {
        if(typeof clave === "string" && typeof valor === "string") {
            var index = this.find_clave(clave);
            if(isNaN(index)) {
                this.#elementos.push({clave, valor});
            }
            else {
                this.#elementos[index].valor = valor;
            }
            this.sort();
        }
        else {
            return NaN;
        }
    }

    // Ordena alfabéticamente las claves del vector.
    sort() {
        this.#elementos.sort((a, b) => a.clave.localeCompare(b.clave))
    }

    // Elimina un conjunto {clave, valor} a partir de una clave.
    delete(clave)
    {
        var index = this.find_clave(clave);
        if(isNaN(index)) {
            return index
        }
        else {
            this.#elementos.splice(index, 1);
            return true
        }
    }

    // Devuelve todos los elementos del vector.
    find_all() {
        return this.#elementos;
    }
    
}