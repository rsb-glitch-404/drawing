const container = document.createElement("div")
container.classList.add("container")
document.body.appendChild(container)


let size = 4
let color = "#333333"
const btnResize = document.querySelector("#resize")
const btnClear = document.querySelector("#clear")

makeGrid(size)


function makeGrid(int) {
    numOfDivs = int * int
    let divSize = Math.floor(400 / int)
    for (let x = 1; x <= numOfDivs; x++) {
        let div = document.createElement("div")
        div.classList = "square"
        div.id = `div${x}`
        div.setAttribute(
            "style",
            `flex:1 1 auto; width:${divSize}px; height:${divSize}px`,
        );
        div.addEventListener('mouseover', paint)
        div.addEventListener('mousedown', paint)
        container.appendChild(div)
    }
}

function emptyGrid() {
    while(container.hasChildNodes()) {
        container.removeChild(container.firstChild)
    }
}

function paint(e) {
    if (e.type === 'mouseover' && !mousedown) return
    e.target.style.backgroundColor = color
}

btnResize.addEventListener("click", () => {
    let a = prompt("input a number between 1 and 64")
    
    if (a === null) {
        console.og(a)
    } else if (a < 41 && a > 0) {
        size = a
        emptyGrid()
        makeGrid(size)
    } else {
        alert("that's not valid!")
    }
});



btnClear.addEventListener("click", () => {
    emptyGrid()
    makeGrid(size)
});