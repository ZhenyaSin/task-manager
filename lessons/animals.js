class Animal {
    walk() {
        console.log(`Ходит ${this.age} ${this.name}`)
    }

    look() {
        console.log(`Смотрит ${this.age} ${this.name}`)
    }
}

class Dog extends Animal {
    constructor(age = 1, name = 'test') {
        this.age = age
        this.name = name
    }

    bark() {
        console.log(`Лает ${this.age} ${this.name}`)
    }
}

class Cat extends Animal {
    constructor(age = 1, name = 'test') {
        this.age = age
        this.name = name
    }

    look2() {
        console.log(`Смотрит2 ${this.age} ${this.name}`)
    }

    meow() {
        console.log(`Мяукает ${this.age} ${this.name}`)
    }
}

const dog1 = new Dog(5, "Johny")
const dog2 = new Dog()


dog1.walk()
dog1.bark()


dog2.walk()
dog2.bark()