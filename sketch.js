let size = 4
let color = "#333333"
let mode = "draw"
let eraseColor = "#FFFFFF"
let mouseDown = false


const container = document.querySelector(".container")
const btnResize = document.querySelector("#resize")
const btnClear = document.querySelector("#clear")
const btnErase = document.querySelector("#eraser")
const btnDraw = document.querySelector("#draw")
const colorPicker = document.getElementById('colorPicker')


btnDraw.onclick = () => setMode("draw")
btnErase.onclick = () => setMode("erase")
colorPicker.oninput = (e) => changeColour(e.target.value)


document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)


makeGrid(size)
setMode(mode)


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
    if (e.type === 'mouseover' && !mouseDown) return
    if (mode === "erase") {
        color = eraseColor
    } else {
        color = colorPicker.value
    }
    
    e.target.style.backgroundColor = color
}

function setMode(a) {
    if (mode === "draw") {
        mode = "erase"
        document.getElementById('eraser').style.backgroundColor = "#333333"
        document.getElementById('eraser').style.color = "#FFFFFF"
        document.getElementById('eraser').style.borderColor = "#333333"
        document.getElementById('draw').style.color = "ButtonText"
        document.getElementById('draw').style.backgroundColor = "ButtonFace"
        document.getElementById('draw').style.borderColor = "ButtonBorder"

    } else {
        mode = "draw"
        document.getElementById('eraser').style.backgroundColor = "ButtonFace"
        document.getElementById('eraser').style.color = "ButtonText"
        document.getElementById('eraser').style.borderColor = "ButtonBorder"
        document.getElementById('draw').style.backgroundColor = "#333333"
        document.getElementById('draw').style.color = "#FFFFFF"
        document.getElementById('draw').style.borderColor = "#333333"

    }
}

function changeColour(newColour) {
    color = newColour
}

btnResize.addEventListener("click", () => {
    let a = prompt("input a number between 1 and 40")
    
    if (a === null) return
    if (a < 41 && a > 0) {
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