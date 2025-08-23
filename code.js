function generateSquares(side) {
    for (let i = 0; i < side; i++) {
        const vertical = document.createElement("div");
        vertical.setAttribute("class", "vertical");
        grid.appendChild(vertical);
        for (let i = 0; i < side; i++) {
            const horizontal = document.createElement("div");
            horizontal.setAttribute("class", "horizontal");
            vertical.appendChild(horizontal)
        }
    }
}

let side = 16;

const container = document.createElement("div");
container.setAttribute("class", "container")
document.body.appendChild(container)

const grid = document.createElement("div");
grid.setAttribute("class", "grid");
container.appendChild(grid);

generateSquares(side);