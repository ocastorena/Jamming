import React from "react";
import styles from "./Track.module.css";

function Track(props) {
  return (
    <li className={styles.track}>
      <h3>{props.track.name}</h3>
      <h4>{props.track.artist}</h4>
      <p>{props.track.album}</p>
      <button className={styles.addButton}>+</button>
    </li>
  );
}

export default Track;
