// ---------- A tictactoe gaming library! ------------

/*
A game is an object with...
- state: a string describing the current state:
  - 'plr1': It is player 1's turn to play
  - 'plr2': It is player 2's turn to play
  - 'plr1won': Game over, the first player won
  - 'plr2won': Game over, the second player won
  - 'draw': Game over, nobody won
- board: An array of 9 numbers, each of which are either:
  - 0: An empty square
  - 1: Player 1 has a marker here
  - 2: Player 2 has a marker here
- line: an array of all positions involved in the win, otherwise empty array (STRETCH TASK)

The board array goes from top left to bottom right. For example, the array
[0,1,2,1,2,0,1,0,2] represents this board:

  .---.---.---.
  |   | 1 | 2 |
  |---+---+---|
  | 1 | 2 |   |
  |---+---+---|
  | 1 |   | 2 |
  '---'---'---'
*/

/*
The newGame function will return a valid new game object.
*/
const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6],
  [0, 3, 6],
  [2, 5, 8]
];
export const newGame = () => ({
  state: 'plr1',
  board: [0,0,0,0,0,0,0,0,0],
  line: []
});

/*
The makeMove function should be called with...
- game: A valid game object
- pos: A number 0-8 corresponding to where we want to play

It will return a new game object. If the move was invalid
(because the position was already taken or the game is over),
an unchanged game will be returned.
*/

export const winCenarios = table => {
  const winList = winPatterns.map((item, i) => {
    const {a , b , c } = item
    if(newTable[a] && newTable[a] === newboard[b] && newTable[a] ===newTable[c]){
      return true
    }
   })
}

export const IsDraw = ( table ) => { 
  if( newboard.includes(0) ){
    return false    
  } 
  else {
    return true 
  }
} 



export const makeMove = (game, pos) => {
  let nextState;
  let nextBoard = [...game.table];
  let winningLine = [];

  if (nextBoard[pos] || isWinningLine(nextBoard)) {
      return game;
  }
  else if (game.state === 'plr1') {
      nextBoard[pos] = 1;

      if(isDraw(nextBoard)) {
          nextState = 'draw'
      }
      else if (isWinningLine(nextBoard)) {
          nextState = 'plr1won';
          winningLine = isWinningLine(nextBoard)
      }
      else {
          nextState = 'plr2';
      }

  } else if (game.state === 'plr2') {
      nextBoard[pos] = 2;

      if(isDraw(nextBoard)) {
          nextState = 'draw'
      }
      else if (isWinningLine(nextBoard)) {
          nextState = 'plr2won';
          winningLine = isWinningLine(nextBoard);
      }
      else {
          nextState = 'plr1';
      }
  }

  return {
      state: 'plr1',
      table: nextBoard,
      line: []
}
}

