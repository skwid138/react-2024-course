import { useState } from 'react';

export default function Player({ initialName, symbol }) {
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

  let name = <span className="player-name">{playerName}</span>;
  let buttonText = 'Edit';

  if (isEditing) {
    name = <input type="text" required value={playerName} onChange={inputHandler} />;
    buttonText = 'Save';
  }

  return (
    <li>
      <span className="player">
        {name}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={editHandler}>{buttonText}</button>
    </li>
  );
}
