"use-strict";
var VideoSystem = (function () { //La función anónima devuelve un método getInstance que permite obtener el objeto único
	var instantiated; //Objeto con la instancia única VideoSystem

	function init() { //Inicialización del Singleton

		//Declaración de la función constructora de la instancia VideoSystem
		function VideoSystem(){
			/*La función se invoca con el operador new*/
			if (!(this instanceof VideoSystem)) 
				throw new InvalidAccessConstructorException();

			/* Definición del atributo name */
			var _name = "";
			Object.defineProperty(this, 'name', {
				get:function(){
					return _name;
				},
				set:function(name = ""){
					name = name.trim();
					if (name === 'undefined' || name === "") throw new EmptyValueException("name");					
					_name = name;
				}		
			});		

			/* Definición del atributo users como array para contener todas los usuarios del Sistema. */
			var _users = []; //array con los usuarios del sistema.
			
			//Devuelve un iterator de los usuarios del sistema
			Object.defineProperty(this, 'users', {
				get:function(){
				    var nextIndex = 0;		    
				    return { //Iterador de usuarios, si no hacemos el iterador devolvemos el "contenedor"(array)
				       next: function(){ //Propiedad next que devuelve el contenido por el que vamos recorriendo, cada vez que llamemos a next vmaos a saber cuanto vale nextIndex
				           return nextIndex < _users.length ? //recorremos el array de 0 a la longitud de usuarios
							   {value: _users[nextIndex++].user, done: false} : //array con la posición que le hemos y le indicamos que no hemos terminado todavia
							   //Cuando ejecutamos nextIndex++ vale cero y cuando vuelve al next: vale 1, es un literal, devuelve el objeto a traves del value y el done para saber si hemos terminado o no
				               {done: true};
				       }
				    }
				}	
			});	

			//Comprobamos si se encuentra algún username en la posición del array
			function getUserNamePosition(user){
				if (!(user instanceof User)) { 
					throw new UserVideoSystemException ();
				}		

				function compareElements(element) {
					return(element.user.username === user.username)
				}
				
				return _users.findIndex(compareElements);		
			}

			//Comprobamos si se encuentra algún email en la posición del array
			function getUserEmailPosition(user){
				if (!(user instanceof User)) { 
					throw new UserVideoSystemException ();
				}		

				function compareElements(element) {
					return(element.user.email === user.email)
				}
				
				return _users.findIndex(compareElements);		
			}

			//Añade un nuevo usuario al gestor
			this.addUser = function(user){
				if (!(user instanceof User)) { 
					throw new UserVideoSystemException ("User");
				}

				if(user === null){
					throw new NullParamException("user");
				}
				
				var positionUserName = getUserNamePosition(user); 
				var positionEmail = getUserEmailPosition(user);

				if (positionUserName === -1){
					if(positionEmail === -1){
						_users.push(
							{
								user:user
							}
						);
					}else{
						throw new UserExistsException("email");
					}
				}else{
					throw new UserExistsException("username");
				}

				return _users.length;
			}

			//Elimina un usuario del gestor
			this.removeUser = function(user){
				if (!(user instanceof User)) { 
					throw new UserVideoSystemException ("User");
				}		

				if(user === null){
					throw new NullParamException("user");
				}

				var position = getUserPosition(user); 	

				if (position !== -1){

					_users.splice(position, 1);

				}else{
					
					throw new UserNoExistsException();
				
				}
				return _users.length;
			}

			//Dado un usuario, devuelve la posición de ese usuario en el array de usuario o -1 si no lo encontramos.
			function getUserPosition(user){
				if (!(user instanceof User)) { 
					throw new UserVideoSystemException ();
				}		

				function compareElements(element) {
					return(element.user.username === user.username || element.user.email === user.email)
				}
				
				return _users.findIndex(compareElements);		
			}


			/* Definición del atributo categories como array para contener todas las categorías del sistema. */
			var _categories = []; //array de categorías.

			//Devuelve un iterator de las categorias del sistema
			Object.defineProperty(this, 'categories', { //Sería exactamente igual que el de usuarios solo que con categories
				get:function(){
				    var nextIndex = 0;		    
				    return {
				       next: function(){
				           return nextIndex < _categories.length ?
				               {value: _categories[nextIndex++].category, done: false} :
				               {done: true};
				       }
				    }
				}	
			});	

			//Añade una nueva categoria al sistema
			this.addCategory = function(category){
				if (!(category instanceof Category)) { 
					throw new CategoryVideoSystemException ("Category");
				}
				
				if(category == null){
					throw new NullParamException("category");
				}

				var position = getCategoryPosition(category); 	

				if (position === -1){
					_categories.push(
						{
							category:category,
							productions: []
						}
					);
						
				}else{
					throw new CategoryExistsException();
				}
				
				return _categories.length;
			}

			//Elimina una categoria del sistema
			this.removeCategory = function(category){
				if (!(category instanceof Category)) { 
					throw new CategoryVideoSystemException ("Category");
				}

				if(category == null){
					throw new NullParamException("category");
				}

				var position = getCategoryPosition(category); 	
				
				if (position !== -1){
					if (category.name !== _categories.name){
						_categories.splice(position, 1);
					}
						
				}else{
					throw new CategoryNotExistsException();
				}
					
				return _categories.length;
			}

			//Dado una categoría, devuelve la posición de esa categoría en el array de categorías o -1 si no lo encontramos.
			function getCategoryPosition(category){
				if (!(category instanceof Category)) { 
					throw new CategoryVideoSystemException("Category");
				}		

				function compareElements(element) {
					return (element.category.name === category.name)
				}
				
				return _categories.findIndex(compareElements);		
			}

			// Definición del atributo productions como array para contener todas las productiones del sistema. */
			var _productions = []; //array de producciones

			//Devuelve un iterator de las producciones del sistema
			Object.defineProperty(this, 'productions', { //Sería exactamente igual que el de usuarios solo que con producciones
				get:function(){
				    var nextIndex = 0;		    
				    return {
				       next: function(){
				           return nextIndex < _productions.length ?
				               {value:_productions[nextIndex++].production, done: false} :
				               {done: true};
				       }
				    }
				}	
			});	

			//Añade una nueva producción al sistema
			this.addProduction = function(production){
				if (!(production instanceof Production)) { 
					throw new ProductionVideoSystemException ("Production");
				}
				
				if( production == null){
					throw new NullParamException("production");
				}

				var position = getProductionPosition(production); 	

				if (position === -1){
					_productions.push(
						{
							production:production
						}
					);
				}else{
					throw new ProductionExistsException();
				}

				return _productions.length;
			}

			//Elimina una producción del sistema
			this.removeProduction = function(production){

				if (!(production instanceof Production)) { 
					throw new ProductionVideoSystemException ("Production");
				}
				
				if(production == null){
					throw new NullParamException("production");
				}

				var position = getProductionPosition(production); 	

				if (position !== -1){
					if (production.title !== _productions.title){

						_productions.splice(position, 1);

					}	
				}else{
					throw new ProductionNoExistsException();
				}

				return _productions.length;
			}

			//Dado una production, devuelve la posición de esa production en el array de producciones o -1 si no lo encontramos.
			function getProductionPosition(production){
				if (!(production instanceof Production)) { 
					throw new ProdcutionVideoSystemException("Production");
				}		

				function compareElements(element) {
					return (element.production.title === production.title)
				}
				
				return _productions.findIndex(compareElements);		
			}

			/* Definición del atributo actors como array para contener todas los actores del sistema. */
			var _actors = []; //array de actores.

			//Devuelve un iterator de los actores del sistema
			Object.defineProperty(this, 'actors', { //Sería exactamente igual que el de usuarios solo que con categories
				get:function(){
				    var nextIndex = 0;		    
				    return {
				       next: function(){
				           return nextIndex < _actors.length ?
				               {value: _actors[nextIndex++].actor, done: false} :
				               {done: true};
				       }
				    }
				}	
			});	

			//Añade un nuevo actor al sistema
			this.addActor = function(actor){
				if (!(actor instanceof Person)) { 
					throw new ActorVideoSystemException("Person");
				}

				if(actor == null){
					throw new NullParamException("actor");
				}
				
				var position = getActorPosition(actor); 	
				if (position === -1){
					_actors.push(
						{
							actor:actor,
							productions: []
						}
					);
					
				}else{
					throw new ActorExistsException();
				}

				return _actors.length;
			}

			//Elimina un actor del sistema
			this.removeActor = function(actor){
				if (!(actor instanceof Person)) { 

					throw new ActorVideoSystemException ("Person");
				
				}		

				if(actor == null){

					throw new NullParamException("actor");
				
				}

				var position = getActorPosition(actor); 	

				if (position !== -1){
					if (actor.name !== _actors.name){
						_actors.splice(position, 1);
					}
					
				}else{
					throw new ActorNoExistsException();
				}
				return _actors.length;
			}


			//Dado un Actor, devuelve la posición de ese actor en el array de actores o -1 si no lo encontramos.
			function getActorPosition(actor){
				if (!(actor instanceof Person)) { 
					throw new ActorVideoSystemException("Person");
				}		

				function compareElements(element) {
					return (element.actor.name === actor.name && element.actor.lastname1 === actor.lastname1)
				}
				
				return _actors.findIndex(compareElements);		
			}

			/* Definición del atributo directors como array para contener todas los directores del sistema.*/
			var _directors = []; //array de actores.

			//Devuelve un iterator de los directores del sistema
			Object.defineProperty(this, 'directors', { //Sería exactamente igual que el de usuarios solo que con categories
				get:function(){
				    var nextIndex = 0;		    
				    return {
				       next: function(){
				           return nextIndex < _directors.length ?
				               {value: _directors[nextIndex++].director, done: false} :
				               {done: true};
				       }
				    }
				}	
			});	

			//Añade un nuevo director al sistema
			this.addDirector = function(director){

				if (!(director instanceof Person)) { 
					
					throw new DirectorVideoSystemException("Person");
				
				}

				if(director == null){

					throw new NullParamException("director");

				}

				var position = getDirectorPosition(director); 

				if (position === -1){
					_directors.push(
						{
							director:director,
							productions: []
						}
					);
					
				}else{
					throw new DirectorExistsException();
				}

				return _directors.length;
			}

			//Elimina un director del sistema
			this.removeDirector = function(director){
				if (!(director instanceof Person)) { 

					throw new DirectorVideoSystemException("Person");
				
				}	
				
				if(director == null){
					throw new NullParamException("director");
				}

				var position = getDirectorPosition(director); 	

				if (position !== -1){
					if (director.name !== _directors.name){
						_directors.splice(position, 1);
					}
				}else{
					throw new DirectorNoExistsException();
				}

				return _directors.length;
			}

			//Dado un director, devuelve la posición de ese director en el array de directores o -1 si no lo encontramos.
			function getDirectorPosition(director){
				if (!(director instanceof Person)) { 
					throw new DirectorVideoSystemException("Person");
				}		

				function compareElements(element) {
					return (element.director.name === director.name)
				}
				
				return _directors.findIndex(compareElements);		
			}
			
		} //Fin constructor VideoSystem
		VideoSystem.prototype = {}; 
		VideoSystem.prototype.constructor = VideoSystem;

		var instance = new VideoSystem();//Devolvemos el objeto VideoSystem para que sea una instancia única.
		Object.freeze(instance);
		return instance;
	} //Fin inicialización del Singleton
	return {
		// Devuelve un objeto con el método getInstance
		getInstance: function () { 
			if (!instantiated) { //Si la variable instantiated es undefined, priemera ejecución, ejecuta init.
				instantiated = init(); //instantiated contiene el objeto único
			}
			return instantiated; //Si ya está asignado devuelve la asignación.
		}
	};
})();

