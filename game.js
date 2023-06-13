const cells = document.querySelectorAll("#game td");
let valueX = true;
const board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
]

function checkWin() {
    // LINHAS
    for (let row = 0; row < 3; row++) {
      if (board[row][0] === board[row][1] && board[row][1] === board[row][2] && board[row][0] !== '') {
        return board[row][0]; 
      }
    }
  
    // COLUNAS
    for (let col = 0; col < 3; col++) {
      if (board[0][col] === board[1][col] && board[1][col] === board[2][col] && board[0][col] !== '') {
        return board[0][col]; 
      }
    }
  
    // DIAGONAIS
    if (
      (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] !== '') ||
      (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[0][2] !== '')
    ) {
      return board[1][1]; 
    }
  
    // NINGUÉM VENCEU
    return null;
  }

cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    // CHECAR SE JÁ TEM ALGO NO LUGAR
    if (cell.textContent == "") {
      if (valueX) {
        // ALTERNAR AS VEZES
        cell.textContent = "X";
        valueX = false;
      } else {
        cell.textContent = "O";
        valueX = true;
      }
    }

    const row = cell.parentNode.rowIndex; // PEGA A POSIÇÃO DA LINHA DO <TD>
    const col = cell.cellIndex; // PEGA A POSIÇÃO DA COLUNA
    board[row][col] = cell.textContent

    const winner = checkWin();
    if (winner) {
        alert(`O vencedor foi o jogador com ${winner}`)
        location.reload()
    }
  });
});
