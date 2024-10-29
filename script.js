class Usuario {
constructor (nombre, apellido, correo, puesto, curso, mensaje){
this.nombre = nombre;
this.apellido = apellido;
this.correo = correo;
this.puesto = puesto;
this.curso=[];
this.mensaje=[];


}





addCourse(nombreCurso, nivel) {
    const CursoAgregado = { nombre: nombreCurso, nivel: nivel }; 
    this.curso.push(CursoAgregado); 

}

removeCurso(nombreCurso) {

    const cursoEliminar= this.curso.findIndex(curso => curso.nombre === nombreCurso);
    if (  cursoEliminar!== -1) {
        this.curso.splice(cursoEliminar, 1);
    }
}


editCurso(nombreCurso, nuevoNombre, nuevoNivel) {
    const cursoEditar = this.curso.find(curso => curso.nombre === nombreCurso);

    if (!cursoEditar) {
        console.log("Curso no encontrado");
        return; 
    }
    else


    cursoEditar.nombre = nuevoNombre || cursoEditar.nombre;
    cursoEditar.nivel = nuevoNivel || cursoEditar.nivel;
}



enviarMensaje(from, men){

    this.mensaje.push({ from, men, timestamp: new Date() });
    this.desdeCorreo(from, this.correo, men);

}

desdeCorreo (from, para, men){

    console.log('Este mensaje ha sido enviado por ${from} a ${para}');

}


showMessagesHistory() {
    console.log("Historial de mensajes:");
    this.mensaje.forEach(({ from, message, timestamp }, index) => {
        console.log(`${index + 1}. De: ${from} - "${message}" - ${timestamp}`);
    });


}
}



let estudiante1 = new Usuario ({nombre: 'Rafael', apellido: 'Fife', correo: 'rfife@rhyta.com', puesto: 'estudiante'});
estudiante1.addCourse('matematica', 2);