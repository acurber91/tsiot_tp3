module.exports = class Lista {
    
    #elementos;

    constructor() {
        this.#elementos = [];
    }

    find_clave(clave) {
        for(var i = 0; i < this.#elementos.length; i++) {
            if(this.#elementos[i].clave == clave) {
                return i;
            }
        }
        return NaN;
    }
    
    count() {
        return this.#elementos.length;
    }

    find(clave) {
        var index = this.find_clave(clave);
        if(isNaN(index)) {
            return index;
        }
        else {
            return this.#elementos[index].valor;
        }
    }

    add(clave, valor) {
        if(typeof clave === "string" && typeof valor === "string") {
            var index = this.find_clave(clave);
            if(isNaN(index)) {
                this.#elementos.push({clave, valor});
            }
            else {
                this.#elementos[index].valor = valor;
            }
        }
        else {
            return NaN;
        }
    }

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
}