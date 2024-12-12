import React from "react";
import Track from "../Track/Track";
import styles from "./Tracklist.module.css";

function Tracklist(props) {
  return (
    <div className={styles.tracklist}>
      <h2>Search Results</h2>
      <ul>
        {props.tracklist.map((track) => (
          <Track key={track.id} track={track} symbol="+"/>
        ))}
      </ul>
    </div>
  );
}

export default Tracklist;
