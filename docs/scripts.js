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

    // Numerar las casillas seguras según el orden especificado
    const numberedSafeCells = [
        280, 281, 264, 247, 230, 213, 196, 179, 162, 163, 164, 165, 166, 167, 168, 169,
        152, 135, 134, 133, 132, 131, 130, 129, 128, 111, 94, 77, 60, 43, 26, 9, 8, 7,
        24, 41, 58, 75, 92, 109, 126, 125, 124, 123, 122, 121, 120, 119, 136, 153, 154,
        155, 156, 157, 158, 159, 160, 177, 194, 211, 228, 245, 262, 279
    ];

    for (let i = 0; i < numberedSafeCells.length; i++) {
        cells[numberedSafeCells[i]].classList.add("safe");
        cells[numberedSafeCells[i]].setAttribute("data-number", i + 1);
    }
});
