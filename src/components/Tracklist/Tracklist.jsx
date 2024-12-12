import React from "react";
import Track from "../Track/Track";
import styles from "./Tracklist.module.css";

function Tracklist(props) {
  return (
    <div className={styles.tracklist}>
      <h2>Tracklist</h2>
      <ul>
        {props.tracklist.map((track) => (
          <Track key={track.id} track={track} />
        ))}
      </ul>
    </div>
  );
}

export default Tracklist;
