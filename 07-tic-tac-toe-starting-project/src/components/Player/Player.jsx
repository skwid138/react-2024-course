import { useState } from 'react';
import './Player.css';

export default function Player({ initialName, symbol, isActive }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function editHandler() {
    // The following is considered poor practice and advised against by the react devs
    // Setting state based off current state should not be done
    // The recomended way would be with a function instead
    //setIsEditing(!isEditing);

    // The first argument is the current state and the returned value will be the updated state
    setIsEditing((editing) => !editing);
  }

  function inputHandler(event) {
    setPlayerName(event.target.value);
  }

  // This would be called two way binding as we get the value from the input, but also update the value on the input
  let name = <span className="player-name">{playerName}</span>;
  let buttonText = 'Edit';

  if (isEditing) {
    name = <input type="text" required value={playerName} onChange={inputHandler} />;
    buttonText = 'Save';
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {name}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={editHandler}>{buttonText}</button>
    </li>
  );
}
