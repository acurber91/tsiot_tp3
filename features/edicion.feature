# language: es
# encoding: utf-8

Característica: Edición de elementos almacenados en la lista.

Antecedentes:
    Dado una lista con el par clave "clave" y valor "valor".

Escenario: Agregar un elemento existente a la lista.
    Cuando se agrega la clave "clave" con el valor "nuevo_valor",
    Entonces si se busca la clave "clave", obtengo el valor "nuevo_valor" actualizado.