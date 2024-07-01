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

    // Añadir fichas de cada jugador en sus casas
    const startPositions = {
        yellow: [36, 38, 70, 72],
        blue: [46, 48, 80, 82],
        green: [206, 208, 240, 242],
        red: [216, 218, 250, 252]
    };

    Object.entries(startPositions).forEach(([color, positions]) => {
        positions.forEach(position => {
            const ficha = document.createElement("div");
            ficha.classList.add("ficha", color);
            ficha.style.backgroundColor = color;
            cells[position].appendChild(ficha);
        });
    });

    // Numerar las casillas seguras
    const safeCells = [
        280, 281, 264, 247, 230, 213, 196, 179, 162, 163, 164, 165, 166, 167, 168, 169,
        152, 135, 134, 133, 132, 131, 130, 129, 128, 111, 94, 77, 60, 43, 26, 9,
        8, 7, 24, 41, 58, 75, 92, 109, 126, 125, 124, 123, 122, 121, 120, 119,
        136, 153, 154, 155, 156, 157, 158, 159, 160, 177, 194, 211, 228, 245, 262, 279
    ];

    safeCells.forEach((index, i) => {
        const cell = cells[index];
        cell.classList.add("safe");
        cell.textContent = i + 1;
    });
});
