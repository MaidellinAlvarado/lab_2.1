class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}


class ListEnla{

    
    constructor() {
        this.head = null;
        this.size = 0; 
    }


    // Método para agregar el nodo 
    add(data) {
        let NuevoNodo = new Node(data);
        let current;

        if (this.head == null) {
            this.head = NuevoNodo;
        } else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = NuevoNodo;
        }
                this.size++;}



         // Método para eliminar un nodo de la lista
    remove(data) {
        let current = this.head;
        let prev = null;

        while (current != null) {
            if (current.data === data) {
                if (prev == null) {
                    this.head = current.next;
                } else {
                    prev.next = current.next;
                }
                this.size--;
                return true;
            }
            prev = current;
            current = current.next;
        }
        return false;
    }

    // Método para marcar una tarea como completada
    toggleComplete(data) {
        let current = this.head;
        while (current) {
            if (current.data === data) {
                current.data.completed = !current.data.completed;
                return true;
            }
            current = current.next;
        }
        return false;
    }


}}