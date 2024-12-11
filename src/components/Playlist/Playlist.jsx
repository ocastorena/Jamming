import React from "react";
import styles from "./Playlist.module.css";

function Playlist() {
  return (
    <div className={styles.playlist}>
      <h2>Playlist</h2>
      <ul>
        <li>Track 4</li>
        <li>Track 5</li>
        <li>Track 6</li>
      </ul>
    </div>
  );
}

export default Playlist;
