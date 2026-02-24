use('mi_base_de_datos_Yyhc');

db.usuarios.insertOne({
    nombre: "Lupe",
    edad: 21,
    email: "lupe@example.com",
    isActive: false,
    saldo: 150.75,
    fechaRegistro: new Date(),
    genero: "Femenino",
    cuidad: "Escobedo",
    idiomas: ["Español", "Inglés"],
    numeroTelefonico: ["123-456-7890", "987-654-3210"]
    
});