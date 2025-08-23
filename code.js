function generateGrid(size) {
    grid.innerHTML = "";
    for (let i = 0; i < size; i++) {

        const vertical = document.createElement("div");
        vertical.setAttribute("class", "vertical");
        grid.appendChild(vertical);
        
        for (let i = 0; i < size; i++) {
            const horizontal = document.createElement("div");
            horizontal.setAttribute("class", "horizontal");
            vertical.appendChild(horizontal);
            horizontal.addEventListener("mouseover", () => {
                if (eraseMode){
                    horizontal.style.backgroundColor = "white";
                } else if (rgbMode){
                    const randomColor = Math.floor(Math.random() * rgbArr.length)
                    color = rgbArr[randomColor]
                    horizontal.style.backgroundColor = color
                } else {
                    color = "red"
                    horizontal.style.backgroundColor = color
                }
            });
        }
    }
}

function setGrid(){
    size = prompt("Enter a number between 0-100:");
    while (size > 100 || size < 1 ){
        size = prompt("Invalid number. Please enter a number between 0-100");
    }

    generateGrid(size);
}

// grid elements

let color = "red";
let size = 16;

const container = document.createElement("div");
container.setAttribute("class", "container");


const grid = document.createElement("div");
grid.setAttribute("class", "grid");


// ui elements

const ui = document.createElement("div");
ui.setAttribute("class", "panel");

const title = document.createElement("h1");
title.setAttribute("class", "title");
title.textContent = "Etch-a-sketch";

const author = document.createElement("h3");
author.setAttribute("class", "author");
author.textContent = "by ALMv";

const options = document.createElement("div");
options.setAttribute("class", "options");

const sizeBtn = document.createElement("button");
sizeBtn.setAttribute("class", "button");
sizeBtn.textContent = "Grid Size"
sizeBtn.addEventListener("click", setGrid);

const clearBtn = document.createElement("button");
clearBtn.setAttribute("class", "button");
clearBtn.textContent = "Clear"
clearBtn.addEventListener("click", () => generateGrid(size));

// additional settings

const eraseBtn = document.createElement("button");
eraseBtn.textContent = "Erase"
eraseBtn.setAttribute("class", "button")
let eraseMode = false

eraseBtn.addEventListener("click", () => {
    eraseMode = !eraseMode;
    eraseBtn.classList.toggle("active")
})

const rgbBtn = document.createElement("button");
rgbBtn.setAttribute("class", "button");
rgbBtn.textContent = "RGB Mode";
let rgbMode = false;

rgbBtn.addEventListener("click", () => {
    rgbMode = !rgbMode;
    rgbBtn.classList.toggle("active")
})


const rgbArr = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

// mambo

const mambo = document.createElement("img");
const mamboAudio = new Audio("super-ultra-secret/ei-ei-ei-ei-mun.mp3");

mambo.setAttribute("src", "super-ultra-secret/uma-musume.gif");
mambo.setAttribute("width", "30px");
mambo.addEventListener("mouseover", () => {
    mambo.setAttribute("class", "mambo-animated")
    mamboAudio.currentTime = 0;
    mamboAudio.play();
});
mambo.addEventListener("mouseleave", () => {
    mambo.setAttribute("class", "")
    mamboAudio.pause();
});


// display elements

document.body.appendChild(mamboAudio)
document.body.appendChild(ui);
ui.appendChild(mambo);
ui.appendChild(title);
ui.appendChild(author);
ui.appendChild(options);
options.appendChild(sizeBtn)
options.appendChild(clearBtn);
options.appendChild(eraseBtn);
options.appendChild(rgbBtn);
document.body.appendChild(container);
container.appendChild(grid);

generateGrid(size);