import { useState } from "react";
export default function Player({ initialName, symbol, isActive }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setplayerName] = useState((initialName = "playerName"));
  function handleEditClick() {
    console.log("Button Clicked");
    // setIsEditing(isEditing ? false : true);
    // setIsEditing(!isEditing);
    setIsEditing((editing) => !editing);
    // setIsEditing(true);
    // console.log(isEditing);
  }
  console.log(isEditing, "outside");

  function handleChange(event) {
    console.log(event);
    setplayerName(event.target.value);
  }
  let editablePlayerName = <span className="player-name">{playerName}</span>;
  //   let btnCaption = "Edit";

  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
    // btnCaption = "Save";
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {/* <span className="player-name">{name}</span> */}
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      {/* <button onClick={handleEditClick}> {btbCaption}</button> */}
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
