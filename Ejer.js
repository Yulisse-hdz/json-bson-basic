    let estudiante = {
      nombre: "Rafa", 
      edad: 16, 
      inscrito: "inscrito", 
      promedio: 8.7, 
      materias: ["Matematicas", "JS"] 
    };


    console.log("Nombre:", estudiante.nombre);
    console.log("Edad:", estudiante.edad);
    console.log("Inscrito:", estudiante.inscrito);
    console.log("Promedio:", estudiante.promedio);
    console.log("Materia:", estudiante.materias[0]);

    console.table(estudiante)