const container = document.querySelector("#container");

function createCells(num) {
    container.innerHTML = ""; 
    for (let i = 1; i <= num; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        container.appendChild(cell);
    }

    // Reapply the event listeners for the new cells
const cells = document.querySelectorAll(".cell");
cells.forEach((cell) => {
   let r = Math.floor(Math.random() * 256); 
   let g = Math.floor(Math.random() * 256);
   let b = Math.floor(Math.random() * 256); 
   cell.addEventListener("mouseover", () => {
      cell.style.backgroundColor = `rgb(${r},${g},${b})`;
      let currentOpacity = parseFloat(cell.style.opacity) || 0;
      cell.style.opacity = Math.min(currentOpacity + 0.1, 1); 
        });
    });
}

// Initial grid setup
createCells(256); // Default 16x16 grid (16 * 16 = 256 cells)

const adjustGridButton = document.querySelector("#adjust-grid");
const clearButton = document.querySelector("#clear"); 
const modal = document.querySelector("#modal");
const closeButton = document.querySelector("#close");
const submitButton = document.querySelector("#submit");
const userInput = document.querySelector("#userInput");


clearButton.addEventListener("click", () => {
   createCells(256);
   });

adjustGridButton.addEventListener("click", () => {
    modal.style.display = "flex";
});

closeButton.addEventListener("click", () => {
    modal.style.display = "none";
});

submitButton.addEventListener("click", function getSquaresPerSide() {
    let squaresPerSide = parseInt(userInput.value, 10);
    if (isNaN(squaresPerSide) || !Number.isInteger(squaresPerSide) || squaresPerSide > 100) {
        alert("Invalid input. Please enter a number between 1 and 100.");
    } else {
        createCells(squaresPerSide * squaresPerSide);
        container.style.gridTemplateColumns = `repeat(${squaresPerSide}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${squaresPerSide}, 1fr)`;
        modal.style.display = "none"; 
    }
});
