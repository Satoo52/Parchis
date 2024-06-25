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

    // Configurar colores de las casas en las esquinas
    cells[0].classList.add("yellow");  // Esquina superior izquierda
    cells[16].classList.add("blue");   // Esquina superior derecha
    cells[272].classList.add("green"); // Esquina inferior izquierda
    cells[288].classList.add("red");   // Esquina inferior derecha
});
