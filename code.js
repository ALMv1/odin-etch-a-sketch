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
            horizontal.addEventListener("mouseover", () => horizontal.style.backgroundColor = color);
        }
    }
}

function setGrid(){
    size = prompt("Enter a number between 0-100:");
    while (size > 100 && size < 1 ){
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

// display elements

document.body.appendChild(ui);
ui.appendChild(title);
ui.appendChild(options);
options.appendChild(sizeBtn)
options.appendChild(clearBtn);
document.body.appendChild(container);
container.appendChild(grid);

generateGrid(size);