import { UI } from './index'
import { Todo as TodoComponent } from '../components/todo.js'

export class Todo {
    constructor(parentSelector) {
        this.parentElement = document.querySelector(parentSelector)
        console.log(this.parentElement)

        this.UI = new UI();
        this.Todo = new TodoComponent();

        this.CSS = {
            todo: 'todo',
            todoName: 'todo-name',
        }
    }

    _createTodo(todo) {
        const todoNameElement = this.UI.createElement('div', {
            classes: [this.CSS.todoName],
            text: todo.description
        })

        console.log(todo)

        const todoElement = this.UI.createElement('div', {
            classes: [this.CSS.todo],
            children: [todoNameElement]
        }) 

        return todoElement
    }

    render() {
        this.Todo._todos.forEach(todo => {
            this.parentElement.appendChild(this._createTodo(todo))
        })
    }
}