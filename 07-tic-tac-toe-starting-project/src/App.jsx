import { useState } from 'react';
import Player from './components/Player/Player';
import GameBoard from './components/GameBoard/GameBoard';
import Log from './components/Log/Log';

function App() {
  const [activePlayer, setActivePlayer] = useState('X');
  const [gameTurns, setGameTurns] = useState([]);

  function selectSquareHandler(rowIndex, colIndex) {
    setActivePlayer((currActivePlayer) => currActivePlayer === 'X' ? 'O' : 'X');

    setGameTurns((prevTurns) => {
      // Rather than use a different piece of state, using this will ensure it's the latest and most accurate data
      let currPlayer = 'X';
      if (prevTurns.length > 0 && prevTurns[0].player === 'X') {
        currPlayer = 'O';
      }
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currPlayer },
        ...prevTurns
      ];

      return updatedTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'} />
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'} />
        </ol>
        <GameBoard onSelectSquare={selectSquareHandler} turns={gameTurns} />
      </div>
      <Log turns={gameTurns} />
    </main>
  )
}

export default App
