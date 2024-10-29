//defnir la clase nodo

class Nodo {
    constructor(dato){
        this.data=dato;
        this.next=null;
    }
}


//clase lista enlazada 
class ListaEnlazada{
    constructor(){
        this.head=null; // esta lista esta vacia porque no necsita conectarse con el nodo dato ya que es la clase principal 
    }
}


// ahora agregamos enlazamos la lista enlazada



class Unir {
    constructor(dato){
        let nuevoNodo= new Nodo (dato); // aqui cree un nuevo nodo
        nuevoNodo.next=this.head;  // ahora este nuevo nodo apunta hacia la cabeza qque estaba vacia 
        this.head=nuevoNodo; //debemos declara ahora quien esta conectada a la cabeza 
    }
}



