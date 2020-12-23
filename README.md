# Formula 1 - Project

Link: https://formula-one.netlify.app/

Proyecto basado en la Formula 1. Nos traeremos la información desde API-FORMULA-1.

Es una SPA construida mediante JavaScript Vanilla. Tendremos un header y un footer que estarán en todas las páginas. El main será lo unico que cambie dependiendo la url.

En index.js tenemos en su mayoría eventos aunque también tenemos el html (Objeto MainHtml) que será insertado en el main dependiendo de la url.

En js.js tenemos los objetos, los "reales" son 5 (Driver, Team, Race, Circuit y Season), tenemos 3 que son objetos Row (Races, Drivers y Teams) que dibujan cada fila dependiendo las 3 tipos de tablas que tenemos y también estan los objetos API y UI. API se ocupa de hacer las peticiones a la API y UI se encarga del UI (dibujar el interfaz dependiendo de la respuesta de la API y también maneja el evento Search, que posteriormente dibuja en la interfaz los resultados dependiendo lo que devuelva la API).

En globalVariables.js tenemos las variables globales y funciones globales.

Utilizamos 1 librería externa: Axios.

Cabe aclarar que la API a veces falla porque estamos usando una versión gratuita.
