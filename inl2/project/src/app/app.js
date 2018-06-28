import React from 'react';

import {makeMove, newGame} from '../logic/index';

import Message from './message';
import Tile from './tile';

/*
The main game App! It should have a TicTacToe game state in its component state,
and use the Tile and Message components to render the game.

Then the `makeMove` function from the logic layer should be used to update the
game state as the tiles are being clicked.

The user should also be able to reset the game.

The App component should render an outer element with a `container` CSS class,
and all tiles in an element with a `board` CSS class.
*/

export default class App extends React.Component {
  render(){
    return (
      <div className='container'>
      <Message state={this.state.state}/>
      <div className='table'>
          {this.state.table.map((tile, i) => {
              return (
                  <Tile
                      key={i}
                      piece={tile}
                      onClick={() => this.makeMove(i)}
                      line={this.state.line.includes(i)}
                  />
              )
          })}
      </div>
      <button onClick={this.newGame}>Reset Game</button>
</div>
    );
  }
}
