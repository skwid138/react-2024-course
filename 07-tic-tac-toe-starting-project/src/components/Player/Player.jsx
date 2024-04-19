import { useState } from 'react';

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  function editHandler() {
    // The following is considered poor practice and advised against by the react devs
    // Setting state based off current state should not be done
    // The recomended way would be with a function instead
    //setIsEditing(!isEditing);

    // The first argument is the current state and the returned value will be the updated state
    setIsEditing((editing) => !editing);
  }

  let playerName = <span className="player-name">{name}</span>;
  let buttonText = 'Edit';

  if (isEditing) {
    playerName = <input type="text" required value={name} />;
    buttonText = 'Save';
  }

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={editHandler}>{buttonText}</button>
    </li>
  );
}
