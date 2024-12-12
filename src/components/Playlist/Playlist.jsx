import React from "react";
import Track from "../Track/Track";
import styles from "./Playlist.module.css";

function Playlist(props) {
  return (
    <div className={styles.playlist}>
      <input
        type="text"
        onChange={props.onChange}
        placeholder="Enter playlist name..."
        value={props.name}
      ></input>
      <ul>
        {props.playlist.map((track) => (
          <Track key={track.id} track={track} symbol="-" />
        ))}
      </ul>
    </div>
  );
}

export default Playlist;
