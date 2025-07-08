class Usuario {
    constructor(nombre, apellido, correo, puesto) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.puesto = puesto;
        this.curso = [];
        this.mensaje = [];
    }

    addCourse(nombreCurso, nivel) {
        const cursoAgregado = { nombre: nombreCurso, nivel: nivel };
        this.curso.push(cursoAgregado);
    }

    removeCurso(nombreCurso) {
        const cursoEliminar = this.curso.findIndex(curso => curso.nombre === nombreCurso);
        if (cursoEliminar !== -1) {
            this.curso.splice(cursoEliminar, 1);
        } else {
            console.log("Curso no encontrado");
        }
    }

    editCurso(nombreCurso, nuevoNombre, nuevoNivel) {
        const cursoEditar = this.curso.find(curso => curso.nombre === nombreCurso);

        if (!cursoEditar) {
            console.log("Curso no encontrado");
            return;
        }

        cursoEditar.nombre = nuevoNombre || cursoEditar.nombre;
        cursoEditar.nivel = nuevoNivel || cursoEditar.nivel;
    }

    enviarMensaje(from, men) {
        this.mensaje.push({ from, message: men, timestamp: new Date() });
        this.desdeCorreo(from, this.correo, men);
    }

    desdeCorreo(from, para, men) {
        console.log(`Este mensaje ha sido enviado por ${from} a ${para}: ${men}`);
    }

    showMessagesHistory() {
        console.log("Historial de mensajes:");
        this.mensaje.forEach(({ from, message, timestamp }, index) => {
            console.log(`${index + 1}. De: ${from} - "${message}" - ${timestamp}`);
        });
    }
}


let maestro = new Usuario("Jose", "Noda", "usted@gmail.com", "Profesor");
let estudiante1 = new Usuario("Rafael", "Fife", "rfife@rhyta.com", "estudiante");

// Uso de métodos
estudiante1.addCourse("matematica", 2);
estudiante1.removeCurso("matematica");
estudiante1.addCourse("biologia", 4);


console.log(`${estudiante1.nombre} : ${estudiante1.curso.length} curso(s)`);

// Enviar un mensaje del maestro al estudiante
maestro.enviarMensaje("Jose", "Bienvenido al curso de biología");


maestro.showMessagesHistory();