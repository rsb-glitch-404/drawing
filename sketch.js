const container = document.createElement("div")
container.classList.add("container")
container.textContent = "hello"
document.body.appendChild(container)


for (let x = 1; x < 17; x++) {
    let div = document.createElement("div")
    div.classList = "square"
    div.id = `div${x}`
    container.appendChild(div)
    div.textContent = `im div${x}`
}