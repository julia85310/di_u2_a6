# DI UNIDAD 2, ACTIVIDAD 6
## Ejercicio 1: arreglar un controlador de evento
Al hacer clic en el botón de LightSwitch se supone que debe cambiar el fondo de la página entre blanco y negro. Sin embargo, nada pasa cuando lo cliqueas. Soluciona el problema. (No te preocupes por la lógica dentro de handleClick: esa parte está bien).

## Ejercicio 2: arreglar un perfil roto
El componente ColorSwitch renderiza un botón. Se supone que debe cambiar el color de la página. Conéctalo a la prop controladora de evento onChangeColor que recibe del padre de modo que al pulsar el botón cambie el color.

Después que hagas esto, fíjate que al pulsar el botón también incrementa el contador de clics de la página. Tu colega que escribió el componente padre insiste que onChangeColor no incrementa ningún contador. ¿Qué más podría estar pasando? Soluciónalo de manera que el botón sólo cambie el color, y no incremente el contador. 