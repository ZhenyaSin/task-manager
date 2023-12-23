export class UI {
    createElement(tag, {
        attrs = {},
        classes = [],
        children = [],
        text = ''
    }) {
        const element = document.createElement(tag) // <div></div>
        const attributesEntries = Object.entries(attrs)
        
        const iterations = Math.max(attributesEntries.length, children.length, classes.length)
        
        element.innerText = text

        for (let i = 0; i < iterations; i++) {
            if (attributesEntries[i] !== undefined) {
                const [key, value] = attributesEntries[i]

                element.setAttribute(key, value)
            }

            if (children[i]) {
                element.appendChild(children[i])
            }

            if (classes[i]) {
                element.classList.add(classes[i])
            }

        }
        return element
    }
}