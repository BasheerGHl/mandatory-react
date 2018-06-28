/*
The Message component expects to be passed...
- state: a game state string (plr1,plr2,plr1won,plr2won,draw)

The component will then render an appropriate message.
*/

import React from 'react';

export default function Message(){
  let output;
    if (state === 'plr1') {
        output = `Player 1's turn`;
    } else if (state === 'plr2') {
        output = `Player 2's turn`;
    } else if (state === 'plr1won') {
        output = `Player 1 won!`;
    } else if (state === 'plr2won') {
        output = `Player 2 won!`
    } else {
        output = `It's a draw`
}
  
  
  
  
  return (
    <div>{output}</div>
  );
}
