import React from "react";
import Track from "../Track/Track";
import styles from "./Tracklist.module.css";

function Tracklist({ tracklist, onAddTrack }) {
  return (
    <div className={styles.tracklist}>
      <h2>Search Results</h2>
      <ul>
        {tracklist.map((track) => (
          <Track key={track.id} track={track} symbol="+" onClick={onAddTrack} />
        ))}
      </ul>
    </div>
  );
}

export default Tracklist;
