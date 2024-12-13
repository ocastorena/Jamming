import React from "react";
import styles from "./Track.module.css";

function Track(props) {
  return (
    <li className={styles.track}>
      <h3>{props.track.name}</h3>
      <h4>{props.track.artist}</h4>
      <p>{props.track.album}</p>
      <button
        className={styles.addRemoveButton}
        trackid={props.track.id}
        onClick={props.handleClick}
      >
        {props.symbol}
      </button>
    </li>
  );
}

export default Track;
