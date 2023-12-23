import { UI } from './index'
import { Todo as TodoComponent } from '../components/todo.js'

export class Todo {
    constructor(parentSelector) {
        this.parentElement = document.querySelector(parentSelector)
        console.log(this.parentElement)

        this.UI = new UI(); // new используется для создания экземпляра class
        this.Todo = new TodoComponent();

        this.CSS = {
            todo: 'todo',
            todoName: 'todo-name',
            progressBar: 'progress-bar',
            progressBarWrap: 'progress-bar-wrap',
            progressBarLine: 'progress-bar-line',
            progressBarTotalValue: 'progress-bar-total-value',
            progressBarCurrentValue: 'progress-bar-current-value',
        }
    }

    _createCurrentValueDisplay(persentDisplayInfo) {
        const currentValue = this.UI.createElement('div', {
            classes: [this.CSS.progressBarCurrentValue],
            text: persentDisplayInfo,
        })

        const persentage = this.UI.createElement('div', {
            classes: [this.CSS.progressBarCurrentValue],
            text: persentDisplayInfo,
        })

        const persentDisplay = this.UI.createElement('div', {
            classes: [this.CSS.progressBarCurrentValue],
            children: [currentValue, persentage]
        })

        return persentDisplay
    }

    _createProgressBar(todo) {
        const persent = todo.currentValue / todo.totalValue * 100
        const persentDisplayInfo = `${todo.currentValue} (${persent}%)`

        const totalValue = this.UI.createElement('div', {
            classes: [this.CSS.progressBarTotalValue],
            text: todo.totalValue,
            attrs: {
                title: todo.totalValue
            }
        })

        const progressBarLine = this.UI.createElement('div', {
            classes: [this.CSS.progressBarLine],
            attrs: {
                style: `width: ${persent}%`
            },
            children: [_createCurrentValueDisplay(persentDisplayInfo)]
        })

        const progressBar = this.UI.createElement('div', {
            classes: [this.CSS.progressBar],
            children: [progressBarLine],
            attrs: {
                title: persentDisplayInfo
            }
        })

        const progressBarWrap = this.UI.createElement('div', {
            classes: [this.CSS.progressBarWrap],
            children: [progressBar, totalValue]
        })

        return progressBarWrap
    }

    _createTodo(todo) {
        const todoNameElement = this.UI.createElement('div', {
            classes: [this.CSS.todoName],
            text: todo.description
        })

        console.log(todo)

        const todoElement = this.UI.createElement('div', {
            classes: [this.CSS.todo],
            children: [todoNameElement, this._createProgressBar(todo)]
        }) 

        return todoElement
    }

    render() {
        this.Todo._todos.forEach(todo => {
            this.parentElement.appendChild(this._createTodo(todo))
        })
    }
}