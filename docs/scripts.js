document.addEventListener("DOMContentLoaded", function() {
    const rollDiceButton = document.getElementById("rollDice");
    const diceResult = document.getElementById("diceResult");

    rollDiceButton.addEventListener("click", function() {
        const result = Math.floor(Math.random() * 6) + 1;
        diceResult.textContent = `Resultado del dado: ${result}`;
    });

    const board = document.getElementById("board");

    // Crear el tablero
    for (let i = 0; i < 289; i++) { // 17x17 casillas
        const cell = document.createElement("div");
        cell.classList.add("casilla");
        board.appendChild(cell);
    }

    const cells = board.children;

    // Configurar colores de las casas
    for (let i = 0; i < 17; i++) { // 17 filas
        for (let j = 0; j < 17; j++) { // 17 columnas
            const index = i * 17 + j;

            // Añadir clases de colores según la disposición solicitada
            if (i < 7 && j < 7) {
                cells[index].classList.add("yellow");
            } else if (i < 7 && j > 9) {
                cells[index].classList.add("blue");
            } else if (i > 9 && j < 7) {
                cells[index].classList.add("green");
            } else if (i > 9 && j > 9) {
                cells[index].classList.add("red");
            } else if ((i >= 7 && i <= 9) || (j >= 7 && j <= 9)) {
                cells[index].classList.add("safe");
            }
        }
    }

    // Numerar las casillas seguras en el perímetro de la zona central
    const safeCells = [
        137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, // Fila inferior
        166, 185, 204, 223, 242, 261, // Columna derecha
        260, 259, 258, 257, 256, 255, 254, 253, 252, 251, 250, 249, 248, // Fila superior
        229, 210, 191, 172, 153, 134 // Columna izquierda
    ];

    for (let i = 0; i < safeCells.length; i++) {
        cells[safeCells[i]].classList.add("safe");
        cells[safeCells[i]].setAttribute("data-number", i + 1);
    }
});
