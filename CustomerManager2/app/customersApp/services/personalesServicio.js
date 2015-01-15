//Este servicio maneja la recuperacion de datos y es usado por los controladores
//3 opciones: (server, factory y provider) cada uno haciendo lo mismo
//tan solo estructurando las funciones/datos diferentemente
app.service('personalesServicio', function(){
    this.getPersonales = function(){
        return personales;
    };

    this.insertarPersonal = function(nombre, apellido, ciudad){
        var topID = personales.length + 1;
        personales.push({
            id: topID,
            nombre: nombre,
            apellido: apellido,
            ciudad: ciudad
        });
    };

    this.actualizarPersonal = function(id, nombre, apellido, ciudad){
       for(var i = personales.length - 1; i >= 0; i--){
            if(personales[i].id === id){
               personales[i].nombre = nombre;
               personales[i].apellido = apellido;
               personales[i].ciudad = ciudad;
                break;
            }
        }
    };

    this.borrarPersonal = function(id){
        for(var i = personales.length - 1; i >= 0; i--){
            if(personales[i].id === id){
                personales.splice(i, 1);
                break;
            }
        }
    };

    this.getPersonal = function(id){
        for(var i = 0; i< personales.length; i++){
            if(personales[i].id === id){
                return personales[i];
            }
        }

        return null;
    };

    var personales = [
        {
            id: 1, nombre: 'Lee', apellido: 'Carroll', direccion: '1234 Anywhere St.', ciudad: 'Phoenix', genero: 'male',
            ordenes: [
                { producto: 'Basket', precio: 29.99, cantidad: 1, ordenTotal: 29.99 },
                { producto: 'Yarn', precio: 9.99, cantidad: 1, ordenTotal: 39.96 },
                { producto: 'Needes', precio: 5.99, cantidad: 1, ordenTotal: 5.99 }
            ]
        },
        {
            id: 2, nombre: 'Jesse', apellido: 'Hawkins', direccion: '89 W. Center St.', ciudad: 'Atlanta', genero: 'male',
            ordenes: [
                { producto: 'Table', precio: 329.99, cantidad: 1, ordenTotal: 329.99 },
                { producto: 'Chair', precio: 129.99, cantidad: 4, ordenTotal: 519.96 },
                { producto: 'Lamp', precio: 89.99, cantidad: 5, ordenTotal: 449.95 },
            ]
        },
        {
            id: 3, nombre: 'Charles', apellido: 'Sutton', direccion: '455 7th Ave.', ciudad: 'Quebec', genero: 'male',
            ordenes: [
                { producto: 'Call of Duty', precio: 59.99, cantidad: 1, ordenTotal: 59.99 },
                { producto: 'Controller', precio: 49.99, cantidad: 1, ordenTotal: 49.99 },
                { producto: 'Gears of War', precio: 49.99, cantidad: 1, ordenTotal: 49.99 },
                { producto: 'Lego ciudad', precio: 49.99, cantidad: 1, ordenTotal: 49.99 }
            ]
        },
        {
            id: 4, nombre: 'Albert', apellido: 'Einstein', direccion: '8966 N. Crescent Dr.', ciudad: 'New York ciudad', genero: 'male',
            ordenes: [
                { producto: 'Baseball', precio: 9.99, cantidad: 5, ordenTotal: 49.95 },
                { producto: 'Bat', precio: 19.99, cantidad: 1, ordenTotal: 19.99 }
            ]
        },
        {
            id: 5, nombre: 'Sonya', apellido: 'Williams', direccion: '55 S. Hollywood Blvd', ciudad: 'Los Angeles', genero: 'male',
        },
        {
            id: 6, nombre: 'Victor', apellido: 'Bryan', direccion: '563 N. Rainier St.', ciudad: 'Seattle', genero: 'male',
            ordenes: [
                { producto: 'Speakers', precio: 499.99, cantidad: 1, ordenTotal: 499.99 },
                { producto: 'iPod', precio: 399.99, cantidad: 1, ordenTotal: 399.99 }
            ]
        },
        {
            id: 7, nombre: 'Lynette', apellido: 'Gonzalez', direccion: '25624 Main St.', ciudad: 'Albuquerque', genero: 'male',
            ordenes: [
                { producto: 'Statue', precio: 429.99, cantidad: 1, ordenTotal: 429.99 },
                { producto: 'Picture', precio: 1029.99, cantidad: 1, ordenTotal: 1029.99 }
            ]
        },
        {
            id: 8, nombre: 'Erick', apellido: 'Pittman', direccion: '33 S. Lake Blvd', ciudad: 'Chicago', genero: 'male',
            ordenes: [
                { producto: 'Book: AngularJS Development', precio: 39.99, cantidad: 1, ordenTotal: 39.99 },
                { producto: 'Book: Basket Weaving Made Simple', precio: 19.99, cantidad: 1, ordenTotal: 19.99 }
            ]
        },
        {
            id: 9, nombre: 'Alice', apellido: 'precio', direccion: '3354 Town', ciudad: 'Cleveland', genero: 'male',
            ordenes: [
                { producto: 'Webcam', precio: 85.99, cantidad: 1, ordenTotal: 85.99 },
                { producto: 'HDMI Cable', precio: 39.99, cantidad: 2, ordenTotal: 79.98 }
            ]
        },
        {
            id: 10, nombre: 'Gerard', apellido: 'Tucker', direccion: '6795 N. 53 W. Bills Dr.', ciudad: 'Buffalo', genero: 'male',
            ordenes: [
                { producto: 'Fan', precio: 49.99, cantidad: 4, ordenTotal: 199.96 },
                { producto: 'Remote Control', precio: 109.99, cantidad: 1, ordenTotal: 109.99 }
            ]
        },
        {
            id: 11, nombre: 'Shanika', apellido: 'Passmore', direccion: '459 S. International Dr.', ciudad: 'Orlando', genero: 'male'
        }
    ];
});


