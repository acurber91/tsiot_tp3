# language: es
# encoding: utf-8

Característica: Gestionar las parejas almacenadas en la lista.

Antecedentes:
    Dado una lista vacía.

Escenario: Verificar el estado de una lista vacía.
    Entonces la lista tiene 0 elementos almacenados.
    Y si busco una clave "clave" no obtengo ningún valor.

Escenario: Agregar un elemento a una lista vacía.
    Cuando agrego la clave "clave" con el valor "valor",
    Entonces la lista tiene 1 elemento almacenado,
    Y si busco la clave "clave", obtengo el valor "valor".