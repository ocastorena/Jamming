import React from "react";
import styles from "./Track.module.css";

function Track({ track, symbol, onClick }) {
  const handleClick = () => {
    onClick(track.id);
  };

  return (
    <li className={styles.track}>
      <h3>{track.name}</h3>
      <h4>{track.artist}</h4>
      <p>{track.album}</p>
      <button className={styles.addRemoveButton} onClick={handleClick}>
        {symbol}
      </button>
    </li>
  );
}

export default Track;
