let todo = {
    title: 'fgh',
    description: 'ghjfgh'
}

let todo2 = [1, 5, 7] // объявление переменной 

todo2 = [3,6,9] // переопределение переменной 

// const такая же переменная как let, только её нельзя изменять
const constant = 4


//  декларативная функция function declaration может вызываться выше и ниже ее объявления
lol() // будет работать

function lol() {

}
lol() // будет работать





// функциональное выражение function expression вызывается только под объявлением
todo3() // не будет работать
const todo3 = () => {
    
}

todo3() // будет работать

const methods = { // это объект. Если функция находится внутри объекта, то она называется методом этого объекта
    count: 0, // свойство объекта. Свойство состоит из ключа и значения
    lol() { // Метод объекта
        this.count = 1
    }
}

console.log(methods.count) // 0

methods.lol() // 

console.log(methods.count) // 1

// 0 == '0' не жёсктое сравнение === true
// 0 === '0' жёсктое сравнение === false

chainik.fillByWater(1500)

chainik.getWater(1000)