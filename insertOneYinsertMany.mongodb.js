//El metodo insertOne() se utiliza para ingresar un solo documento en una coleccion
use('mi_base_de_datos_Yyhc');

db.createCollection("productos");

db.productos.insertOne({
    nombre: "Audifonos ",
    precio: 1999.99,
    categoria: "Electronica",
    stock: 20,
    enOferta: true,
    Fechadeingreso: new Date("2026-02-25"),



})

db.productos.insertMany([
    //Mouse inalambrico
    {
        nombre:"mouse inalambrico",
        precio: 689.59,
        categoria: "Accesorios",
        stock: 156,
        enOferta: false,
        descuento: 10,

        especificaciones: {
            conexion: "Bluetooth",
            bateria: "Recargable",
            categoria: "Accesorios",
            enOferta: false,
            descuento: 10,

            colores:["Negro", "Roja", "Rosa"],

            provedores:[
                {
                    nombre: "Red Dragon",
                    precio: 500,
                    ciudad: "China"
                }
            ]},

    },      
    
    //Teclado mecanico
    {
        nombre:"Teclado mecanico",
        precio:  299.99,
        categoria: "Accesorios",
        stock: 150,
        enOferta: false,

        especificaciones: {
            switches: "Cherry MX Red",
            retroiluminacion: "RGB",
            teclado: "Español",
            teclas: 104,
            conexion: "USB C",
            soporte:{
                windows: true,
                mac: true,
                linux: true
            }
        },

        garantia:{
            duracion: 24,
            tipo:"internacional",
            cobertura: ["defectos de fabricacion","retroiluminacion"]
        }
    },

    //Monitor 4K
    {
        nombre: "Monitor",
        precio: 600,
        categoria: "Electronica",
        stock: 50,
        enOferta: false,
    },

    //Silla
    {
        nombre: "Silla Gamer",
        precio: 1500,
        categoria: "Muebles",
        stock: 25,
        enOferta: false,
    },

    //Camara
    {
        nombre: "Camara",
        precio: 1200,
        categoria: "Electronica",
        stock: 30,
        enOferta: false,
    }




])