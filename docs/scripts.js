document.addEventListener("DOMContentLoaded", function() {
    const rollDiceButton = document.getElementById("rollDice");
    const diceResult = document.getElementById("diceResult");

    rollDiceButton.addEventListener("click", function() {
        const result = Math.floor(Math.random() * 6) + 1;
        diceResult.textContent = Resultado del dado: ${result};
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
            } else if ((i >= 7 && i <= 9) || (j >= 7 && j <= 9)) {
                cells[index].classList.add("safe");
            }
        }
    }

    // Numerar las casillas seguras
    const safeCells = [
        // Fila superior
        7, 8, 9, 10, 11, 12, 13,
        // Columna derecha
        24, 41, 58, 75, 92, 109, 126,
        // Fila inferior
        135, 136, 137, 138, 139, 140, 141,
        // Columna izquierda
        118, 101, 84, 67, 50, 33, 16
    ];

    for (let i = 0; i < safeCells.length; i++) {
        cells[safeCells[i]].classList.add("safe");
        cells[safeCells[i]].setAttribute("data-number", i + 1);
    }
});
