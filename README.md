# Formula 1 - Project

Proyecto basado en la Formula 1. Nos traeremos la información desde API-FORMULA-1.

Es una SPA construida mediante JavaScript Vanilla. Tendremos un header y un footer que estarán en todas las páginas. El main será lo unico que cambie dependiendo la url.

En index.js tenemos en su mayoría eventos aunque también tenemos el html (Objeto MainHtml) que será insertado en el main dependiendo de la url.

En js.js tenemos los objetos, los "reales" son 5 (Driver, Team, Race, Circuit y Season), tenemos 3 que son objetos Row (Races, Drivers y Teams) que dibujan cada fila dependiendo las 3 tipos de tablas que tenemos y también estan los objetos API y UI. API se ocupa de hacer las peticiones a la API y UI se encarga del UI (dibujar el interfaz dependiendo de la respuesta de la API y también maneja el evento Search, que posteriormente dibuja en la interfaz los resultados dependiendo lo que devuelva la API).

En globalVariables.js tenemos las variables globales y funciones globales.

Utilizamos 1 librería externa: Axios.

NOTAS

- Tema Bandera de la nacion del piloto: No se pudo. 1. No se pudo en las Row porque la API no te entrega esa info. 2. No se pudo en Driver Page porque los archivos de cada bandera está guardado como: united-kingdom.svg y la API te entrega "British", pasar todas las nacionalidades del mundo tomaría tiempo que no quiero gastar. Por ahora, solo imprimimos lo que entrega la API: "British".

GISTS:

- Timestamp to Date: moment(TIMESTAMP).format('YYYY') (Revisar por más opciones en formatos)
- Date to Timestamp: new Date('2012.08.10').getTime()
- Tener en cuenta que por año hay 365.25 dias. Tenerlo en cuenta al hacer sumas o restas con timestamp.
- 86400000 milisegundos en 1 día.
- 31557600000 = milisegundisPorDia \* 365.25 = Milisegundos en 1 año
- .closest. Muy bueno. getElementByClass en menos lineas para elementos con hijos.

  if (evt.target.closest('.circuit-card')) {
  Router.navigate(`/circuit/${evt.target.lastElementChild.innerHTML}`);
  }

  Opción reutilizable: Devuelve el elemento. Pero por ejemplo, si lo metemos dentro de un Router.navigate funciona mal, ya que se dispara Router.navigate. Habria que crear una función especial para Router.navigate. Otra opción es si se le aplica un lastElementChild o innerHTML como en el ejemplo, en la consola aparece null y no se dispara el Router.navigate, pero eso depende de cada función.

  function getElementByClase(className, e) {
  const found = e.target.closest('.' + className);
  if (found) return found;
  }

  Router.navigate(`/circuit/${getElementByClase('circuit-card', evt).lastElementChild.innerHTML}`);

  Lo malo es que suele dar un null en consola. Queda mal. Pero no hay ninguna problema para el usuario. Como deciamos anteriormente.

  - https://filisantillan.com/bits/urlsearchparams/
