const container = document.createElement("div")
container.classList.add("container")
document.body.appendChild(container)

const btnResize = document.querySelector("#resize")
const btnClear = document.querySelector("#clear")
let size = 16

for (let x = 1; x < 17; x++) {
    let div = document.createElement("div")
    div.classList = "square"
    div.id = `div${x}`
    container.appendChild(div)
    div.textContent = `im div${x}`
}



btnResize.addEventListener("click", () => {
    let a = prompt("input a number between 1 and 64")
    
    if (a === null) {
        console.log(a)
    } else if (a > 64 || a < 1) {
        alert("that's not valid!")
    } else {
        size = a
        console.log(size)
    }
});