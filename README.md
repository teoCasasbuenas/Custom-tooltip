Custom-tooltip
==============

Este plugin permite pasar texto como atributo para ser mostrado al poner el ratón sobre un elemento configurado en un contenedor
que seguirá al ratón mientras se este sobre el elemento.

Configuración:

Se debe cargar jQuery, y el customtooltip.js o la versión minificada customtooltip.min.js

Uso:

Simple:
Usando el selector se llama el customtooltip.

$(elemento).customtooltip(); 

Avanzado:
var params = {
          &nbsp;&nbsp;&nbsp;&nbsp;fontSize: "10px", //Tamaño por defecto de la fuente<br>
          &nbsp;&nbsp;&nbsp;&nbsp;fontColor: '#000',  //Color del texto por defecto<br>
          &nbsp;&nbsp;&nbsp;&nbsp;containerWidth: "250px",  //Ancho del contenedor por defecto<br>
          &nbsp;&nbsp;&nbsp;&nbsp;tamper: ',',  //Elemento con el que romperemos la cadena de caracteres cuando aplica.<br>
          &nbsp;&nbsp;&nbsp;&nbsp;multiple:  false,  //Parámetro para indicar que se hará ruptura de la cadena<br>
          &nbsp;&nbsp;&nbsp;&nbsp;wrapper: 'p'  //Elemento HTML con el que envolveremos el texto dentro del custom tooltip<br>
          }<br>
$(elemento).customtooltip(params);
