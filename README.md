![header](doc/header.png)

# Trabajo Práctico Nº3

Autor:

* Agustín Curcio Berardi

Docente:

* Esteban Volentini

## Consignas

### Práctica BDD (Behavior Driven Development)

Completar el desarrollo de una lista que almacena pares clave:valor iniciado en la clase utilizando BDD para el desarrollo de la misma.

Se deben implementar los siguientes requerimientos:

1. La lista debe almacenar pares clave:valor.
2. Las claves almacenadas en la lista deben ser únicas.
3. Las claves son cadenas de texto.
4. Se debe poder recuperar un valor a partir de una clave.
5. Se debe poder actualizar el valor asociado a una clave.
6. Se debe poder borrar una pareja a partir de la clave.
7. Se debe poder recuperar la cantidad de elementos almacenados en la lista.
8. Se debe poder recuperar una lista ordenada de las claves almacenadas en la lista.

Además de la funcionalidad implementada se evaluarán los siguientes aspectos del código:

- Consistencia en los identificadores utilizados para los métodos y atributos de las clases.
- Facilidad en la lectura del código respetando una adecuada indentación y separación con líneas en blanco de los diferentes bloques de código.
- Uso de las cadenas de texto de los bloques "describe" e "it" de los códigos de prueba para describir en forma clara el caso de prueba y el aspecto a verificar.
- Documentación mediante comentarios en el código fuente y en los archivos de pruebas.

---

## Solución propuesta

En la resolución propuesta, el archivo `lista.js` dentro de la carpeta `src` implementa todas las funcionalidades requeridas en las consignas del presente Trabajo Práctico. Se procuró escribir un código que sea simple y fácil de leer, atendiendo las pautas de prolijidad exigidas.

Por otro lado, dentro de la carpeta `features` se implementan todas las funcionalidades solicitadas de acuerdo al tipo de operación que se quiera realizar sobre la lista. Así, según los lineamientos del software Cucumber, se crearon adicionalmente los archivos `funcionalidad_steps.js` dentro de la carpeta `steps_definitions`. El código de producción se encuentra totalmente documentado, mientras que para los casos de prueba resulta suficiente la documentación que brindan las estructuras `Given`. `When` y `Then`.

El resultado que se obtuvo en la consola es el siguiente:

agustin@laptop:~$ npm test

> tp3@1.0.0 test /home/agustin/MIoT/TSIoT/tp3
> cucumber-js --publish-quiet

......................

6 scenarios (6 passed)
22 steps (22 passed)
0m00.018s (executing steps: 0m00.006s)

---

![footer](doc/footer.png)
