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

- Agregar a Season Page un boton para ir a Standigs de esa temporada.
- Hay que resolver muchos temas de Estilos. Revisar página por página. (Voy anotando algunos: Circuit Card, Circuit Image in Circuit Page)
- Guardar algun tipo de key o algo así en sessionStorage para automatizar que si hubo una nueva carrera recargue la página y tome lo guardado en sessionStorage.
- Ver si puedo cambiar los parametros de la url de la api. con new URLSearchParams. O con la api que encontre y me mande a wpp.
- Esta quemado en el código el año 2020 en todos lados. Tengo que automatizarlo. Con la API está dificil. No se. Variable global creo que va a ser lo mejor. Ya que el 1 de enero de 2021 no creo que se actualice automaticamente la API.
