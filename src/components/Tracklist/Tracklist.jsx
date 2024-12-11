import React from "react";
import styles from "./Tracklist.module.css";

function Tracklist() {
  return (
    <div className={styles.tracklist}>
      <h2>Tracklist</h2>
      <ul>
        <li>Track 1</li>
        <li>Track 2</li>
        <li>Track 3</li>
      </ul>
    </div>
  );
}

export default Tracklist;
