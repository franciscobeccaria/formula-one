# Formula 1 - Project

Proyecto basado en la Formula 1. Nos traeremos la información desde API-FORMULA-1.

La idea es que sea una SPA construida mediante JavaScript Vanilla. Tendremos un header y un footer que estarán en todas las páginas. El main será lo unico que cambie dependiendo la url.

Páginas del proyecto:

- Home
  - Next race / Current race section (Esta idea fue descartada por ahora, ya que actualmente estamos en diciembre 2020 y todavía no tenemos la información sobre la próxima carrera. O al menos la API no tiene esa información)
  - Last Race section
  - Standings preview section
- Driver
  - Driver card
  - Driver history
- Team
- Standings
  - Season info
  - Driver standings
  - Team Standings
- Season
- Circuit
- Circuits

PROYECTO NO TERMINADO HASTA:

- Revisar page por page. Problemas de la API se queda en problemas de la API.
- Muchas validaciones. Ejemplos Weather, ejemplo respuestas con null, fotos mal hechas.
- Hay que resolver muchos temas de Estilos. Revisar página por página. (Voy anotando algunos: Circuit Card, Circuit Image in Circuit Page)
- Guardar algun tipo de key o algo así en sessionStorage para automatizar que si hubo una nueva carrera recargue la página y tome lo guardado en sessionStorage.
- Ver si puedo cambiar los parametros de la url de la api. con new URLSearchParams. O con la api que encontre y me mande a wpp.
- Esta quemado en el código el año 2020 en todos lados. Tengo que automatizarlo. Con la API está dificil. No se. Variable global creo que va a ser lo mejor. Ya que el 1 de enero de 2021 no creo que se actualice automaticamente la API.
- Recordar catch error o cosas así en cada petición y todos los lugares que debe ir.
- Arreglar de alguna forma, tipo crear una libreria reutilizable, para getElementByClass. Lo de los if que hago yo.
- Tengo que cambiar todos los getAlgo por name, hay muchos apostrofes y etc que la cagan, tiene que ser si o si por id.

NOTAS

- Tema Bandera de la nacion del piloto: No se pudo. 1. No se pudo en las Row porque la API no te entrega esa info. 2. No se pudo en Driver Page porque los archivos de cada bandera está guardado como: united-kingdom.svg y la API te entrega "British", pasar todas las nacionalidades del mundo tomaría tiempo que no quiero gastar. Por ahora, solo imprimimos lo que entrega la API: "British".

GISTS:

- Timestamp to Date: moment(TIMESTAMP).format('YYYY') (Revisar por más opciones en formatos)
- Date to Timestamp: new Date('2012.08.10').getTime()
- Tener en cuenta que por año hay 365.25 dias. Tenerlo en cuenta al hacer sumas o restas con timestamp.
- 86400000 milisegundos en 1 día.
- 31557600000 = milisegundisPorDia \* 365.25 = Milisegundos en 1 año
