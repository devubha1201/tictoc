let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function handleClick(index) {
    if (board[index] === '' && gameActive) {
        board[index] = currentPlayer;
        document.getElementsByClassName('cell')[index].innerText = currentPlayer;
        
        if (checkWin()) {
            document.getElementById('message').innerText = `Player ${currentPlayer} wins!`;
            gameActive = false;
        } else if (checkDraw()) {
            document.getElementById('message').innerText = `It's a draw!`;
            gameActive = false;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            document.getElementById('message').innerText = `Player ${currentPlayer}'s turn`;
        }
    }
}

function checkWin() {
    for (let combination of winningCombinations) {
        let [a, b, c] = combination;
        if (board[a] !== '' && board[a] === board[b] && board[b] === board[c]) {
            return true;
        }
    }
    return false;
}

function checkDraw() {
    return board.every(cell => cell !== '');
}

function resetGame() {
    currentPlayer = 'X';
    board = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    document.getElementById('message').innerText = `Player ${currentPlayer}'s turn`;
    let cells = document.getElementsByClassName('cell');
    for (let cell of cells) {
        cell.innerText = '';
    }
}
