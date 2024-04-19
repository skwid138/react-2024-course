import { useState } from 'react';
import './GameBoard.css';

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquare, activePlayerSymbol }) {

  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function buttonSymbolHandler(rowIndex, colIndex) {
    setGameBoard((previousBoard) => {
      // It is highly recomended when updating Obj or Arr that you DO NOT mutate, 
      // but instead deep copy and use that to save the changes
      const updatedBoard = [...previousBoard.map(innerArray => [...innerArray])];
      updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
      return updatedBoard;
    });

    // execute passed in callback
    onSelectSquare();
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => <li key={rowIndex}>
        <ol>
          {row.map((playerSymbol, colIndex) => <li key={colIndex}>
            <button onClick={() => buttonSymbolHandler(rowIndex, colIndex)}>{playerSymbol}</button>
          </li>)}
        </ol>
      </li>)}
    </ol>
  );
}
