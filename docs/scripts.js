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
});
