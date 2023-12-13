const a = () => {
    let count = 0

    return () => {
        
        return ++count
    }
}

const counter = a()

console.log(counter())

console.log(counter())
console.log(counter())