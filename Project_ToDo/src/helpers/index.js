export class Helpers {
    generateId() {
        return new Date().getTime() + this.getRandomNumber(100)
    }

    getRandomNumber(number = 10) {
        return Math.floor(Math.random() * number)
    }
}

// createElement('div', {
//     attrs: {
//         class: ''
//     }
// })