let todo = {
    title: 'fgh',
    description: 'ghjfgh'
}

let todo2 = [1, 5, 7]

// const такая же переменная как let, только её нельзя изменять
const constant = 4

//  декларативная функция function declaration может вызываться выше и ниже ее объявления
function lol() {

}

// функциональное выражение function expression вызывается только под объявлением
const todo3 = () => {
    
}

todo3()

const methods = { // это объект. Если функция находится внутри объекта, то она называется методом этого объекта
    count: 0,
    lol() { // Метод объекта
        this.count = 1
    }
}

console.log(methods.count)

methods.lol()

console.log(methods.count)

// 0 == '0'
// 0 === '0'

class Chainik {
    constructor() { // служебная функция
        this.maxCapacity = 2000
        this.currentCapacity = 0
        this.temperature = 30
    }

    checkWater() {
        if (this.currentCapacity === 0) {
            return false
        } else {
            return true
        }
    }

    turnOn() {
        if (this.checkWater()) { // Если checkWater() = true, то присваиваем this.temperature = 100. "if (this.checkWater())" - по умолчанию true
            this.temperature = 100 // то присваиваем this.temperature = 100
        } else {
            console.log('no water') // иначе говорим что нет воды
        }
    }

    fillByWater(water = 0) { // аргумент "water = 0"
        if (this.currentCapacity + water > this.maxCapacity) {
            console.log(this.currentCapacity) // === 0
            this.currentCapacity = this.maxCapacity
            console.log(this.currentCapacity) // === this.maxCapacity (2000)
        } else {
            this.currentCapacity += water // this.currentCapacity = this.currentCapacity + water. += - прибавь и присвой
        }

        console.log(`уровень воды: ${this.currentCapacity}`)
    }

    getWater(water = 0) {
        if (this.currentCapacity - water < 0) {
            // ...
        }
    }
}

Chainik.fillByWater(2000)


const lol = 1

const lol2 = (number) => {
    return number + 2
}

let lol3 = 0

console.log(lol3)

lol3 = lol2(lol) // 

console.log(lol3)


const lol = 

const object = { // это объект. Если функция находится внутри объекта, то она называется методом этого объекта. Это имя собственное, то что может меняться
    count: 0,
    lol: () => { // тело функции. 
        this.count = 1 // this - это обращение к родительскому объекту. this = object. this ставиться в случае, если наименование переменой будет менятся. Это имя нарицательное, то что не меняется
    
        return this.count
    }
}

// .lol()  метод
// lol() функция
// () - запускает функцию

console.log(object.lol)




const object2 = { 
    count: 0,
    lol: () => { 
        this.count = 1
    
        return this.count
    }
}