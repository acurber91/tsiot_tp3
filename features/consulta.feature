
# language: es
# encoding: utf-8

Característica: Consulta de información de la lista.

Antecedentes:
    Dado una lista con el par clave "edificio" y valor "casa".

Escenario: Consulta de todos los valores.
    Cuando se le agrega la clave "animal" y valor "perro",
    Entonces se obtiene el siguiente resultado:
    | animal | edificio |