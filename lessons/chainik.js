class Chainik {
    constructor(maxCapacity = 2000) { // служебная функция
        this.maxCapacity = maxCapacity // свойство класса
        this.currentCapacity = 0 // свойство класса
        this.temperature = 30 // свойство класса
    }

    // метод класса. 
    checkWater() { 
        if (this.currentCapacity === 0) {
            return false
        } else {
            return true
        }
    }

    // метод класса. 
    turnOn() {
        if (this.checkWater()) { // Если checkWater() = true, то присваиваем this.temperature = 100. "if (this.checkWater())" - по умолчанию true
            this.temperature = 100 // то присваиваем this.temperature = 100
        } else {
            console.log('no water') // иначе говорим что нет воды
        }
    }

    // метод класса
    fillByWater(water = 0) { // аргумент "water = 0"
        if (this.currentCapacity + water > this.maxCapacity) {
            // console.log(this.currentCapacity) // === 200

            this.currentCapacity = this.maxCapacity

            // console.log(this.currentCapacity) // === this.maxCapacity (2000)
        } else {
            this.currentCapacity += water // this.currentCapacity = this.currentCapacity + water. += - прибавь и присвой
        }

        console.log(`уровень воды: ${this.currentCapacity}`)
    }

    // метод класса
    getWater(water = 0) {
        let buffer = 0

        if (this.currentCapacity - water < 0) {
            buffer = this.currentCapacity

            this.currentCapacity = 0

            return buffer
        }

        this.currentCapacity -= water // this.currentCapacity = this.currentCapacity - water
        // 1500 - 1000 = 500, currentCapacity = 500
        return () => {
            fgddnfgyrtn
        }
    }
}

const chaink1 = new Chainik(5000) 
const chaink2 = new Chainik(3000) 

console.log(chaink1.currentCapacity)
chaink1.fillByWater(500)
console.log(chaink1.currentCapacity)
console.log(chaink1.temperature)
chaink1.turnOn()
console.log(chaink1.temperature)

