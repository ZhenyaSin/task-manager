import { Helpers } from "../helpers"

const testData = [
    {
        id: 1,
        description: 'test 1',
        totalValue: 1000,
        currentValue: 0
    },
    {
        id: 2,
        description: 'test 2',
        totalValue: 100,
        currentValue: 50
    },
    {
        id: 3,
        description: 'test 3',
        totalValue: 10000,
        currentValue: 9999
    }
]

export class Todo {
    Defaults = {
        description: 'Цель',
        totalValue: 30000,
        currentValue: 0
    }

    constructor() {
        this._todos = [...testData]
    }

    get todos() {
        return this._todos
    }

    /**
     * Создаёт ToDo
     * @param {string} description Название цели 
     * @param {number} totalValue Целевое значение 
     * @param {number} currentValue Текущее значение 
     */
    createTodo(
        description = this.Defaults.description,
        totalValue = this.Defaults.totalValue,
        currentValue = this.Defaults.currentValue
    ) {
        this._todos.push({
            id: Helpers.generateId(),
            description: description,
            totalValue: totalValue,
            currentValue: currentValue
        })
    }

    editTodo(id, {
        description = null,
        totalValue = null,
        currentValue = null
    }) {
        const todo = this._todos.find((item) => {
            return item.id === id
        })

        if (todo === null) {
            alert(`todo с id ${id} не найден`)

            return
        }

        todo.description = description || todo.description 
        todo.totalValue = totalValue || todo.totalValue

        if (currentValue > todo.totalValue) {
            alert('Текущее значение не может быть больше максимального')
        } else {
            todo.currentValue = currentValue || todo.currentValue
        }
    }
}

// const value = 0
// let result = 1

// result = value && result && 4 && 0


// Типы данных
//---------------------------------
// falsy значения (равные false)
// false 
// ''
// null
// undefined
// NaN
// 0

// truely значения (равные true)
// true
// 'fh'
// {}
// []
// 6
// -5
// 6.7

// console.log(result)


// () - аргументы
// {} - объекты

// 1 + '1' = '11'

// '1' + 1 = '11'