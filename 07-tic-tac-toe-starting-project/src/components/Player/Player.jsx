import { useState } from 'react';

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  function editHandler () {
    setIsEditing(true);
  }

  return (
    <li>
      <span className="player">
        {!isEditing && <span className="player-name">{name}</span>}
        {isEditing && <input />}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={editHandler}>Edit</button>
    </li>
  );
}
