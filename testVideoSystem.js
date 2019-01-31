    "use-strict";
    function test(){
    

    /*Creación de los objetos*/
    //Se crean objetos Person
        try {
            var persona1 = new Person("Maria","Ruiz",'05-25-1991');
            var persona2 = new Person("Jose","Perez",'04-02-1985');
            var persona3 = new Person("Ana","Garcia",'02-01-1982');
            console.log("Objetos pertenecientes a Person: ");
            console.log(persona1.toString());
            console.log(persona2.toString());
            console.log(persona3.toString());
        } catch(err){
            console.log(err);
        }
        
        //Creamos un objetos Person con fallos
        console.log("--------------------------------------------------");
        try {
            var persona3 = new Person();
            console.log(persona3.toString());
        } catch (err) {
            console.log("Objetos Person con fallos: ");
            console.log(err.toString());
        }
            
        try {
            var persona4 = new Person("Luisa");
            console.log(persona4.toString());
        } catch (err) {
            console.log(err.toString());
        }   
            
        try {
            var persona5 = new Person("Luisa","Martin");
            console.log(persona5.toString());
        } catch (err) {
            console.log(err.toString());
        }   
    
        console.log("--------------------------------------------------");
        //Se crean Objetos Category
        try {
            var categoria1 = new Category("Romántica");
            var categoria2 = new Category("Drama");
            var categoria3 = new Category("Comedia","Para echarse unas risas");
            console.log("Objetos Pertenecientes a Category: ");
            console.log(categoria1.toString());
            console.log(categoria2.toString());
            console.log(categoria3.toString());
        } catch (err) {
            console.log(err);
        }
        //Creamos un objetos Category con fallos
        console.log("--------------------------------------------------");
        try {
            var categoria4 = new Category();
            console.log(categoria4.toString());
        } catch (err) { 
            console.log("Objetos Category con fallos: ");
            console.log(err.toString());
        }


        console.log("--------------------------------------------------");
        //Se crean Objetos Resourse
        try {
            var resource1 = new Resource(120,"https://www.thejenhemon.es");
            var resource2 = new Resource(30,"https://www.thejenhemon.es");
            var resource3 = new Resource(210,"https://www.thejenhemon.es");
            console.log("Objetos Pertenecientes a Resource: ");
            console.log(resource1.toString());
            console.log(resource2.toString());
            console.log(resource3.toString());
        } catch (err) {
            console.log(err);
        }
        //Creamos un objetos Resource con fallos
        console.log("--------------------------------------------------");
        try {
            var resource4 = new Resource();
            console.log(resource4.toString());
        } catch (err) { 
            console.log("Objetos Resource con fallos: ");
            console.log(err.toString());
        }

        try {
            var resource5 = new Resource(180);
            console.log(resource5.toString());
        } catch (err) { 
            console.log(err.toString());
        }

        console.log("--------------------------------------------------");
        //Se crean Objetos Production
        console.log("Objeto Production: ");
        try {
            var production1 = new Production("Harry Potter y El Cáliz de Fuego","09/12/1998");
            var production2 = new Production("Guardianes de la Galaxia Vol 1","12/08/2003");
            var production3 = new Production("Vengadores","07/07/2005");
            console.log("Objetos Pertenecientes a Production: ");
            console.log(production1.toString());
            console.log(production2.toString());
            console.log(production3.toString());
        } catch (err) {
            console.log(err.toString());
        }

        //Creamos un objetos Production con fallos
        console.log("--------------------------------------------------");
        try {
            var production4 = new Production();
            console.log(production4.toString());
        } catch (err) { 
            console.log("Objetos Production con fallos: ");
            console.log(err.toString());
        }

        console.log("--------------------------------------------------");
        //Se crean Objetos Coordinate
        try {
            var coordinate1 = new Coordinate(65,90);
            var coordinate2 = new Coordinate(-90,-165);
            var coordinate3 = new Coordinate(-70,110);
            console.log("Objetos Pertenecientes a Coordinate: ");
            console.log("Coordenadas1: Latitud: " + coordinate1.latitude + " Longitud: " + coordinate1.longitude); 
            console.log("Coordenadas1: " + coordinate1.getSexagesimalLatitude());
            console.log("Coordenadas1: " + coordinate1.getSexagesimalLongitude());
            
            console.log("Coordenadas2: Latitud: " + coordinate2.latitude + " Longitud: " + coordinate2.longitude); 
            console.log("Coordenadas2: " + coordinate2.getSexagesimalLatitude());
            console.log("Coordenadas2: " + coordinate2.getSexagesimalLongitude());
            
            console.log("Coordenadas3: Latitud: " + coordinate3.latitude + " Longitud: " + coordinate3.longitude); 
            console.log("Coordenadas3: " + coordinate3.getSexagesimalLatitude());
            console.log("Coordenadas3: " + coordinate3.getSexagesimalLongitude());
            

        } catch (err) {
            console.log(err.toString());
        }
        
        
        console.log("--------------------------------------------------");
        //Se crean Objetos Movie
        try {
            var movie1 = new Movie("Harry Potter y El Cáliz de Fuego","11/25/2005",resource1 + "\n","Latidud: " + coordinate1.getSexagesimalLatitude() + " Longitud: " + coordinate1.getSexagesimalLongitude());
            var movie2 = new Movie("Guardianes de la Galaxia Vol 1","08/14/2004",resource2 + "\n","Latidud: " + coordinate2.getSexagesimalLatitude() + " Longitud: " + coordinate2.getSexagesimalLongitude());
            var movie3 = new Movie("Vengadores","07/07/2005",resource3 + "\n","Latidud: " + coordinate3.getSexagesimalLatitude() + ", Longitud: " + coordinate3.getSexagesimalLongitude());
            console.log("Objetos Pertenecientes a Movie: ");
            console.log(movie1.toString());
            console.log(movie2.toString());
            console.log(movie3.toString());
        } catch (err) {
            console.log(err.toString());
        }

        //Creamos objetos Movie con fallos
        console.log("--------------------------------------------------");
        try {
            var movie4 = new Movie();
            console.log(movie4.toString());
        } catch (err) { 
            console.log("Objetos Movie con fallos: ");
            console.log(err.toString());
        }

        try {
            var movie5 = new Movie("Guardianes de la Galaxia Vol 1");
            console.log(movie5.toString());
        } catch (err) { 
            console.log(err.toString());
        }

        try {
            var movie5 = new Movie("Guardianes de la Galaxia Vol 1","08/12/2003");
            console.log(movie5.toString());
        } catch (err) { 
            console.log(err.toString());
        }

        console.log("--------------------------------------------------");
        //Se crean Objetos Seasons
        try {
            var season1 = new Season("Temporada 1",["Episodio 1","Episodio 2"]);
		    var season2 = new Season("Temporada 2",["Episodio 1","Episodio 2","Episodio 3"]);
            var season3 = new Season("Temporada 3");
            console.log("Objetos pertenecientes a Seasons: ");
            console.log(season1.toString());
            console.log(season2.toString());
            console.log(season3.toString());
        } catch (err) {
            console.log(err);
        }

        //Creamos objetos Seasons con fallos
        try {
            var season4 = new Season();
        } catch (err) {
            console.log("Objetos Seasons con fallos: ");
            console.log(err.toString());
        }
        console.log("--------------------------------------------------");
        //Se crean Objetos Serie
        try {
            var serie1 = new Serie("The Big Bang Theory","09/24/2007",[season1,season2]);
            var serie2 = new Serie("Anatomia de Grey","03/27/2005",[season1,season2]);
            var serie3 = new Serie("The Good Doctor","09/25/2017",[season1,season2]);
            console.log("Objetos Pertenecientes a Serie: ");
            console.log(serie1.toString());
            console.log(serie2.toString());
            console.log(serie3.toString());
        } catch (err) {
            console.log(err.toString());
        }

        //Creamos objetos Serie con fallos
        console.log("--------------------------------------------------");
        try {
            var serie4 = new Serie();
            console.log(serie4.toString());
        } catch (err) { 
            console.log("Objetos Serie con fallos: ");
            console.log(err.toString());
        }
        
        try {
            var serie5 = new Serie("Stranger Things");
            console.log(serie5.toString());
        } catch (err) { 
            console.log(err.toString());
        }
        
        console.log("--------------------------------------------------");
        //Se crean Objetos User
        try {
            var u1 = new User("pepito","pepito@gmail.com","%pepiTo0");
            var u2 = new User("manolito","manolito@gmail.com","%manoliTo0");
            var u3 = new User("ricardito","ricardito@gmail.com","%ricardiTo0");
            var u4 = new User("ito","ito@gmail.com","%itoiTo0");
            console.log("Objetos pertenecientes a los usuarios");
            console.log(u1.toString());
            console.log(u2.toString());
            console.log(u3.toString());
            console.log(u4.toString());
        } catch (err) {
            console.log(err);
        }

        //Creamos objetos User con fallos
        console.log("--------------------------------------------------");
        try {
            var u5 = new User();
            console.log(u5.toString());
        } catch (err) {
            console.log("Objetos User con fallos: ");
            console.log(err.toString());
        }

        try {
            var u5 = new User("Germancito");
            console.log(u5.toString());
        } catch (err) {
            console.log(err.toString());
        }
        
        try {
            var u5 = new User("Germancito","germancito@gmail.com");
            console.log(u5.toString());
        } catch (err) {
            console.log(err.toString());
        }

        console.log("--------------------------------------------------");


        //VideoSystem
        /*Nombre del sistema*/
        try{
            var VSystem = VideoSystem.getInstance(); //Creamos una variable la cual le asignamos el getInstance de VideoSystem   
            VSystem.name = "The JenHeMon"; //A la variable creada anteriormente a traves del objeto name se le asigna un nombre
            console.log ("Instancia VideoSystem: " +VSystem.name);
        }catch(err){
            console.log("Error: " + err.toString());
        }
        
        function testCategory(){
            console.log("--------------------------------------------------");
            //Añadimos las categorias
            try {
                console.log("Añadimos la primera categoria: " + categoria1.name + ", la longitud es: " + VSystem.addCategory(categoria1));
                console.log("Añadimos la segunda categoria: " + categoria2.name + ", la longitud es: " + VSystem.addCategory(categoria2));
                console.log("Añadimos la tercera categoria: " + categoria3.name + ", la longitud es: " + VSystem.addCategory(categoria3));
            } catch (err) {
                console.log("Error: " + err.toString());
            }
            
            console.log("--------------------------------------------------");
            //Recorremos las categorías.
            console.log ("Recorremos las categorías.");
            var categories = VSystem.categories;
            var category = categories.next();
            while (category.done !== true){
                console.log ("Name: "+category.value.name);		
                category = categories.next();
            }	
            console.log("--------------------------------------------------");
            //Añadimos una categoria ya existente
            try {
                console.log("Añadimos la primera categoria: " + categoria1.name + ", la longitud es: " + VSystem.addCategory(categoria1));
            } catch (err) {
                console.log("Se ha intentado añadir la categoria: " + categoria1.name + " -> " + err);
            } 

            console.log("--------------------------------------------------");
            //Eliminamos una categoria
            try {
                console.log("Eliminamos la segunda categoria: " + categoria2.name + ", la longitud es: " + VSystem.removeCategory(categoria2));
            } catch (err) {
                console.log("Error: " + err.toString());
            }

            console.log("--------------------------------------------------");
            //Recorremos las categorías.
            console.log ("Recorremos las categorías.");
            var categories = VSystem.categories;
            var category = categories.next();
            while (category.done !== true){
                console.log ("Name: "+category.value.name);		
                category = categories.next();
            }

            console.log("--------------------------------------------------");
            //Eliminamos una categoria que NO existe en el sistema
            try {
                console.log("Eliminamos la segunda categoria: " + categoria2.name + ", la longitud es: " + VSystem.removeCategory(categoria2));
            } catch (err) {
                console.log("Se ha intentado eliminar la categoria: " + categoria2.name + " -> " + err);
            }
        }

    function testUser(){
        console.log("--------------------------------------------------");
        //Añadimos los usuarios
        try {
            console.log("Añadimos el primer usuario: Username: " + u1.username + ", Email: " + u1.email + ", Password "+u1.password+", la longitud es: " + VSystem.addUser(u1));
            console.log("Añadimos el segundo usuario: Username: " + u2.username + ", Email: " + u2.email + ", Password "+u2.password+", la longitud es: " + VSystem.addUser(u2));
            console.log("Añadimos el tercer usuario: Username: " + u3.username + ", Email: " + u3.email + ", Password "+u3.password+", la longitud es: " + VSystem.addUser(u3));
            console.log("Añadimos el cuarto usuario: Username: " + u4.username + ", Email: " + u4.email + ", Password "+u4.password+", la longitud es: " + VSystem.addUser(u4));
        } catch (err) {
            console.log("Error: " + err.toString());
        }
        
        console.log("--------------------------------------------------");
        console.log ("Recorremos los Usuarios.");
        var users = VSystem.users;
        var user =  users.next();
        while (user.done !== true){
            console.log ("Username: " + user.value.username+",Email: "+user.value.email+",Password: "+user.value.password);
            user = users.next();
        }

        console.log("--------------------------------------------------");
        //Añadimos un usuario ya existente
        try {
            console.log("Añadimos el tercer usuario: Username: " + u3.username + ", Email: " + u3.email + ", Password "+u3.password+", la longitud es: " + VSystem.addUser(u3));
        } catch (err) {
            console.log("Se ha intentado añadir el usuario:Username: " + u3.username + ", Email: " + u3.email + ", Password "+ u3.password+ " -> " + err);
        }

        console.log("--------------------------------------------------");
        //Eliminamos un usuario
        try {
            console.log("Eliminamos el cuarto usuario: Username: " + u4.username + ", Email: " + u4.email + ", Password " + u4.password + ", la longitud es: " + VSystem.removeUser(u4));
        } catch (err) {
           console.log("Error: " + err.toString());
        }

        console.log("--------------------------------------------------");
        console.log ("Recorremos los Usuarios.");
        var users = VSystem.users;
        var user =  users.next();
        while (user.done !== true){
            console.log ("Username: " + user.value.username+",Email: "+user.value.email+",Password: "+user.value.password);
            user = users.next();
        }

        console.log("--------------------------------------------------");
        //Eliminamos un usuario que NO existe en el sistema
        try {
            console.log("Eliminamos el cuarto usuario: Username: " + u4.username + ", Email: " + u4.email + ", Password " + u4.password + ", la longitud es: " + VSystem.removeUser(u4));
        } catch (err) {
            console.log("Se ha intentado eliminar el usuario: Username: " + u4.username + ", Email: " + u4.email + ", Password "+ u4.password+ " -> " + err);
        }
    
    }   


    function testProduction(){
        console.log("--------------------------------------------------");
        //Añadimos la producciones
        try {
            console.log("Añadimos la primera producción: Movie: " + movie1.title + ", la longitud es: "+VSystem.addProduction(movie1));
            console.log("Añadimos la segunda producción: Serie: " + serie1.title + ", la longitud es: "+VSystem.addProduction(serie1));
            console.log("Añadimos la tercera producción: Movie: " + movie2.title + ", la longitud es: "+VSystem.addProduction(movie2));
            console.log("Añadimos la cuarta producción: Serie: " + serie3.title + ", la longitud es: "+VSystem.addProduction(serie3));
        } catch (err) {
            console.log("Error: " + err.toString());
        }
        
        console.log("--------------------------------------------------");
        //Recorremos las Producciones.
        console.log ("Recorremos las producciones.");
        var productions = VSystem.productions;
        var production = productions.next();
        while (production.done !== true){
            console.log ("Title: "+production.value.title+", publication: "+production.value.publication.toLocaleDateString());		
            production = productions.next();
        }	
        
        console.log("--------------------------------------------------");
        //Añadimos una Producción ya existente
        try {
            console.log("Añadimos la cuarta producción: Serie: " + serie3.title + ", la longitud es: "+VSystem.addProduction(serie3));
        } catch (err) {
            console.log("Se ha intentado añadir cuarta produccón: Serie: " + serie3.title + " -> " + err);
        }

        console.log("--------------------------------------------------");
        //Eliminamos una Producción
        try {
            console.log("Eliminamos la cuarta producción: Serie: " + serie3.title + ", la longitud es: " + VSystem.removeProduction(serie3));
        } catch (err) {
           console.log("Error: " + err.toString());
        }

        console.log("--------------------------------------------------");
        //Recorremos las Producciones.
        console.log ("Recorremos las producciones.");
        var productions = VSystem.productions;
        var production = productions.next();
        while (production.done !== true){
            console.log ("Title: "+production.value.title+", publication: "+production.value.publication.toLocaleDateString());		
            production = productions.next();
        }

        console.log("--------------------------------------------------");
        //Eliminamos una Producción que NO existe en el sistema
        try {
            console.log("Eliminamos la cuarta producción: Serie: " + serie3.title + ", la longitud es: " + VSystem.removeProduction(serie3));
        } catch (err) {
            console.log("Se ha intentado eliminar la cuarta produccón: Serie: " + serie3.title + " -> " + err);
        }
    }

    function testActor(){
        try {
            var a1 = new Person("Benedict","Cumberbatch","07/19/1976");
            var a2 = new Person("Bradley","Cooper","01/05/1975");
            var a3 = new Person("Emilia","Clarke","10/23/1986");
            var a4 = new Person("Megan","Fox","05/16/1986");
            console.log("Objetos Pertenecientes actores: ");
            console.log(a1.toString());
            console.log(a2.toString());
            console.log(a3.toString());
            console.log(a3.toString());
        } catch (err) {
            console.log(err.toString());
        }

        console.log("--------------------------------------------------");
        //Añadimos los actores
        try {
            console.log("Añadimos el primer actor: Nombre: " + a1.name + ", Apellido: " + a1.lastname1 + ", Fecha Nacimiento: " + a1.born.toLocaleDateString() + ", la longitud es: "+VSystem.addActor(a1));
            console.log("Añadimos el segundo actor: Nombre: " + a2.name + ", Apellido: " + a2.lastname1 + ", Fecha Nacimiento: " + a2.born.toLocaleDateString() + ", la longitud es: "+VSystem.addActor(a2));
            console.log("Añadimos el tercer actor: Nombre: " + a3.name + ", Apellido: " + a3.lastname1 + ", Fecha Nacimiento: " + a3.born.toLocaleDateString() + ", la longitud es: "+VSystem.addActor(a3));
            console.log("Añadimos el cuarto actor: Nombre: " + a4.name + ", Apellido: " + a4.lastname1 + ", Fecha Nacimiento: " + a4.born.toLocaleDateString() + ", la longitud es: "+VSystem.addActor(a4));
        } catch (err) {
            console.log("Error: " + err.toString());
        }

        console.log("--------------------------------------------------");
        //Recorremos los Actores.
        console.log ("Recorremos los actores.");
        var actors = VSystem.actors;
        var actor = actors.next();
        while (actor.done !== true){
            console.log ("Name: "+actor.value.name+", LastName1: "+actor.value.lastname1+", born: "+actor.value.born.toLocaleDateString());		
            actor = actors.next();
        }
        
        console.log("--------------------------------------------------");
        //Añadimos un actor ya existente
        try {
            console.log("Añadimos el primer actor: Nombre: " + a1.name + ", Apellido: " + a1.lastname1 + ", Fecha Nacimiento: " + a1.born.toLocaleDateString() + ", la longitud es: "+VSystem.addActor(a1));
        } catch (err) {
            console.log("Se ha intentado añadir el actor: Nombre: " + a1.name + ", Apellido: " + a1.lastname1 + ", Fecha Nacimiento: " +  a1.born.toLocaleDateString() + " -> " + err);
        }

        console.log("--------------------------------------------------");
        //Eliminamos un  actor
        try {
            console.log("Eliminamos el cuarto actor: Nombre: " + a4.name + " Apellido: " + a4.lastname1 + " Fecha Nacimiento: " + a4.born.toLocaleDateString() + ", la longitud es: " + VSystem.removeActor(a4));
        } catch (err) {
           console.log("Error: " + err.toString());
        }        

        console.log("--------------------------------------------------");
        //Recorremos los Actores.
        console.log ("Recorremos los actores.");
        var actors = VSystem.actors;
        var actor = actors.next();
        while (actor.done !== true){
            console.log ("Name: "+actor.value.name+", LastName1: "+actor.value.lastname1+", born: " + actor.value.born.toLocaleDateString());		
            actor = actors.next(); 
        }

        console.log("--------------------------------------------------");
        //Eliminamos un actor que NO existe en el sistema
        try {
            console.log("Eliminamos el cuarto actor: Nombre: " + a4.name + ", Apellido: " + a4.lastname1 + ", Fecha Nacimiento: " + a4.born.toLocaleDateString() + ", la longitud es: " + VSystem.removeActor(a4));
        } catch (err) {
           console.log("Se ha intentado Eliminar el actor: Nombre: " + a4.name + ", Apellido: " + a4.lastname1 + ", Fecha Nacimiento: " +  a4.born.toLocaleDateString() + " -> " + err);
        }      

    }

    function testDirector(){

        try {
            var d1 = new Person("Steven","Spielberg","12/18/1976");
            var d2 = new Person("George","Lucas","05/14/1944");
            var d3 = new Person("Sofia","Coppola","05/14/1971");
            var d4 = new Person("Isabel","Coixet","04/09/1960");  
            console.log("Objetos Pertenecientes a directores: ");
            console.log(d1.toString());
            console.log(d2.toString());
            console.log(d3.toString());
            console.log(d4.toString());
        } catch (err) {
            console.log(err.toString());
        }
       
        
        console.log("--------------------------------------------------");
        //Añadimos los directores
        try {
            console.log("Añadimos el primer director: Nombre: " + d1.name + ", Apellido: " + d1.lastname1 + ", Fecha Nacimiento: " + d1.born.toLocaleDateString() + ", la longitud es: "+VSystem.addDirector(d1));
            console.log("Añadimos el segundo director: Nombre: " + d2.name + ", Apellido: " + d2.lastname1 + ", Fecha Nacimiento: " + d2.born.toLocaleDateString() + ", la longitud es: "+VSystem.addDirector(d2));
            console.log("Añadimos el tercer director: Nombre: " + d3.name + ", Apellido: " + d3.lastname1 + ", Fecha Nacimiento: " + d3.born.toLocaleDateString() + ", la longitud es: "+VSystem.addDirector(d3));
            console.log("Añadimos el cuarto director: Nombre: " + d4.name + ", Apellido: " + d4.lastname1 + ", Fecha Nacimiento: " + d4.born.toLocaleDateString() + ", la longitud es: "+VSystem.addDirector(d4));
        } catch (err) {
            console.log("Error: " + err.toString());
        }

        console.log("--------------------------------------------------");
        //Recorremos los Directores.
        console.log ("Recorremos los Directores.");
        var directors = VSystem.directors;
        var director = directors.next();
        while (director.done !== true){
            console.log ("Name: "+director.value.name+", LastName1: "+director.value.lastname1+", born: "+director.value.born.toLocaleDateString());		
            director = directors.next();
        }
        
        console.log("--------------------------------------------------");
        //Añadimos un director ya existente
        try {
            console.log("Añadimos el primer director: Nombre: " + d1.name + ", Apellido: " + d1.lastname1 + ", Fecha Nacimiento: " + d1.born.toLocaleDateString() + ", la longitud es: "+VSystem.addDirector(d1));
        } catch (err) {
            console.log("Se ha intentado añadir el actor: Nombre: " + d1.name + ", Apellido: " + d1.lastname1 + ", Fecha Nacimiento: " +  d1.born.toLocaleDateString() + " -> " + err);
        }

        console.log("--------------------------------------------------");
        //Eliminamos un director
        try {
            console.log("Eliminamos el cuarto director: Nombre: " + d4.name + " Apellido: " + d4.lastname1 + " Fecha Nacimiento: " + d4.born.toLocaleDateString() + ", la longitud es: " + VSystem.removeDirector(d4));
        } catch (err) {
           console.log("Error: " + err.toString());
        }        

        console.log("--------------------------------------------------");
        //Recorremos los Directores.
        console.log ("Recorremos los Directores.");
        var directors = VSystem.directors;
        var director = directors.next();
        while (director.done !== true){
           console.log ("Name: "+director.value.name+", LastName1: "+director.value.lastname1+", born: "+director.value.born.toLocaleDateString());		
           director = directors.next();
        }

        console.log("--------------------------------------------------");
        //Eliminamos un director que NO existe en el sistema
        try {
            console.log("Eliminamos el cuarto director: Nombre: " + d4.name + ", Apellido: " + d4.lastname1 + ", Fecha Nacimiento: " + d4.born.toLocaleDateString() + ", la longitud es: " + VSystem.removeDirector(d4));
        } catch (err) {
           console.log("Se ha intentado Eliminar el director: Nombre: " + d4.name + ", Apellido: " + d4.lastname1 + ", Fecha Nacimiento: " +  d4.born.toLocaleDateString() + " -> " + err);
        }      
       
    }

        console.log("\n######_testCategory_######");
            testCategory(); //Test para comprobar que se añaden, se eliminan y se muestran correctamente las categorias
        console.log("######_FIN_tesCategory_######");

        console.log("\n######_testUser_######");
            testUser(); //Test para comprobar que se añaden, se eliminan y se muestran correctamente los usuarios
        console.log("######_FIN_testUser_######");
        
        console.log("\n######_testProductions_######");
            testProduction(); //Test para comprobar que se añaden, se eliminan y se muestran correctamente las producciones
        console.log("######_FIN_testProductions_######");
        
        console.log("\n######_testActors_######");
            testActor(); //Test para comprobar que se añaden, se eliminan y se muestran correctamente los actores
        console.log("######_FIN_testActors_######");
        
        console.log("\n######_testDirectors_######");
            testDirector(); //Test para comprobar que se añaden, se eliminan y se muestran correctamente los directores
        console.log("######_FIN_testDirectors_######");
        
        

    }
    window.onload = test;