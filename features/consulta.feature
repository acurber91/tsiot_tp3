# language: es
# encoding: utf-8

Característica: Consulta de información de la lista.

Escenario: Consulta de todos los valores.
    Dado una lista con la clave "edificio" y valor "casa",
    Cuando se se le agrega la clave "animal" y valor "perro",
    Entonces se podrá obtiene el arreglo completo y ordenado alfabéticamente.
    Y la cantidad total de elementos igual a 2.