//Tic Tac Toe
/* 
Game is played on a 3 by 3 grid by two players.
Each players take turns to put its marker on an unoccupied tile of the grid.
A player wins when they have 3 markers in a row in any direction, horizontal, vertical or diagonal. 
The game ends tied if the board is filled completely and no player has won.
*/

/* Steps to solve 

Print out instructions.
Being capable to store the state of the board
Being capable to accept input from each player for each turn
Store input in board state
Attempt only one turn, then multiple
Show board with changes of state
Being capable of detecting 3 same markers in a row, Win condition
Being capable of detecting board filled with markers. 

*/

const readline = require('readline')

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let board = {}
let possiblePositionsArray = [
    'A1',
    'A2',
    'A3',
    'B1',
    'B2',
    'B3',
    'C1',
    'C2',
    'C3',
]

function showInstructions() {
    console.log(`TIC TAC TOE`)
    console.log(`Game for two players played in a 3 by 3 board`)
    console.log(
        `Each player takes turns to put a marker on an empty tile of the board`
    )
    console.log(
        `A player wins when there are 3 of their markers in any direction: vertical, horizontal, diagonal`
    )
    console.log(`Player 1 will be X. Player 2 will be O`)
}

function startGame() {
    let playerTurn = 1
    showInstructions()
    receivePlayerInput(playerTurn)
}

function receivePlayerInput(playerNumber) {
    showBoardState()
    rl.question(getPlayerToMoveQuestion(playerNumber), function (tile) {
        const tileExists = validateTileSelection(tile)
        const tileEmpty = tileIsEmpty(tile)
        if (!tileExists) {
            console.log(`Incorrect tile selected. Try again`)
        }
        if (!tileEmpty) {
            console.log(`Tile is already selected!. Try again`)
        }
        //Tile is valid and empty, store input and move to next player
        if (tileExists && tileEmpty) {
            board[tile] = playerNumber == 1 ? 'X' : 'O'
            playerNumber = playerNumber == 1 ? 2 : 1
        }
        receivePlayerInput(playerNumber)
    })
}

function validateTileSelection(tile) {
    return possiblePositionsArray.indexOf(tile) >= 0
}
function tileIsEmpty(tile) {
    return board[tile] == null
}
function getPlayerToMoveQuestion(playerNumber) {
    return `Player ${playerNumber} (${getPlayerMarking(
        playerNumber
    )}) to move. Please choose a tile for your marking. \r\n`
}

function getPlayerMarking(playerNumber) {
    return playerNumber == 1 ? 'X' : 'O'
}

function showBoardState() {
    console.log(board)
}
startGame()
