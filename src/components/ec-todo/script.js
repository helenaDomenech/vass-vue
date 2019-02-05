export default {
    // eslint-disable-next-line
    name: 'ec-todo',
    data() {
        return {
            todo : '',
            typing: false,
            todos: [
                {
                    id: 1,
                    completed: false,
                    text: 'Todo Primero',
                    editing: false
                },
                {
                    id: 2,
                    completed: false,
                    text: 'Todo Segundo',
                    editing: false
                }
            ]
        }
    },
    methods: {
        addTodo(event) {
            if(event) event.preventDefault()
            let body = {
                text: this.todo,
                completed: false,
                _creator: null
            }
            this.clearTodo()
            this.typing = false
        },
        clearTodo() {
            this.todo
        },
        updateTodo(todo) {
            todo.editing = false
        },
        deleteTodo(id) {
            // eslint-disable-next-line
            console.log('He eliminado el elemto de la lista', id);
        }
    },
    watch: {
        todo() {
            this.todo= "testing"
        }
    }
}