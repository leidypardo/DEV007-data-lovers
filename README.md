**# Data Lovers**

\## Índice


* \*         1. Resumen del proyecto
* \*         2. Historias de usuario y Testeos de usabilidad
* \*         3. prototipo de baja fidelidad
* \*         4. prototipo de alta fidelidad
* \*         5. Implementación de la Interfaz de Usuario
* \*         6. Pruebas unitarias

\## 1. Resumen del proyecto

En este proyecto encontraras una pagina web para visualizar la data de la serie Juego de tronos (GOT), la cual podrás filtrar por Casas, tales como casa Tyrell, Casa Lannister, Casa Baratheon, Casa Martell, Casa Stark, Casa Targaryen, Casa Greyjoi, Casa Mormont, Casa naharis, gente libre y una opción de None, en donde puedes encontrar los demás personajes de que se encuentran en la data.

así mismo, el usuario podrá organizar la información en orden alfabético, ya sea de la A a la Z o de la Z a la Z según en nombre de cada personaje.

\## 2. Historias de usuario y testeos de usabilidad

Historia 1:
    COMO: Como espectador de “Game of Trones (GOT)”
    QUIERO: Filtar por casas
    PARA: Ver las diferentes casas que existen.
    CRITERIOS DE ACEPTACION:
- La pagina debe mostrar las diferentes casa que existen.
- La pagina debe mostrar la imagen de cada casa para poder ingresar.
- Debe pasar Test Unitario.
- La vista debe ser responsive, se debe adaptar a las diferentes pantallas.

Historia 2: 
    COMO: Usuario de “GOT”
    QUIERO: Ordenar a los personajes en orden alfabetico descendente y ascendente
    PARA: Tener un orden especifico para la busqueda y agilizarla.
    CRITERIOS DE ACEPTACION:
- La pagina debe permitir ordenar de la A-Z y de Z-A dependiendo su nombre completo "full name".
- El usuario debera poder seleccionar el orden que desee obtener.
- Debe pasar Test Unitario. 
Yo como usuario de “GOT” quiero ordenar a los personajes en orden alfabetico descendiente y ascendiente para mejorar en la rapidez al momento de buscar un personaje en especifico, ya sea porque no lo encuentro ya que son muchos o simplemente para agilizar la busqueda.

Historia 3: 
    COMO: Usuario
    QUIERO: Visualizar las diferentes casas que existen y acceder a cada una de ellas
    PARA: Poder ver los diferentes personajes queexisten ne cada casa.
    CRITERIOS DE ACEPTACION:
- La pagina debe dejar ingresar al usuario a su respectiva casa casa y ver los  personajes que hay dependiendo la casa seleccionada.
- Debe retornar toda la informacion del personaje con su respectiva imagen. 

Historia 4: 
    COMO: Usuario
    QUIERO: Tener la posibilidad de retornar a la segunda vista estadno en la tercera.
    PARA: No tener que recargar toda la pagina desde el principio
    CRITERIOS DE ACEPTACION:
- La pagina debe permitir retornar sin ningun problema.
- La pagina debe permitir que el usuario ingrese a otra casa con la informacion adecuada 


\## 3. Prototipo de baja fidelidad.

Se realizo un boceto inicial  usando papel y lápiz,

<p><img src="https://github.com/leidypardo/DEV007-data-lovers/blob/main/src/gallery/imagen%20prototipo%20baja%20fidelidad.jpeg">
<p><img src="https://github.com/leidypardo/DEV007-data-lovers/blob/main/src/gallery/imagen%20prototipo.jpeg">

\## 4. Prototipo de alta fidelidad

Se diseño una Interfaz de Usuario mediante la plataforma de balsamig, en la cual podemos observar una idea general del proyectó, la cual cuenta con 3 vistas, así;

<h3>Vista1</h3>
<img src="https://github.com/leidypardo/DEV007-data-lovers/blob/main/src/gallery/1.jpeg">

<h3>Vista2</h3>
<img src="https://github.com/leidypardo/DEV007-data-lovers/blob/main/src/gallery/2.jpeg">

<h3>Vista3</h3>
<img src="https://github.com/leidypardo/DEV007-data-lovers/blob/main/src/gallery/3.jpeg">


Para tener una mejor perspectiva del proyecto, con funcionalidad y demás características se puede ingresar al siguiente link. <a href="https://balsamiq.cloud/s6uzhqq/pscs7rn/rC3FC">


\## 5. Implementación de la Interfaz de Usuario (HTML/CSS/JS)

Pantallazos Finales.
<p><img src="https://github.com/leidypardo/DEV007-data-lovers/blob/main/src/gallery/vista1Final.png">
<p><img src="https://github.com/leidypardo/DEV007-data-lovers/blob/main/src/gallery/vista2Final.png">
<p><img src="https://github.com/leidypardo/DEV007-data-lovers/blob/main/src/gallery/vista3Final.png">


\## 6. Pruebas unitarias


Este proyecto cuenta con Pruebas Unitarias (\_tests\_), con las funciones encargadas de procesar, filtrar y ordenar la data, las cuales cuentan con  una cobertura del 98.48% en branch, 100% stmts, 100% funcs y 100% lines. veamos:

<img src="https://github.com/leidypardo/DEV007-data-lovers/blob/main/src/gallery/testeo.png">


