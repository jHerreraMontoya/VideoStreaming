# VideoStreaming

# Autora
Jennifer Herrera Montoya

# Control de Versiones
_• v1.0.0 - Se añade archivo videoStreaming.html y VideoSystemObjects.js al repositorio_
```
• videoStreaming.html
 En este archivo encontramos las referencias a los diferentes ficheros .js:
      •BaseException.js
      •VideoSystemObjects.js
      •videoSystem.js
      •testVideoSystem.js
```
  
```
• VideoSystemObjects.js
  En este archivo encontramos la creacción de los objetos con sus propiedas, 
  las excepciones, la clase abstracta y la herencia.
      •Objeto Person
      •Objecto Category
      •Objeto Resource
      •Objeto Production (Clase abstracta)
      •Objeto Movie (Hereda de Production)
      •Objeto Serie (Hereda de Production)
      •Objeto Season
      •Objeto User
      •Objeto Coordinate
```
_• v1.0.1 - Se añade el archivo videoSystem.js, BaseException.js y testVideoSystem al repositorio_
```
• videoSystem.js
  En este archivo encontramos la creacción del Objeto VideoSystem con la implementación de un 
  Singleton y diferentes objetos con sus métodos correspondientes y excepciones.
      •Getter/Setter name
      •Categories -> Getter categories, addCategory, removeCategory
      •User -> Getter users, addUser, removeUser
      •Production -> Getter productions, addProduction, removeProduction
      •Actor -> Getter actors, addActor, removeActor
      •Director -> Getter directors, addDirector, removeDirector
```
```
• testVideoSystem.js
  En este archivo encontramos el test de la creacción de los diferentes objetos, 
  añadir, eliminar y ver si se generán las diferentes excepciones.
```
```
• BaseException.js
  En este archivo encontramos los mensajes de error que aparecerán cuando aparezca algún tipo de excepción
```
